import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';

const values = [
  { title: 'Reliable', desc: 'Trustworthy insurance consultancy — your needs handled with precision and dependability.' },
  { title: 'Customer Centric', desc: 'We build strong relationships by understanding your specific needs, and aim to go past your expectations.' },
  { title: 'Transparent', desc: 'Clear, open communication that maintains trust and helps you make informed decisions.' },
  { title: 'Partnership', desc: 'We partner with Sri Lanka’s top insurers, navigating policies and regulations to secure cost-effective cover.' },
  { title: 'Expert Team', desc: 'Deep knowledge of the insurance system in Sri Lanka and beyond — solutions for your needs, budget and goals.' },
];

/* Duotone brand icons — navy strokes with a sky accent, on a soft tile */
const icons: Record<string, React.ReactNode> = {
  vehicle: (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 28l3.5-9A4 4 0 0 1 15.2 16h17.6a4 4 0 0 1 3.7 3l3.5 9" stroke="#02205C" strokeWidth="2.6" />
      <rect x="6" y="28" width="36" height="9" rx="3" stroke="#02205C" strokeWidth="2.6" />
      <circle cx="14.5" cy="37" r="3.4" fill="#38A3E0" />
      <circle cx="33.5" cy="37" r="3.4" fill="#38A3E0" />
      <path d="M14 22h20" stroke="#38A3E0" strokeWidth="2.6" />
    </svg>
  ),
  health: (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 40s-13-8.3-17-16.2C4 17 8 10.5 14.6 10.5c4 0 7 2.3 9.4 5.6 2.4-3.3 5.4-5.6 9.4-5.6C40 10.5 44 17 41 23.8 37 31.7 24 40 24 40z" stroke="#02205C" strokeWidth="2.6" />
      <path d="M12 24h6l3-6 5 12 3.5-6H36" stroke="#38A3E0" strokeWidth="2.6" />
    </svg>
  ),
  property: (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="12" width="18" height="28" rx="1.5" stroke="#02205C" strokeWidth="2.6" />
      <path d="M27 20h10a2 2 0 0 1 2 2v18" stroke="#02205C" strokeWidth="2.6" />
      <path d="M6 40h37" stroke="#02205C" strokeWidth="2.6" />
      <path d="M14 18.5h3M19 18.5h3M14 24h3M19 24h3M14 29.5h3M19 29.5h3M32 26h3M32 31h3" stroke="#38A3E0" strokeWidth="2.4" />
    </svg>
  ),
  pension: (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="18" r="8" stroke="#02205C" strokeWidth="2.6" />
      <path d="M24 13.5v4.8l3 2.2" stroke="#38A3E0" strokeWidth="2.4" />
      <path d="M10 40c1.5-7 7-11 14-11s12.5 4 14 11" stroke="#02205C" strokeWidth="2.6" />
      <path d="M31 32l3.2 3.2 5.8-6" stroke="#38A3E0" strokeWidth="2.6" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 22L24 8l17 14" stroke="#38A3E0" strokeWidth="2.6" />
      <path d="M11 20v18h26V20" stroke="#02205C" strokeWidth="2.6" />
      <rect x="20" y="27" width="8" height="11" stroke="#02205C" strokeWidth="2.4" />
    </svg>
  ),
  marine: (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 32l4-8h24l4 8" stroke="#02205C" strokeWidth="2.6" />
      <path d="M24 24V10m0 0l8 8m-8-8l-8 8" stroke="#38A3E0" strokeWidth="2.6" />
      <path d="M5 38c3 2.4 6 2.4 9 0s6-2.4 9 0 6 2.4 9 0 6-2.4 11 0" stroke="#02205C" strokeWidth="2.6" />
    </svg>
  ),
};

const services = [
  { label: 'Vehicle Insurance', desc: 'Protect your ride with trusted vehicle insurance, compared across every leading insurer.', icon: 'vehicle' },
  { label: 'Health Insurance', desc: 'The best health cover in Sri Lanka with affordable medical plans that fit your needs.', icon: 'health' },
  { label: 'Property Insurance', desc: 'Safeguard your buildings and assets from damage or loss.', icon: 'property' },
  { label: 'Pension Plan', desc: 'Secure your future with steady income protection after retirement.', icon: 'pension' },
  { label: 'Home Insurance', desc: 'Secure your home and belongings with the right home cover.', icon: 'home' },
  { label: 'Marine Insurance', desc: 'Comprehensive cover for cargo and marine operations.', icon: 'marine' },
];

const features = [
  { title: 'Tailored Insurance Plans', desc: 'Plans customised for your needs.' },
  { title: 'Customer Support', desc: 'Help available whenever you need it.' },
  { title: 'Fast Claim Assistance', desc: 'Quick and stress-free claims.' },
  { title: 'Affordable Premiums', desc: 'Quality coverage at fair prices.' },
  { title: 'Expert Insurance Advice', desc: 'Guidance from trusted professionals.' },
  { title: 'Nationwide Coverage', desc: 'Protection wherever you are in Sri Lanka.' },
];

const lifePartners = [
  { src: '/partners/life/aia.jpg',            alt: 'AIA Insurance' },
  { src: '/partners/life/slic-life.webp',     alt: 'SLIC Life' },
  { src: '/partners/life/softlogic-life.webp', alt: 'Softlogic Life' },
  { src: '/partners/life/ceylinco-life.webp', alt: 'Ceylinco Life' },
  { src: '/partners/life/continental-life.jpg', alt: 'Continental Insurance Life' },
  { src: '/partners/life/amana-life.jpg',     alt: 'Amana Takaful Life' },
  { src: '/partners/life/union.webp',         alt: 'Union Assurance' },
  { src: '/partners/life/hnb-assurance.webp', alt: 'HNB Assurance' },
  { src: '/partners/life/janashakthi.webp',   alt: 'Janashakthi Life' },
  { src: '/partners/life/lolc-life.webp',     alt: 'LOLC Life Assurance' },
  { src: '/partners/life/sanasa-life.webp',   alt: 'Sanasa Life Insurance' },
  { src: '/partners/life/coop-life.webp',     alt: 'COOP Life' },
];

const generalPartners = [
  { src: '/partners/general/coop.webp',         alt: 'COOP Insurance' },
  { src: '/partners/general/fairfirst.webp',    alt: 'Fairfirst Insurance' },
  { src: '/partners/general/hnb-general.webp',  alt: 'HNB General Insurance' },
  { src: '/partners/general/lolc-general.webp', alt: 'LOLC General Insurance' },
  { src: '/partners/general/ceylinco-vip.webp', alt: 'Ceylinco VIP' },
  { src: '/partners/general/continental.jpg',   alt: 'Continental Insurance' },
  { src: '/partners/general/mbsl.webp',         alt: 'MBSL Insurance' },
  { src: '/partners/general/orient.jpg',        alt: 'Orient Insurance' },
  { src: '/partners/general/peoples.jpg',       alt: "People's Insurance" },
  { src: '/partners/general/slic.webp',         alt: 'Sri Lanka Insurance' },
  { src: '/partners/general/allianz.jpg',       alt: 'Allianz Insurance' },
];

/* Navy showcase panel with white logo tiles — the "cool design" treatment */
function PartnerPanel({ title, logos }: { title: string; logos: { src: string; alt: string }[] }) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="text-center mb-7">
        <span className="inline-block font-body text-[11px] font-bold tracking-widest uppercase bg-brand-400 text-white rounded-full px-5 py-1.5 mb-4">
          Insurance
        </span>
        <h3 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}>
          {title}
        </h3>
      </div>
      <div className="bg-brand-900 rounded-3xl p-6 md:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {logos.map((l) => (
            <div key={l.src} className="bg-white rounded-2xl aspect-square flex items-center justify-center p-4 hover:-translate-y-1 hover:shadow-brand transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.src} alt={l.alt} className="max-h-full max-w-full object-contain" loading="lazy" decoding="async" width={160} height={160} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      {/* ── Hero — arch-framed photo + floating chips; fills the viewport
             below the 100px header stack exactly on desktop ── */}
      <section className="relative overflow-hidden bg-brand-radial lg:h-[calc(100svh-100px)] lg:min-h-[600px]">
        {/* decorative dot grid + blob */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/2 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(rgba(37,94,171,0.35) 1.2px, transparent 1.2px)', backgroundSize: '26px 26px' }}
        />
        <div aria-hidden className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-brand-100 blur-3xl opacity-70" />

        <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-8 py-12 lg:py-0 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <Reveal>
            <h1 className="font-display text-brand-900 leading-[0.98]" style={{ fontSize: 'clamp(42px, 6vw, 84px)' }}>
              YOUR TRUSTED<br />INSURANCE BROKER<br />
              <span className="relative inline-block">
                <span className="bg-brand-gradient bg-clip-text text-transparent">IN SRI LANKA</span>
                <svg aria-hidden className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M3 7 C 60 2, 240 2, 297 6" stroke="#38A3E0" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="mt-7 font-body text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
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

          {/* Floating composite — cutout artwork shown whole, never cropped */}
          <Reveal delay={0.1} y={20} className="hidden sm:block">
            <div className="relative mx-auto max-w-[420px] lg:max-w-[500px]">
              {/* soft glow + dashed ring behind the artwork */}
              <div aria-hidden className="absolute inset-x-6 top-10 bottom-6 rounded-full bg-brand-100 blur-2xl opacity-80" />
              <div aria-hidden className="absolute -inset-2 rounded-full border-2 border-dashed border-brand-200/70" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/hero-family.webp"
                alt="Everything Araksha protects — your family, home, vehicle, health and travel, all under one umbrella"
                className="relative w-full h-[420px] lg:h-[500px] object-contain drop-shadow-[0_24px_45px_rgba(2,32,92,0.18)]"
                fetchPriority="high"
                decoding="async"
                width={1365}
                height={1536}
              />
              {/* floating chips */}
              <div className="absolute top-14 -left-4 lg:-left-8 bg-white rounded-2xl shadow-lg border border-gray-800 px-4 py-2.5 flex items-center gap-2.5">
                <span className="text-lg">🛡️</span>
                <div className="leading-tight">
                  <p className="font-body text-xs font-bold text-chalk">IRCSL Licensed</p>
                  <p className="font-body text-[10px] text-gray-500">Life & General broking</p>
                </div>
              </div>
              <div className="absolute top-40 -right-2 lg:-right-6 bg-white rounded-2xl shadow-lg border border-gray-800 px-4 py-2.5 flex items-center gap-2.5">
                <span className="text-lg">⭐</span>
                <div className="leading-tight">
                  <p className="font-body text-xs font-bold text-chalk">MDRT advisors</p>
                  <p className="font-body text-[10px] text-gray-500">Award-winning team</p>
                </div>
              </div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-max bg-brand-900 text-white rounded-full shadow-lg px-5 py-2.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-light animate-pulse" />
                <p className="font-body text-xs font-semibold">Part of the DSI Samson Group</p>
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
                  <div className="h-14 w-14 rounded-2xl bg-brand-50 p-2.5 mb-4 group-hover:scale-105 transition-transform">{icons[s.icon]}</div>
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

      {/* ── Partners — Life & General showcase panels ── */}
      <section className="py-16 md:py-24 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal><PartnerPanel title="OUR LIFE INSURANCE PARTNERS" logos={lifePartners} /></Reveal>
          <Reveal><PartnerPanel title="OUR GENERAL INSURANCE PARTNERS" logos={generalPartners} /></Reveal>
          <div className="text-center mt-10">
            <Link href="/partners" className="font-body text-sm text-brand hover:underline">Learn more about our partners →</Link>
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
