import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText, Image as ImageIcon, Presentation, Github, BookOpen, Smartphone } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { COMPONENTS } from "@/lib/site";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads - Narrative AR · STEAM" },
      { name: "description", content: "Proposals, posters, presentations, brochures, GitHub repos, research summaries and demo APKs." },
    ],
  }),
  component: Downloads,
});

const sections = [
  { icon: FileText, title: "Proposal PDFs", desc: "Full research proposals for each AR component." },
  { icon: ImageIcon, title: "Posters", desc: "High-resolution research posters." },
  { icon: Presentation, title: "Presentations", desc: "Project pitch decks and slides." },
  { icon: BookOpen, title: "Brochures", desc: "Audience-friendly project brochures." },
  { icon: Github, title: "GitHub Repositories", desc: "Source code and Unity projects." },
  { icon: FileText, title: "Research Summaries", desc: "Concise executive summaries." },
  { icon: Smartphone, title: "Demo APKs", desc: "Android AR demo builds." },
];

function Downloads() {
  return (
    <main>
      <PageHero
        eyebrow="Downloads"
        title="All resources, in one place."
        desc="Everything you need to read, present, build with, or evaluate the project."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand shadow-glow">
                  <s.icon className="h-5 w-5 text-gold" />
                </span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 grid gap-2">
                {COMPONENTS.map((c) => (
                  <a
                    key={c.slug}
                    href="#"
                    className="glass flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition hover:ring-glow"
                  >
                    <span className="truncate">{c.title}</span>
                    <Download className="h-4 w-4 flex-none text-gold" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
