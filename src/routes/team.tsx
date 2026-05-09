import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { TEAM } from "@/lib/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team - Narrative AR · STEAM" },
      { name: "description", content: "The four researchers behind R26-IM-003." },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <main>
      <PageHero
        eyebrow="The Team"
        title="Four researchers. One vision."
        desc="A multidisciplinary team blending AR engineering, interaction design, education research and data analysis."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 text-center transition hover:ring-glow"
            >
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gold/15 to-transparent" />
              <div className="relative">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-brand text-2xl font-display font-bold text-gold shadow-glow ring-2 ring-gold/30">
                  {p.initials}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-gold">{p.role}</p>
                <p className="mt-3 text-xs text-muted-foreground">Research: {p.component}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {p.skills.map((s) => (
                    <span key={s} className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-[11px] text-gold">{s}</span>
                  ))}
                </div>
                <div className="mt-5 flex justify-center gap-2">
                  {[Github, Linkedin, Mail].map((Icon, k) => (
                    <a key={k} href="#" className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 transition hover:border-gold/60 hover:text-gold">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
