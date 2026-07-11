'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthProvider';
import { logout } from '@/lib/customerAuth';

/**
 * Araksha navigation — deliberately different from Ceilao's burger-only bar:
 * a slim contact strip on top, then a clean white nav with the primary links
 * visible on desktop. Static markup, no entrance animations — paints instantly.
 */
const primary = [
  { href: '/', label: 'Home' },
  { href: '/insurance', label: 'Insurance' },
  { href: '/about', label: 'About Us' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

const secondary = [
  { href: '/learn', label: 'Learn Insurance' },
  { href: '/brokers', label: 'Why a Broker?' },
  { href: '/regulator', label: 'Regulator (IRCSL)' },
  { href: '/ombudsman', label: 'Insurance Ombudsman' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  useEffect(() => { setOpen(false); }, [pathname]);

  const doLogout = async () => {
    await logout();
    router.push('/');
  };

  const firstName = (profile?.full_name || user?.displayName || '').split(' ')[0];

  return (
    <>
      {/* Contact strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-900 text-white/90">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-9 flex items-center justify-between font-body text-[11px] md:text-xs">
          <div className="flex items-center gap-4">
            <a href="tel:+94112131800" className="hover:text-white flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.66 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.23a2 2 0 0 1 2.11-.45c.85.32 1.74.54 2.64.66A2 2 0 0 1 22 16.92z"/></svg>
              011 213 1800
            </a>
            <a href="mailto:hello@araksha.lk" className="hidden sm:flex hover:text-white items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
              hello@araksha.lk
            </a>
          </div>
          <p className="hidden md:block text-white/70">Part of the DSI Samson Group · Trusted since 2008</p>
        </div>
      </div>

      {/* Main nav */}
      <header className="fixed top-9 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-800 shadow-[0_4px_20px_-12px_rgba(2,32,92,0.15)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/araksha-logo.png" alt="Araksha — Samson Insurance Brokers" className="h-11 w-auto" width={44} height={44} />
            <span className="hidden sm:block leading-tight">
              <span className="block font-display text-xl tracking-wide text-brand-900">ARAKSHA</span>
              <span className="block font-body text-[9px] tracking-widest uppercase text-gray-500">Samson Insurance Brokers</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full font-body text-[13px] font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-brand bg-brand-50'
                    : 'text-gray-400 hover:text-brand hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {!loading && (
              user ? (
                <>
                  <Link href="/dashboard" className="hidden md:block px-3 py-2 font-body text-xs font-semibold text-gray-400 hover:text-brand transition-colors">
                    {firstName ? `Hi, ${firstName}` : 'Dashboard'}
                  </Link>
                  <button onClick={doLogout} className="hidden md:block px-2 py-2 font-body text-xs text-gray-500 hover:text-chalk transition-colors">
                    Log out
                  </button>
                </>
              ) : (
                <Link href="/login" className="hidden md:block px-3 py-2 font-body text-xs font-semibold text-gray-400 hover:text-brand transition-colors">
                  Login
                </Link>
              )
            )}
            <Link href="/get-quote" className="btn-brand px-5 py-2.5 !text-[11px]">
              Get a Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 rounded bg-chalk transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 rounded bg-chalk transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 rounded bg-chalk transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — CSS transition only, no JS animation cost */}
      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-200 lg:hidden ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <span className="font-display text-brand-900 text-xl tracking-wider">MENU</span>
          <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-chalk p-1" aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-6 py-3.5 font-body text-[15px] border-b border-gray-800/60 ${
                pathname === item.href ? 'text-brand font-semibold' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <p className="px-6 pt-5 pb-2 font-body text-[10px] tracking-widest uppercase text-gray-500">More</p>
          {secondary.map((item) => (
            <Link key={item.href} href={item.href} className="block px-6 py-2.5 font-body text-sm text-gray-400">
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-5 mt-2 border-t border-gray-800/60 flex flex-col gap-2.5">
            {user ? (
              <>
                <Link href="/dashboard" className="text-brand font-body text-sm font-semibold">My Dashboard</Link>
                <button onClick={doLogout} className="text-left text-gray-500 font-body text-sm">Log out</button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-chalk font-body text-sm">Login</Link>
                <Link href="/signup" className="text-brand font-body text-sm font-semibold">Create an account</Link>
              </>
            )}
          </div>
        </nav>
        <div className="p-6 border-t border-gray-800">
          <Link href="/get-quote" className="btn-brand w-full">GET A FREE QUOTE</Link>
          <p className="mt-4 text-center font-body text-xs text-gray-500">011 213 1800 · hello@araksha.lk</p>
        </div>
      </div>

      {/* Spacer so page content clears the fixed bars */}
      <div className="h-[100px]" />
    </>
  );
}
