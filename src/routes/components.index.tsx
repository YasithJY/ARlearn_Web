import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { COMPONENTS } from "@/lib/site";

export const Route = createFileRoute("/components/")({
  head: () => ({
    meta: [
      { title: "Research Components - Narrative AR · STEAM" },
      { name: "description", content: "Four AR storybook research proposals across life science, measurement, physical science, and number concepts." },
    ],
  }),
  component: Components,
});

function Components() {
  return (
    <main>
      <PageHero
        eyebrow="Research Components"
        title="Four AR storybooks for early STEAM."
        desc="Each component is a focused research proposal evaluating a distinct slice of the primary STEAM curriculum through narrative-based AR."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {COMPONENTS.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl transition hover:ring-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.accent} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold backdrop-blur">
                  Component {String.fromCharCode(65 + i)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">By {c.author}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.short}</p>
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-wider text-gold">Topics</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.topics.map((t) => (
                      <span key={t} className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-[11px] text-gold">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-wider text-gold">Tech</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-card/60 px-2.5 py-0.5 text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/components/$slug"
                  params={{ slug: c.slug }}
                  className="group/btn mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition hover:brightness-110"
                >
                  Explore Proposal
                  <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
