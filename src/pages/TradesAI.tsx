import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const TradesAI = () => {
  useEffect(() => {
    document.title = "The trades are the next frontier of AI — Michael Lewski";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter,sans-serif]">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b hairline">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            Lewski<span className="text-muted-foreground">.ca</span>
          </Link>
          <Link
            to="/#writing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <article className="reveal">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Essay · 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            The trades are the next frontier of AI.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-balance">
            Why vocational work — not knowledge work — will be transformed first,
            and why the next wave of AI millionaires won't just be devs. They'll
            be plumbers too.
          </p>

          <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/90">
            <p>
              While everyone debates which white-collar roles AI will replace,
              Jensen Huang, CEO of NVIDIA, said the quiet part out loud in Davos:
            </p>

            <blockquote className="border-l-2 border-foreground/30 pl-6 italic text-foreground/80">
              "We're talking about six-figure salaries for people building chip
              factories, computer factories, AI factories."
            </blockquote>

            <p>The biggest AI boom in history</p>
            <ul className="space-y-2 text-muted-foreground border-l hairline pl-6">
              <li>→ requires physical infrastructure</li>
              <li>→ which requires skilled trades</li>
              <li>→ which means six-figure incomes for the people who build it</li>
            </ul>

            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance pt-4">
              Plumbers. Electricians. Steel workers. Network technicians.
              Construction crews.
            </p>

            <p>
              While AI is automating office workflows, it can't pour concrete. It
              can't wire a data center. It can't install industrial cooling
              systems. And Microsoft's own research backs it up: the jobs least
              likely to be automated are physical work with humans or machines.
            </p>

            <h2 className="text-2xl md:text-3xl font-medium tracking-tight pt-8">
              At the same time
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 not-prose">
              {[
                { stat: "30%+", label: "rise in university costs over the last decade" },
                { stat: "<2011", label: "fewer students enrolled in 4-year degrees today" },
                { stat: "~25%", label: "of new skilled-trade hires are now Gen Z" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border hairline bg-[hsl(var(--surface))] p-6"
                >
                  <div className="text-3xl font-semibold tracking-tight">
                    {s.stat}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-medium tracking-tight pt-4">
              This isn't a trend. It's a structural shift.
            </p>

            <p>
              The largest infrastructure build-out in human history is happening
              right now — AI factories, chip plants, data centres. And the people
              building them are about to earn more than many of the office roles
              AI is replacing.
            </p>

            <p>
              The question is: <em>where will the money flow because of it?</em>
            </p>

            <p>We're seeing it clearly. If you see it too, let's talk.</p>
          </div>

          <div className="mt-16 pt-10 border-t hairline">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              What we're building
            </div>
            <div className="rounded-2xl border hairline bg-[hsl(var(--surface))] p-8">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                Bluebelt — modernizing the trades for the AI economy.
              </h3>
              <p className="mt-3 text-muted-foreground">
                AI-powered vocational training built for apprentices, employers,
                and the workforce of the next decade.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full">
                  <a href="https://www.bluebelt.co" target="_blank" rel="noreferrer">
                    Visit Bluebelt <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href="https://calendly.com/mike-bluebelt/quick-call"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a call <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t hairline">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Michael Lewski</span>
          <span className="font-mono">lewski.ca</span>
        </div>
      </footer>
    </div>
  );
};

export default TradesAI;
