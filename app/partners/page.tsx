import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export const metadata = { title: 'Our Partners | Araksha — Samson Insurance Brokers' };

const partners = [
  { name: 'AIA Insurance', logo: '/partners/aia.jpg' },
  { name: 'Allianz Insurance', logo: '/partners/allianz.jpg' },
  { name: 'Amana Takaful Insurance', logo: '/partners/amana.jpg' },
  { name: 'Ceylinco Insurance', logo: '/partners/ceylinco.jpg' },
  { name: 'Continental Insurance', logo: '/partners/continental.jpg' },
  { name: 'Fairfirst Insurance', logo: '/partners/fairfirst.jpg' },
  { name: 'HNB Insurance', logo: '/partners/hnb.jpg' },
  { name: 'LOLC Insurance', logo: '/partners/lolc.jpg' },
  { name: 'MBSL Insurance', logo: '/partners/mbsl.jpg' },
  { name: 'Orient Insurance', logo: '/partners/orient.jpg' },
  { name: "People's Insurance", logo: '/partners/peoples.jpg' },
  { name: 'Softlogic Insurance', logo: '/partners/softlogic.jpg' },
  { name: 'Sri Lanka Insurance — SLIC', logo: '/partners/slic.jpg' },
  { name: 'Union Assurance', logo: '/partners/union.jpg' },
  { name: 'Janashakthi Insurance', logo: '' },
  { name: 'Sanasa Insurance', logo: '' },
  { name: 'COOP Insurance', logo: '' },
];

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.05} y={14}>
                <div className="bg-white rounded-2xl border border-gray-800 p-6 h-full flex flex-col items-center justify-center gap-4 hover:shadow-brand hover:-translate-y-1 transition-all duration-300">
                  {p.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={p.logo} alt={p.name} className="h-14 md:h-16 w-auto object-contain" loading="lazy" decoding="async" width={180} height={64} />
                  ) : (
                    <div className="h-14 md:h-16 flex items-center justify-center font-display text-2xl text-brand-200">
                      {p.name.split(' ')[0].toUpperCase()}
                    </div>
                  )}
                  <p className="font-body text-xs text-gray-500 text-center">{p.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
