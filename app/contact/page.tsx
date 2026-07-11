'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

export default function ContactPage() {
  const [form, setForm] = useState({ first: '', last: '', email: '', mobile: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // Opens the visitor's mail client pre-filled — no backend needed, never fails silently.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry — ${form.first} ${form.last}`.trim());
    const body = encodeURIComponent(
      `Name: ${form.first} ${form.last}\nEmail: ${form.email}\nMobile: ${form.mobile}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@araksha.lk?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const input =
    'w-full bg-white border border-gray-700 rounded-xl px-4 py-3 font-body text-sm text-chalk outline-none focus:border-brand transition-colors';

  return (
    <main className="bg-ink">
      <section className="bg-brand-radial border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Home / Contact Us</p>
            <h1 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}>
              GET IN <span className="bg-brand-gradient bg-clip-text text-transparent">TOUCH</span>
            </h1>
            <p className="mt-5 font-body text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
              Questions, quotes or claims — our team is a call or a message away.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* Form */}
          <Reveal>
            <form onSubmit={submit} className="bg-gray-900 rounded-3xl border border-gray-800 p-7 md:p-9">
              <h2 className="font-heading text-2xl text-chalk mb-1.5">Send us a message</h2>
              <p className="font-body text-sm text-gray-500 mb-7">Fill out the form and we&apos;ll get back to you quickly.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input required placeholder="First name" value={form.first} onChange={set('first')} className={input} />
                <input placeholder="Last name" value={form.last} onChange={set('last')} className={input} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input required type="email" placeholder="Email" value={form.email} onChange={set('email')} className={input} />
                <input type="tel" placeholder="Mobile number" value={form.mobile} onChange={set('mobile')} className={input} />
              </div>
              <textarea required placeholder="Your message…" rows={5} value={form.message} onChange={set('message')} className={`${input} resize-y mb-6`} />
              <button type="submit" className="btn-brand px-9 py-3.5">Send message</button>
              {sent && (
                <p className="mt-4 font-body text-sm text-brand">
                  Your email app should have opened with the message ready — just press send. Or call us on 011 213 1800.
                </p>
              )}
            </form>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-3xl border border-gray-800 p-7">
                <p className="font-body text-xs tracking-widest uppercase text-gray-500 mb-3">Address</p>
                <p className="font-heading text-lg text-chalk leading-relaxed">
                  Samson Insurance Brokers (Pvt) Limited,<br />
                  110, Kumaran Ratnam Road,<br />
                  Colombo 02, Sri Lanka.
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-800 p-7">
                <p className="font-body text-xs tracking-widest uppercase text-gray-500 mb-3">Contact</p>
                <a href="tel:+94768904023" className="block font-heading text-lg text-chalk hover:text-brand transition-colors">076 890 4023</a>
                <a href="tel:+94112131800" className="block font-heading text-lg text-chalk hover:text-brand transition-colors">011 213 1800</a>
              </div>
              <div className="bg-white rounded-3xl border border-gray-800 p-7">
                <p className="font-body text-xs tracking-widest uppercase text-gray-500 mb-3">Email</p>
                <a href="mailto:hello@araksha.lk" className="font-heading text-lg text-chalk hover:text-brand transition-colors">hello@araksha.lk</a>
              </div>
              <div className="bg-brand-900 text-white rounded-3xl p-7">
                <p className="font-body text-xs tracking-widest uppercase text-white/60 mb-2">Faster than email?</p>
                <p className="font-heading text-lg leading-relaxed mb-4">Start a quote request — our brokers call you back.</p>
                <a href="/get-quote" className="btn-brand">Get a Quote</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
