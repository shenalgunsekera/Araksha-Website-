import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'About Us', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Learn Insurance', href: '/learn' },
  { label: 'Regulator (IRCSL)', href: '/regulator' },
  { label: 'Ombudsman', href: '/ombudsman' },
];

const lifeLinks = [
  'Pension Plan', 'International Medical Covers', 'Education Insurance Plans',
  'Individual Medical Covers', 'Investment & Savings Plan', 'Decreasing Term Assurance',
];

const generalLinks = [
  'Vehicle Insurance', 'Property Insurance', 'Home Insurance',
  'Health Insurance', 'Personal Accident', 'Group Health Insurance',
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/araksha-logo.png" alt="Araksha" className="h-14 w-auto bg-white rounded-full p-1" width={56} height={56} loading="lazy" />
              <div className="leading-tight">
                <p className="font-display text-2xl tracking-wide">ARAKSHA</p>
                <p className="font-body text-[10px] tracking-widest uppercase text-white/60">Samson Insurance Brokers</p>
              </div>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs mb-6">
              Your trusted insurance broker in Sri Lanka — part of the DSI Samson Group,
              comparing the market for you since 2008.
            </p>
            <Link href="/get-quote" className="btn-brand">Get a Quote</Link>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-white/50 mb-5">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-white/75 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-white/50 mb-5">Life Insurance</p>
            <ul className="flex flex-col gap-2.5">
              {lifeLinks.map((l) => (
                <li key={l}>
                  <Link href="/insurance" className="font-body text-sm text-white/75 hover:text-white transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-white/50 mb-5">General Insurance</p>
            <ul className="flex flex-col gap-2.5 mb-7">
              {generalLinks.map((l) => (
                <li key={l}>
                  <Link href="/insurance" className="font-body text-sm text-white/75 hover:text-white transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
            <p className="font-body text-xs tracking-widest uppercase text-white/50 mb-2">Customer Support</p>
            <a href="tel:+94768904023" className="block font-body text-sm text-white/85 hover:text-white">076 890 4023</a>
            <a href="tel:+94112131800" className="block font-body text-sm text-white/85 hover:text-white">011 213 1800</a>
            <a href="mailto:hello@araksha.lk" className="block font-body text-sm text-white/85 hover:text-white mt-1.5">hello@araksha.lk</a>
            <p className="font-body text-xs text-white/60 mt-3 leading-relaxed">
              110, Kumaran Ratnam Road,<br />Colombo 02, Sri Lanka
            </p>
          </div>
        </div>

        <div className="py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/60">
            © {new Date().getFullYear()} Samson Insurance Brokers (Pvt) Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/50">Regulated by IRCSL · Licensed for Life & General insurance broking</p>
        </div>
      </div>
    </footer>
  );
}
