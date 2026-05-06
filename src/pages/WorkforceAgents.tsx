import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const WorkforceAgents = () => {
  useEffect(() => {
    document.title = "Workforce in the age of agents — Michael Lewski";
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
            Workforce in the age of agents.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-balance">
            Notes on building tools that actually move skill — not just signal it.
          </p>

          <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/90">
            <p>
              Most contractors are still <em>thinking about AI</em>.
            </p>
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance">
              The smart ones implemented it into their business yesterday.
            </p>

            <p className="text-muted-foreground">
              No fluff. No theory. Actual builders. Actual operators. Actually
              implementing.
            </p>

            <p>
              We didn't just talk about AI. We used it. Step by step,
              contractors built their first project workflows in real time.
            </p>

            <blockquote className="border-l-2 border-foreground/30 pl-6 italic text-foreground/80">
              The gap isn't AI vs no AI. It's operators who get hands-on vs
              operators who think they're "too busy."
            </blockquote>

            <h2 className="text-2xl md:text-3xl font-medium tracking-tight pt-6">
              What changes when they actually ship
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              {[
                { stat: "Faster", label: "teams that move on shared context" },
                { stat: "Better", label: "margins from less rework and admin" },
                { stat: "Lighter", label: "back-office without losing control" },
                { stat: "More", label: "capacity without more headcount" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border hairline bg-[hsl(var(--surface))] p-6"
                >
                  <div className="text-2xl font-semibold tracking-tight">
                    {s.stat}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p>
              And more importantly — you're not figuring it out alone.
              Contractors from across Ontario, in one room, asking real
              questions, seeing what's actually possible.
            </p>

            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance pt-2">
              This is where AI is going. Not theory. Not hype. Real tools for
              real businesses.
            </p>

            <p>
              SMBs are about to get a serious edge. The ones who show up early
              will lap everyone else. If you want to 100x your business, these
              are the kind of reps you need — not scrolling, building.
            </p>

            <h2 className="text-2xl md:text-3xl font-medium tracking-tight pt-6">
              What we're doing at Bluebelt
            </h2>

            <ul className="space-y-2 text-muted-foreground border-l hairline pl-6">
              <li>→ Connecting contractors to real workflows</li>
              <li>→ Real hiring pipelines</li>
              <li>→ Real systems that actually move projects forward</li>
            </ul>

            <p>
              More to come there soon. You can get ahead just by being in these
              rooms.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t hairline">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Get in the room
            </div>
            <div className="rounded-2xl border hairline bg-[hsl(var(--surface))] p-8">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                Want to see what your team could ship in a week?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Book a quick call — happy to share what we're seeing work for
                contractors right now.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full">
                  <a
                    href="https://calendly.com/mike-bluebelt/quick-call"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a call <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://www.bluebelt.co" target="_blank" rel="noreferrer">
                    Visit Bluebelt <ArrowUpRight className="ml-1 h-4 w-4" />
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

export default WorkforceAgents;
