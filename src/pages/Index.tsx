import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/michael-lewski.png";
import bluebeltLogo from "@/assets/bluebelt-logo.png";

const experience = [
  { role: "Founder & CEO", org: "Bluebelt", period: "Present" },
  { role: "MBA", org: "Ivey Business School", period: "" },
  
  { role: "Office of the Premier", org: "Government of Ontario", period: "" },
  { role: "Lawrence National Centre", org: "Policy & Management", period: "" },
  { role: "Behr & Associates", org: "Advisory", period: "" },
];

const writing = [
  {
    title: "Care-er and The Good Life",
    desc: "Ivey Publishing case study on career, meaning, and the modern good life.",
    date: "Ivey Publishing",
    href: "https://www.iveypublishing.ca/s/product/career-and-the-good-life/01tOF000002QESnYAO",
  },
  {
    title: "The trades are the next frontier of AI",
    desc: "Why vocational work — not knowledge work — will be transformed first.",
    date: "Essay",
    href: "/writing/trades-ai",
    internal: true,
  },
  {
    title: "Workforce in the age of agents",
    desc: "Notes on building tools that actually move skill, not just signal it.",
    date: "Essay",
    href: "/writing/workforce-agents",
    internal: true,
  },
  {
    title: "Gen Z is out-earning Wall Street with a tool belt",
    desc: "How a 23-year-old electrician is making more than junior bankers — debt-free.",
    date: "Essay",
    href: "/writing/gen-z-trades",
    internal: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter,sans-serif]">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b hairline">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            Lewski<span className="text-muted-foreground">.ca</span>
          </a>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#focus" className="hover:text-foreground transition-colors">Focus</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#writing" className="hover:text-foreground transition-colors">Writing</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="relative pt-40 pb-32 md:pt-56 md:pb-40">
          <div className="absolute inset-0 hero-glow pointer-events-none -z-10" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6 reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono uppercase tracking-widest">Currently building Bluebelt</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-balance leading-[1.02] reveal reveal-delay-1">
            Building the future <br className="hidden md:block" />
            of work.
          </h1>
          <a
            href="https://www.bluebelt.co"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-white px-5 py-3 hover:scale-[1.02] transition-transform reveal reveal-delay-2"
            aria-label="Visit Bluebelt"
          >
            <img
              src={bluebeltLogo}
              alt="Bluebelt"
              className="h-6 md:h-7 w-auto"
            />
          </a>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground text-balance reveal reveal-delay-2">
            Founder of Bluebelt. Focused on AI, workforce innovation, and modern vocational training.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 reveal reveal-delay-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="https://www.bluebelt.co" target="_blank" rel="noreferrer">
                View Bluebelt <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </section>

        {/* About */}
        <Section id="about" label="01 / About">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-start">
            <div className="md:col-span-1 space-y-6">
              <div className="relative overflow-hidden rounded-2xl border hairline bg-[hsl(var(--surface))] aspect-[4/5]">
                <img
                  src={headshot}
                  alt="Portrait of Michael Lewski"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                Founder, operator, builder.
              </h2>
            </div>
            <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Michael Lewski — building at the intersection of AI and workforce
                development. My focus is on the people and industries the software
                world has historically overlooked.
              </p>
              <p>
                Before Bluebelt, I worked across business, policy, and execution —
                from the Office of the Premier of Ontario to advisory and research
                at Ivey and Carleton.
              </p>

              <details className="group/bio rounded-xl border hairline bg-[hsl(var(--surface))] open:bg-[hsl(var(--surface-elevated))] transition-colors">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 text-base font-medium text-foreground select-none">
                  <span>Read full bio</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-open/bio:hidden">
                    Expand +
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground hidden group-open/bio:inline">
                    Collapse −
                  </span>
                </summary>
                <div className="px-5 pb-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    I'm the Founder and CEO of <span className="text-foreground font-medium">Bluebelt</span> — a vocational training platform
                    for the AI economy. I started Bluebelt with one goal: to make
                    learning a trade as modern and accessible as learning to code.
                  </p>
                  <p>
                    My mission is to modernize how the trades industry learns,
                    grows, and connects — giving workers access to expert-led
                    training, career mobility, and better opportunities.
                  </p>
                  <p>
                    Today, Bluebelt is redefining how tradespeople upskill, get
                    certified, and find rewarding careers using technology,
                    expert-led training, and a platform built for the real people
                    who build our world.
                  </p>
                  <p>
                    At the intersection of tech, workforce development, and
                    AI-driven learning, I'm focused on creating a system that
                    redefines what it means to build a sustainable career in the
                    trades. I'm passionate about solving the skilled labour gap
                    with smarter tools and better learning.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </Section>

        {/* Focus */}
        <Section id="focus" label="02 / Currently">
          <div className="rounded-2xl border hairline bg-[hsl(var(--surface))] p-8 md:p-12 hover:border-foreground/20 transition-colors group">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="max-w-2xl">
                <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  Bluebelt
                </div>
                <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-balance">
                  An AI-powered platform modernizing how trades learn, grow, and connect.
                </h3>
                <p className="mt-5 text-muted-foreground text-lg">
                  Reimagining vocational training for the AI economy — built for
                  apprentices, employers, and the workforce of the next decade.
                </p>
              </div>
              <a
                href="https://www.bluebelt.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium link-underline"
              >
                Visit Bluebelt <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <details className="group/bb mt-8 rounded-xl border hairline bg-background open:bg-[hsl(var(--surface-elevated))] transition-colors">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 text-base font-medium select-none">
                <span>More on Bluebelt</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-open/bb:hidden">
                  Expand +
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground hidden group-open/bb:inline">
                  Collapse −
                </span>
              </summary>
              <div className="px-5 pb-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Bluebelt is a digital platform built for the skilled trades
                  industry — connecting workers, employers, and training
                  opportunities in one place.
                </p>
                <p>
                  We're building digital pathways that guide job seekers into
                  the right training programs and connect them to employers
                  faster.
                </p>
                <p>
                  Our mission is to bridge the gap between skilled tradespeople
                  and the opportunities that drive their growth — through
                  expert-led courses and a first-of-its-kind open vocational
                  training platform.
                </p>
              </div>
            </details>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" label="03 / Experience">
          <ul className="divide-y divide-[hsl(var(--hairline))] border-y hairline">
            {experience.map((e) => (
              <li
                key={e.role + e.org}
                className="grid grid-cols-12 gap-4 py-5 md:py-6 group hover:bg-[hsl(var(--surface-elevated))] transition-colors px-2 -mx-2 rounded-md"
              >
                <span className="col-span-12 md:col-span-5 font-medium">{e.role}</span>
                <span className="col-span-8 md:col-span-5 text-muted-foreground">{e.org}</span>
                <span className="col-span-4 md:col-span-2 text-right font-mono text-xs uppercase tracking-widest text-muted-foreground self-center">
                  {e.period}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Writing */}
        <Section id="writing" label="04 / Writing">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight max-w-md text-balance">
              Ideas on work, AI, and the future of skills.
            </h2>
            <span className="text-sm text-muted-foreground font-mono">Coming soon</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {writing.map((p: any) => {
              const isInternal = p.internal;
              const Tag: any = isInternal ? Link : p.href ? "a" : "article";
              const linkProps = isInternal
                ? { to: p.href }
                : p.href
                ? { href: p.href, target: "_blank", rel: "noreferrer" }
                : {};
              return (
                <Tag
                  key={p.title}
                  {...linkProps}
                  className="group block rounded-xl border hairline p-6 bg-[hsl(var(--surface))] hover:border-foreground/20 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                    {p.date}
                  </div>
                  <h3 className="text-lg font-medium leading-snug mb-3 text-balance">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <ArrowUpRight className="h-4 w-4 mt-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Tag>
              );
            })}
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
              05 / Contact
            </div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.05]">
              Let's connect.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Always open to conversations on building, the future of work, or
              backing what's next.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="mailto:michael@lewski.ca">
                  <Mail className="mr-2 h-4 w-4" /> michael@lewski.ca
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="https://calendly.com/mike-bluebelt/quick-call" target="_blank" rel="noreferrer">
                  Book a call <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="https://www.linkedin.com/in/lewski-m/" target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t hairline">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Michael Lewski</span>
          <span className="font-mono">lewski.ca</span>
        </div>
      </footer>
    </div>
  );
};

const Section = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-24 md:py-32 border-t hairline">
    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">
      {label}
    </div>
    {children}
  </section>
);

export default Index;
