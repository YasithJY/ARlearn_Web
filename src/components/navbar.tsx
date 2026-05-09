import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, Sparkles, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "shadow-elevated" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand shadow-glow">
              <Sparkles className="h-4 w-4 text-gold" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold tracking-tight">AR · STEAM</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {SITE.projectId}
              </div>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-gold" : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {n.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-xl border border-border/50 bg-card/40 transition hover:border-gold/50 hover:text-gold"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to="/components"
              className="hidden rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition hover:brightness-110 sm:inline-flex"
            >
              Explore
            </Link>
            <button
              className="grid h-9 w-9 place-items-center rounded-xl border border-border/50 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-2 lg:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`block rounded-xl px-4 py-3 text-sm ${
                  path === n.to ? "bg-accent text-gold" : "hover:bg-accent/60"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
