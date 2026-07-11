import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export const metadata = { title: 'Insurance Services | Araksha — Samson Insurance Brokers' };

const life = [
  'Pension Plan',
  'International Medical Covers',
  'Education Insurance Plans',
  'Individual Medical Covers',
  'Decreasing Term Assurance (Loan Protection Cover)',
  'Investment & Savings Plan',
];

const general = [
  'Vehicle Insurance',
  'Property Insurance',
  'Home Insurance',
  'Health Insurance',
  'Personal Accident',
  'Fleet Cover',
  'Solar Cover',
  'Marine Insurance',
  'Liability Insurance',
  'Engineering Insurance',
  'Travel Cover',
  'Medical Insurance',
];

function CoverList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item}>
          <Link href="/get-quote"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 bg-white border border-gray-800 hover:border-brand/50 hover:shadow-brand transition-all">
            <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
            <span className="font-body text-sm text-gray-300 group-hover:text-chalk flex-1">{item}</span>
            <svg className="text-gray-600 group-hover:text-brand transition-colors" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function InsurancePage() {
  return (
    <main className="bg-ink">
      <section className="bg-brand-radial border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Insurance made simple</p>
            <h1 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}>
              SIMPLE, RELIABLE PROTECTION<br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">FOR EVERY STAGE OF LIFE</span>
            </h1>
            <p className="mt-5 font-body text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
              Araksha provides a wide range of insurance services — simple, reliable coverage for all
              your everyday needs, protecting your future. Pick a cover to start a free comparison.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-7 md:p-9 h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-12 w-12 rounded-2xl bg-brand-gradient text-white flex items-center justify-center text-xl">☂️</div>
                <div>
                  <h2 className="font-display text-3xl text-brand-900 leading-none">LIFE INSURANCE</h2>
                  <p className="font-body text-xs text-gray-500 mt-1">Protect your family&apos;s tomorrow, today</p>
                </div>
              </div>
              <CoverList items={life} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-7 md:p-9 h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-12 w-12 rounded-2xl bg-brand-900 text-white flex items-center justify-center text-xl">🛡️</div>
                <div>
                  <h2 className="font-display text-3xl text-brand-900 leading-none">GENERAL INSURANCE</h2>
                  <p className="font-body text-xs text-gray-500 mt-1">Vehicles, property, health, business & more</p>
                </div>
              </div>
              <CoverList items={general} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <Reveal className="max-w-[900px] mx-auto px-6 text-center">
          <p className="font-body text-base text-gray-500 mb-6">
            Not sure which cover fits? Tell us your situation and we&apos;ll recommend the right one — free.
          </p>
          <Link href="/get-quote" className="btn-brand px-10 py-4">Get a free comparison</Link>
        </Reveal>
      </section>
    </main>
  );
}
