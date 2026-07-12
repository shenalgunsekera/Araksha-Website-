import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export const metadata = { title: 'Our Partners | Araksha — Samson Insurance Brokers' };

const life = [
  { name: 'AIA Insurance', src: '/partners/life/aia.jpg' },
  { name: 'SLIC Life', src: '/partners/life/slic-life.webp' },
  { name: 'Softlogic Life', src: '/partners/life/softlogic-life.webp' },
  { name: 'Ceylinco Life', src: '/partners/life/ceylinco-life.webp' },
  { name: 'Continental Insurance Life', src: '/partners/life/continental-life.jpg' },
  { name: 'Amana Takaful Life', src: '/partners/life/amana-life.jpg' },
  { name: 'Union Assurance', src: '/partners/life/union.webp' },
  { name: 'HNB Assurance', src: '/partners/life/hnb-assurance.webp' },
  { name: 'Janashakthi Life', src: '/partners/life/janashakthi.webp' },
  { name: 'LOLC Life Assurance', src: '/partners/life/lolc-life.webp' },
  { name: 'Sanasa Life Insurance', src: '/partners/life/sanasa-life.webp' },
  { name: 'COOP Life', src: '/partners/life/coop-life.webp' },
];

const general = [
  { name: 'COOP Insurance', src: '/partners/general/coop.webp' },
  { name: 'Fairfirst Insurance', src: '/partners/general/fairfirst.webp' },
  { name: 'HNB General Insurance', src: '/partners/general/hnb-general.webp' },
  { name: 'LOLC General Insurance', src: '/partners/general/lolc-general.webp' },
  { name: 'Ceylinco VIP', src: '/partners/general/ceylinco-vip.webp' },
  { name: 'Continental Insurance', src: '/partners/general/continental.jpg' },
  { name: 'MBSL Insurance', src: '/partners/general/mbsl.webp' },
  { name: 'Orient Insurance', src: '/partners/general/orient.jpg' },
  { name: "People's Insurance", src: '/partners/general/peoples.jpg' },
  { name: 'Sri Lanka Insurance — SLIC', src: '/partners/general/slic.webp' },
  { name: 'Allianz Insurance', src: '/partners/general/allianz.jpg' },
];

function Panel({ title, items }: { title: string; items: { name: string; src: string }[] }) {
  return (
    <div className="mb-14 last:mb-0">
      <h2 className="font-display text-brand-900 text-center leading-[1.05] text-balance break-words max-w-3xl mx-auto px-4 mb-7"
        style={{ fontSize: 'clamp(24px, 4.5vw, 52px)' }}>
        {title}
      </h2>
      <div className="bg-brand-900 rounded-3xl p-6 md:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {items.map((p) => (
            <div key={p.name} className="group">
              <div className="bg-white rounded-2xl aspect-square flex items-center justify-center p-4 group-hover:-translate-y-1 group-hover:shadow-brand transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" decoding="async" width={160} height={160} />
              </div>
              <p className="mt-2.5 text-center font-body text-[11px] text-white/70 leading-snug">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <main className="bg-ink">
      <section className="bg-brand-radial border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Our partners</p>
            <h1 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}>
              OUR TRUSTED<br /><span className="bg-brand-gradient bg-clip-text text-transparent">INSURANCE PARTNERS</span>
            </h1>
            <p className="mt-5 font-body text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
              Our partnerships with Sri Lanka&apos;s leading insurers let us deliver competitively priced,
              flexible policies — with the customer support you&apos;d expect from an established provider when
              it&apos;s time to claim. Our partners share our commitment to transparency, trust and
              customer-first service, so together we can offer you an extraordinary insurance experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal><Panel title="OUR LIFE INSURANCE PARTNERS" items={life} /></Reveal>
          <Reveal><Panel title="OUR GENERAL INSURANCE PARTNERS" items={general} /></Reveal>
        </div>
      </section>

      <section className="pb-24">
        <Reveal className="max-w-[900px] mx-auto px-6 text-center">
          <p className="font-body text-base text-gray-500 mb-6">
            One request compares them all — let us find your best cover across every partner.
          </p>
          <Link href="/get-quote" className="btn-brand px-10 py-4">Get a Quote</Link>
        </Reveal>
      </section>
    </main>
  );
}
