import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export const metadata = { title: 'About Araksha | Samson Insurance Brokers' };

const values = [
  { title: 'Reliable', desc: 'We are committed to offering trustworthy insurance consultancy and assure you that your insurance needs will be handled with precision and dependability.' },
  { title: 'Customer Centric', desc: 'We are dedicated to maintaining strong relationships by understanding your specific needs, while consistently aiming to go past your expectations.' },
  { title: 'Transparent', desc: 'Araksha believes in clear and open communications. This transparent approach maintains trust and helps you to make informed decisions.' },
  { title: 'Partnership', desc: 'We partner with top insurance companies in Sri Lanka giving you diverse options — helping you navigate policies and regulations to secure cost-effective solutions.' },
  { title: 'Expert Team', desc: 'Araksha has deep knowledge of the insurance system in Sri Lanka and beyond — providing solutions matched to your needs, budget and objectives.' },
];

const directors = [
  {
    name: 'Mr. Nimal Balawardhane',
    role: 'Executive Director / CEO / Principal Officer',
    photo: '/team/nimal-balawardhane.jpg',
  },
  {
    name: 'Ms. Nelani Rajapaksa',
    role: 'Director',
    photo: '/team/nelani-rajapaksa.jpg',
  },
  {
    name: 'Mr. Thusitha Rajapaksa',
    role: 'Director',
    photo: '/team/thusitha-rajapaksa.jpg',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-ink">
      {/* Header */}
      <section className="bg-brand-radial border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Home / About Araksha</p>
            <h1 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}>
              ABOUT <span className="bg-brand-gradient bg-clip-text text-transparent">ARAKSHA</span>
            </h1>
            <p className="mt-5 font-body text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
              Samson Insurance Brokers — widely known as Araksha — is part of the DSI Samson Group
              with over 60 years of history, providing exceptional insurance services since 2008.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-24 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal className="mb-12">
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Why choose us</p>
            <h2 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(34px, 5vw, 68px)' }}>
              TRUSTED INSURANCE SOLUTIONS PARTNER
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.07} y={16}>
                <div className="bg-white rounded-2xl border border-gray-800 p-7 h-full hover:shadow-brand hover:-translate-y-1 transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand flex items-center justify-center font-display text-lg mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading text-xl text-chalk mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 md:py-24 bg-gray-900 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-4">
          <Reveal>
            <div className="bg-white rounded-3xl border border-gray-800 p-8 md:p-10 h-full">
              <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Our Mission</p>
              <p className="font-heading text-xl md:text-2xl text-chalk leading-relaxed">
                To provide personal, professional and trustworthy advice, services and products in life &
                general insurance — building strong networks with our stakeholders so our clients receive
                unparalleled support and solutions that truly meet their needs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-brand-900 text-white rounded-3xl p-8 md:p-10 h-full">
              <p className="font-body text-xs tracking-widest3 text-brand-light uppercase mb-4">Our Vision</p>
              <p className="font-heading text-xl md:text-2xl leading-relaxed">
                To become the most trusted and respected specialists in the life & general insurance
                industries — earning your confidence through our commitment to excellence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Directors */}
      <section className="py-20 md:py-28 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal className="text-center mb-14">
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Our team</p>
            <h2 className="font-display text-brand-900 leading-none" style={{ fontSize: 'clamp(34px, 5vw, 68px)' }}>
              MEET OUR DIRECTORS
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {directors.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08} y={18}>
                <div className="group text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.photo}
                    alt={d.name}
                    className="w-full aspect-[5/6] object-cover object-top rounded-3xl border border-gray-800 group-hover:shadow-brand transition-shadow duration-300"
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={766}
                  />
                  <h3 className="font-heading text-lg text-chalk mt-5">{d.name}</h3>
                  <p className="font-body text-xs tracking-widest uppercase text-brand mt-1.5 leading-relaxed">{d.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Reveal className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-display text-brand-900 leading-none mb-5" style={{ fontSize: 'clamp(34px, 5vw, 72px)' }}>
            LET&apos;S <span className="bg-brand-gradient bg-clip-text text-transparent">TALK COVER.</span>
          </h2>
          <p className="font-body text-base text-gray-500 max-w-xl mx-auto mb-8">
            Speak to an Araksha advisor today — no obligation, no jargon, just honest advice.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/get-quote" className="btn-brand px-9 py-4">Get a Quote</Link>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full border border-brand text-brand font-body text-xs font-semibold tracking-widest uppercase hover:bg-brand hover:text-white transition-colors">
              Contact us
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
