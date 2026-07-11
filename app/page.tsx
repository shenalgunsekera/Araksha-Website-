import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import LogoMarquee from '@/components/ui/LogoMarquee';

const values = [
  { title: 'Reliable', desc: 'Trustworthy insurance consultancy — your needs handled with precision and dependability.' },
  { title: 'Customer Centric', desc: 'We build strong relationships by understanding your specific needs, and aim to go past your expectations.' },
  { title: 'Transparent', desc: 'Clear, open communication that maintains trust and helps you make informed decisions.' },
  { title: 'Partnership', desc: 'We partner with Sri Lanka’s top insurers, navigating policies and regulations to secure cost-effective cover.' },
  { title: 'Expert Team', desc: 'Deep knowledge of the insurance system in Sri Lanka and beyond — solutions for your needs, budget and goals.' },
];

const services = [
  { label: 'Vehicle Insurance', desc: 'Protect your ride with trusted vehicle insurance, compared across every leading insurer.', icon: '🚗' },
  { label: 'Health Insurance', desc: 'The best health cover in Sri Lanka with affordable medical plans that fit your needs.', icon: '🩺' },
  { label: 'Property Insurance', desc: 'Safeguard your buildings and assets from damage or loss.', icon: '🏢' },
  { label: 'Pension Plan', desc: 'Secure your future with steady income protection after retirement.', icon: '🌅' },
  { label: 'Home Insurance', desc: 'Secure your home and belongings with the right home cover.', icon: '🏠' },
  { label: 'Marine Insurance', desc: 'Comprehensive cover for cargo and marine operations.', icon: '🚢' },
];

const features = [
  { title: 'Tailored Insurance Plans', desc: 'Plans customised for your needs.' },
  { title: 'Customer Support', desc: 'Help available whenever you need it.' },
  { title: 'Fast Claim Assistance', desc: 'Quick and stress-free claims.' },
  { title: 'Affordable Premiums', desc: 'Quality coverage at fair prices.' },
  { title: 'Expert Insurance Advice', desc: 'Guidance from trusted professionals.' },
  { title: 'Nationwide Coverage', desc: 'Protection wherever you are in Sri Lanka.' },
];

const partners = [
  { src: '/partners/aia.jpg',         alt: 'AIA Insurance' },
  { src: '/partners/allianz.jpg',     alt: 'Allianz Insurance' },
  { src: '/partners/amana.jpg',       alt: 'Amana Takaful' },
  { src: '/partners/ceylinco.jpg',    alt: 'Ceylinco Insurance' },
  { src: '/partners/continental.jpg', alt: 'Continental Insurance' },
  { src: '/partners/hnb.jpg',         alt: 'HNB Insurance' },
  { src: '/partners/lolc.jpg',        alt: 'LOLC Insurance' },
  { src: '/partners/softlogic.jpg',   alt: 'Softlogic Insurance' },
  { src: '/partners/slic.jpg',        alt: 'Sri Lanka Insurance' },
  { src: '/partners/union.jpg',       alt: 'Union Assurance' },
  { src: '/partners/fairfirst.jpg',   alt: 'Fairfirst Insurance' },
  { src: '/partners/orient.jpg',      alt: 'Orient Insurance' },
  { src: '/partners/mbsl.jpg',        alt: 'MBSL Insurance' },
  { src: '/partners/peoples.jpg',     alt: "People's Insurance" },
];

const faqs = [
  {
    q: 'Who is Araksha?',
    a: 'Araksha is the brand of Samson Insurance Brokers (SIB), a trusted insurance broker in Sri Lanka and part of the DSI Samson Group. We have been dedicated to reliable insurance consultancy since 2008.',
  },
  {
    q: 'How is Araksha different from insurance companies?',
    a: 'An insurance company sells you its own policies. Araksha is an independent broker — we work for you, comparing policies across all the leading insurers and recommending the one that genuinely fits your needs and budget.',
  },
  {
    q: 'Why choose Araksha as my insurance broker?',
    a: 'Strong industry expertise, MDRT-winning advisors, partnerships with Sri Lanka’s top insurers, and a transparent, client-first approach — plus we stand beside you at claim time.',
  },
  {
    q: 'How do I get an insurance quote?',
    a: 'Click “Get a Quote”, tell us what you need in about two minutes, and our brokers will compare the market and call you back with a clear comparison. It’s free and there’s no obligation.',
  },
  {
    q: 'Can I switch my current insurance policy through Araksha?',
    a: 'Yes. Share your current policy details with us and we’ll review it, compare alternatives across the market, and handle the switch for you if a better option exists.',
  },
  {
    q: 'How do I contact Araksha for support?',
    a: 'Call us on 011 213 1800 or 076 890 4023, email hello@araksha.lk, or use the contact form — we’ll get back to you quickly.',
  },
];

const testimonials = [
  { text: 'Samson Insurance Brokers provide exceptional service — responsive, knowledgeable, and truly supportive. They make insurance simple and stress-free.', name: 'Mr. Rohan De Silva', where: 'Chairman, McLarens Group' },
  { text: 'We are working together for more than five years. They respond to our insurance matters with even one phone call, and always help us select ideal plans for our business.', name: 'Madawa', where: 'Maharagama' },
  { text: 'After a minor accident, Araksha handled my vehicle insurance claim quickly and professionally, guiding me through every step.', name: 'Kavindu', where: 'Negombo' },
  { text: 'My family needed medical support and Araksha took care of everything in a professional, caring manner during a stressful time.', name: 'Nadeesha Perera', where: 'Colombo' },
  { text: 'The team has provided our company with insurance for over 12 years — they compare every policy and help us pick the best cover. Great job Araksha!', name: 'Chathura', where: 'Malabe' },
  { text: 'It was the easy and hassle-free way to get my motor insurance. The team supported me the whole time — highly recommended.', name: 'Milinda', where: 'Kaluthara' },
];

export default function Home() {
  return (
    <main className="bg-ink">
      {/* ── Hero — split layout, distinct from Ceilao's full-bleed ── */}
      <section className="relative overflow-hidden bg-brand-radial">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-14 md:py-24 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-5">Insurance broker in Sri Lanka</p>
            <h1 className="font-display text-brand-900 leading-[0.98]" style={{ fontSize: 'clamp(42px, 6.5vw, 88px)' }}>
              YOUR TRUSTED<br />INSURANCE BROKER<br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">IN SRI LANKA</span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
              Consult Araksha to be your insurance advisor and receive exceptional comparisons
              in life insurance, vehicle insurance and more — one request, every leading insurer, zero pressure.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/get-quote" className="btn-brand px-8 py-3.5">Get a Quote</Link>
              <Link href="/insurance" className="inline-flex items-center px-7 py-3.5 rounded-full border border-brand text-brand font-body text-xs font-semibold tracking-widest uppercase hover:bg-brand hover:text-white transition-colors">
                Explore covers
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-9">
              <div>
                <Counter value="17+" className="font-display text-4xl text-brand" />
                <p className="font-body text-xs text-gray-500">Years of trust</p>
              </div>
              <div className="w-px h-10 bg-gray-800" />
              <div>
                <Counter value="14+" className="font-display text-4xl text-brand" />
                <p className="font-body text-xs text-gray-500">Insurer partners</p>
              </div>
              <div className="w-px h-10 bg-gray-800" />
              <div>
                <p className="font-display text-4xl text-brand">MDRT</p>
                <p className="font-body text-xs text-gray-500">Winning advisors</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={20}>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/hero-home.jpg"
                alt="A protected family home at dusk"
                className="w-full h-[320px] md:h-[460px] object-cover rounded-3xl shadow-brand"
                fetchPriority="high"
                decoding="async"
                width={1200}
                height={800}
              />
              <div className="absolute -bottom-5 left-6 right-6 sm:left-10 sm:right-auto bg-white rounded-2xl shadow-lg border border-gray-800 px-5 py-4 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-brand-gradient text-white flex items-center justify-center text-lg shrink-0">🛡️</div>
                <div>
                  <p className="font-body text-sm font-bold text-chalk">Life & General insurance</p>
                  <p className="font-body text-xs text-gray-500">Licensed broker · Regulated by IRCSL</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 md:py-28 border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/advisors.jpg"
              alt="The Araksha advisory team planning insurance solutions"
              className="w-full h-72 md:h-96 object-cover rounded-3xl border border-gray-800"
              loading="lazy"
              decoding="async"
              width={900}
              height={675}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">About us</p>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight text-chalk mb-6">
              Your trusted insurance partner since 2008.
            </h2>
            <p className="font-body text-base text-gray-400 leading-relaxed mb-4">
              Samson Insurance Brokers (SIB) — widely known as <span className="text-brand font-semibold">Araksha</span> — is part
              of the renowned <strong className="text-chalk">DSI Samson Group</strong> with over 60 years of history. Established in 2008,
              we provide exceptional insurance services, from life to motor and beyond, to individuals and businesses alike —
              with MDRT-winning advisors that make SIB stand out.
            </p>
            <p className="font-body text-base text-gray-500 leading-relaxed mb-8">
              We are committed to transparency, integrity and a client-first approach. Through collaboration with the
              top insurance companies in Sri Lanka, our goal is a first-class insurance experience — that&apos;s what makes Araksha exceptional.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-quote" className="btn-brand">Get an insurance quote</Link>
              <Link href="/about" className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-400 font-body text-xs font-semibold tracking-widest uppercase hover:border-brand hover:text-brand transition-colors">
                Read more
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-20 md:py-28 bg-gray-900 border-y border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal className="text-center mb-14">
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Why choose us</p>
            <h2 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
              TRUSTED INSURANCE SOLUTIONS PARTNER
            </h2>
            <p className="font-body text-base text-gray-500 max-w-2xl mx-auto mt-4">
              Araksha combines strong industry expertise with partnerships among top insurers —
              reliable, transparent, tailored plans to safeguard what matters most to you.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} y={16}>
                <div className="bg-white rounded-2xl border border-gray-800 p-6 h-full hover:shadow-brand hover:-translate-y-1 transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand flex items-center justify-center font-display text-lg mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading text-lg text-chalk mb-2">{v.title}</h3>
                  <p className="font-body text-[13px] text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal className="mb-12">
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Insurance</p>
            <h2 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
              EXPERT INSURANCE SERVICES<br />IN SRI LANKA
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) * 0.07} y={16}>
                <Link href="/get-quote"
                  className="group block bg-white rounded-2xl border border-gray-800 p-7 h-full hover:border-brand/50 hover:shadow-brand transition-all duration-300">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-heading text-xl text-chalk mb-2 group-hover:text-brand transition-colors">{s.label}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <span className="font-body text-[11px] tracking-widest uppercase text-brand flex items-center gap-2 group-hover:gap-3 transition-all">
                    Get a quote
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6h8M6 2l4 4-4 4" /></svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── I am looking for ── */}
      <section className="py-20 md:py-24 bg-brand-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal className="text-center mb-12">
            <p className="font-body text-xs tracking-widest3 text-brand-light uppercase mb-4">I am looking for</p>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(34px, 4.5vw, 64px)' }}>
              SMART INSURANCE SOLUTIONS FOR EVERY NEED
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06} y={14}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 h-full">
                  <h3 className="font-heading text-lg mb-1.5">{f.title}</h3>
                  <p className="font-body text-sm text-white/70">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 md:py-20 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-10 text-center">
              Our life & general insurance partners
            </p>
          </Reveal>
          <LogoMarquee logos={partners} />
          <div className="text-center mt-8">
            <Link href="/partners" className="font-body text-sm text-brand hover:underline">See all partners →</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28 bg-gray-900 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal className="text-center mb-12">
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Testimonials</p>
            <h2 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
              WHAT OUR CLIENTS SAY
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.07} y={16}>
                <figure className="bg-white rounded-2xl border border-gray-800 p-7 h-full flex flex-col">
                  <div className="text-brand text-xl mb-3">★★★★★</div>
                  <blockquote className="font-body text-sm text-gray-400 leading-relaxed flex-1">“{t.text}”</blockquote>
                  <figcaption className="mt-5 pt-4 border-t border-gray-800">
                    <p className="font-heading text-base text-chalk">{t.name}</p>
                    <p className="font-body text-xs text-gray-500">{t.where}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <Reveal className="text-center mb-12">
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">FAQ</p>
            <h2 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-gray-800 open:border-brand/40 open:shadow-brand transition-all">
                <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 font-heading text-base md:text-lg text-chalk">
                  {f.q}
                  <span className="text-brand transition-transform duration-200 group-open:rotate-45 text-xl leading-none shrink-0">+</span>
                </summary>
                <p className="px-6 pb-6 font-body text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24">
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="rounded-3xl bg-brand-gradient text-white px-8 py-14 md:px-16 text-center shadow-brand">
            <h2 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(34px, 5vw, 72px)' }}>
              SIMPLE, RELIABLE PROTECTION FOR EVERY STAGE OF LIFE
            </h2>
            <p className="font-body text-base text-white/85 max-w-2xl mx-auto mb-8">
              Tell us what you need once — we&apos;ll compare the market and call you back with a clear recommendation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/get-quote" className="inline-flex items-center px-9 py-4 rounded-full bg-white text-brand-700 font-body text-xs font-bold tracking-widest uppercase hover:-translate-y-0.5 transition-transform">
                Get a Quote
              </Link>
              <a href="tel:+94112131800" className="inline-flex items-center px-8 py-4 rounded-full border border-white/50 text-white font-body text-xs font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors">
                Call 011 213 1800
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
