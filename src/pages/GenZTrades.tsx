import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const GenZTrades = () => {
  useEffect(() => {
    document.title = "Gen Z and the blue-collar revolution — Michael Lewski";
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
            Gen Z is quietly out-earning Wall Street — with a tool belt.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-balance">
            Think an entry-level Wall Street job pays the most out of school?
            Think again.
          </p>

          <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/90">
            <p>
              Meet 23-year-old electrician Jacob Palmer: debt-free, thriving,
              and earning more than many junior finance roles on Wall Street.
            </p>

            <p>
              Straight out of high school, Jacob didn't follow the typical
              college path. When online classes didn't click for him during the
              pandemic, he pivoted — not into uncertainty, but into skills that
              pay real money. He started at $15/hour as an electrical
              apprentice. A couple of years later, the numbers tell the story.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              {[
                { stat: "$15/hr", label: "starting wage as an apprentice" },
                { stat: "~$90K", label: "grossed in 2024" },
                { stat: "$175K", label: "earned in 2025" },
                { stat: "$250K", label: "target for 2026 — solo operator" },
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

            <ul className="space-y-2 text-muted-foreground border-l hairline pl-6">
              <li>✓ Passed his electrical license</li>
              <li>✓ Started his own business</li>
              <li>✓ One man. One truck. No ceiling.</li>
            </ul>

            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance pt-2">
              No cubicle. No tens of thousands in student debt. No waiting on a
              "dream job."
            </p>

            <p>
              Just real skills, real work, real money — and real freedom.
            </p>

            <h2 className="text-2xl md:text-3xl font-medium tracking-tight pt-6">
              Compare the path
            </h2>

            <p>
              Junior analyst roles in finance and investment banking associates
              often start around $100–120K, with insane hours and zero
              ownership. Meanwhile, Jacob is running his own business, setting
              his own schedule, and building equity in something he owns.
            </p>

            <blockquote className="border-l-2 border-foreground/30 pl-6 italic text-foreground/80">
              That's not just a career. That's entrepreneurship in action.
            </blockquote>

            <p>
              You can be your own boss. Build something you control. Earn
              without limits. The next generation is figuring this out faster
              than the institutions trying to advise them.
            </p>

            <p className="text-sm text-muted-foreground">
              Source:{" "}
              <a
                href="https://fortune.com/article/meet-23-year-old-electrician-good-student-skipped-college-joined-gen-z-blue-collar-revolution-makes-6-figures/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Fortune — Meet the 23-year-old electrician who skipped college
              </a>
            </p>
          </div>

          <div className="mt-16 pt-10 border-t hairline">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Building for this generation
            </div>
            <div className="rounded-2xl border hairline bg-[hsl(var(--surface))] p-8">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                If this gets you fired up — let's talk.
              </h3>
              <p className="mt-3 text-muted-foreground">
                At Bluebelt, we're connecting the next generation to high-paying
                work in the trades. If you care about this too, I'd love to hear
                from you.
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

export default GenZTrades;
