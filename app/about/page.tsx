import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export const metadata = { title: 'About Us | Samson Insurance Brokers' };

// TODO(Araksha): replace with the real leadership team — names, roles and bios below are placeholders.
const team = [
  {
    name: 'Team Member One',
    role: 'Director',
    bio: 'Bio to be provided — a short profile covering experience, qualifications and areas of expertise within the insurance industry.',
  },
  {
    name: 'Team Member Two',
    role: 'Principal Officer',
    bio: 'Bio to be provided — a short profile covering experience, qualifications and areas of expertise within the insurance industry.',
  },
  {
    name: 'Team Member Three',
    role: 'Consultant',
    bio: 'Bio to be provided — a short profile covering experience, qualifications and areas of expertise within the insurance industry.',
  },
  {
    name: 'Team Member Four',
    role: 'Head of Sales & Operations',
    bio: 'Bio to be provided — a short profile covering experience, qualifications and areas of expertise within the insurance industry.',
  },
];

// TODO(Araksha): replace with the real group companies (or remove this section if not applicable).
const group = [
  { name: 'Group Company One', desc: 'Description to be provided — a brief overview of this group company and what it does.' },
  { name: 'Group Company Two', desc: 'Description to be provided — a brief overview of this group company and what it does.' },
  { name: 'Group Company Three', desc: 'Description to be provided — a brief overview of this group company and what it does.' },
];

function initials(name: string) {
  return name.replace(/^(Dr\.|Mr\.|Ms\.)\s*/, '').split(' ').map((w) => w[0]).slice(0, 2).join('');
}

export default function AboutPage() {
  return (
    <main className="bg-ink pt-16">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gray-100">
        <div className="absolute inset-0 bg-brand-radial pointer-events-none" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-5">About Araksha</p>
            <h1 className="font-display text-chalk leading-none" style={{ fontSize: 'clamp(48px, 8vw, 116px)' }}>
              YOUR TRUSTED<br /><span className="bg-brand-gradient bg-clip-text text-transparent">INSURANCE PARTNER.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Welcome / intro */}
      <section className="py-24 md:py-32 border-b border-gray-800">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight text-chalk">
              Welcome to Samson Insurance Brokers — tailored insurance solutions, safeguarding tomorrow.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="font-body text-base md:text-lg text-gray-400 leading-relaxed space-y-5">
              <p>
                Samson Insurance Brokers (Pvt) Ltd is the newest addition to our esteemed group of companies. Based in Sri Lanka,
                our mission is to provide tailored insurance solutions to meet your unique needs.
              </p>
              <p>
                Leveraging the expertise and resources of our established group, we are committed to delivering comprehensive
                coverage options with exceptional service. Our experienced team guides you through every step of the insurance
                process with integrity and personalised care.
              </p>
              <p>
                We are <span className="text-brand font-semibold">licensed to provide brokering services for both life and general
                insurance</span> from all insurance providers — helping you achieve peace of mind through reliable, innovative cover.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-100 border-b border-gray-800">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Leadership</p>
            <h2 className="font-display text-chalk leading-none mb-14" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
              THE TEAM BEHIND ARAKSHA
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 2) * 0.1} className="bg-gray-100">
                <div className="p-8 md:p-10 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-14 w-14 rounded-full bg-brand-gradient text-white flex items-center justify-center font-display text-xl shrink-0">
                      {initials(m.name)}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-chalk leading-tight">{m.name}</h3>
                      <p className="font-body text-xs tracking-widest uppercase text-brand mt-1">{m.role}</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About our group */}
      <section className="py-24 border-b border-gray-800">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Our group</p>
            <h2 className="font-display text-chalk leading-none mb-4" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
              PART OF SOMETHING BIGGER
            </h2>
            <p className="font-body text-base text-gray-500 max-w-2xl mb-14">
              Samson Insurance Brokers is backed by a diversified group spanning migration, logistics, talent, manufacturing and finance.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
            {group.map((g, i) => (
              <Reveal key={g.name} delay={(i % 3) * 0.08} y={18} className="bg-ink">
                <div className="group p-8 h-full hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-heading text-lg text-chalk mb-3 group-hover:text-brand-600 transition-colors">{g.name}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28">
        <Reveal className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-display text-chalk leading-none mb-6" style={{ fontSize: 'clamp(40px, 6vw, 92px)' }}>
            LET’S <span className="bg-brand-gradient bg-clip-text text-transparent">TALK COVER.</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Speak to an independent Araksha broker today — no obligation, no jargon, just honest advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-quote" className="inline-flex items-center px-10 py-4 bg-brand-gradient text-white font-display text-base tracking-widest uppercase transition-transform hover:-translate-y-0.5">
              Get a Quote
            </Link>
            <a href="tel:+94112131800" className="inline-flex items-center px-8 py-4 border border-brand text-brand font-display text-base tracking-widest uppercase hover:bg-brand hover:text-white transition-colors">
              Call 011 213 1800
            </a>
          </div>
          <p className="mt-8 font-body text-sm text-gray-500">
            hello@araksha.lk · Colombo, Sri Lanka
          </p>
        </Reveal>
      </section>
    </main>
  );
}
