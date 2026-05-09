import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand shadow-glow">
                <Sparkles className="h-4 w-4 text-gold" />
              </span>
              <div>
                <div className="font-display font-bold">Narrative AR · STEAM</div>
                <div className="text-xs text-muted-foreground">{SITE.projectId}</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              An EdTech research initiative reimagining early STEAM learning in Sri Lankan primary
              classrooms through narrative-driven augmented reality.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Github, href: SITE.github, label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 transition hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </div>
            <ul className="space-y-2 text-sm">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Engage
            </div>
            <ul className="space-y-2 text-sm">
              {NAV.slice(5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Narrative AR · STEAM Research Group. All rights reserved.</p>
          <p>Aligned with UN SDG 4 - Quality Education</p>
        </div>
      </div>
    </footer>
  );
}
