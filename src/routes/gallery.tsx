import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-shell";
import { COMPONENTS } from "@/lib/site";
import { Image as ImageIcon, PlayCircle, Layers } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Media Gallery - Narrative AR · STEAM" },
      { name: "description", content: "UI mockups, storyboards, system diagrams and demo videos." },
    ],
  }),
  component: Gallery,
});

const categories = [
  { icon: ImageIcon, label: "UI Mockups" },
  { icon: Layers, label: "Storyboards" },
  { icon: Layers, label: "System Diagrams" },
  { icon: PlayCircle, label: "Demo Videos" },
];

function Gallery() {
  return (
    <main>
      <PageHero
        eyebrow="Media Gallery"
        title="The visual language of the project."
        desc="Mockups, storyboards, AR workflow visuals, and screenshots from across all four research components."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <span key={c.label} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <c.icon className="h-4 w-4 text-gold" /> {c.label}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMPONENTS.flatMap((c, i) => [
            { src: c.image, label: `${c.title} · Hero`, i },
            { src: c.image, label: `${c.title} · Scene`, i: i + 10 },
            { src: c.image, label: `${c.title} · Workflow`, i: i + 20 },
          ]).map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.05 }}
              className="glass group relative overflow-hidden rounded-2xl"
            >
              <img src={m.src} alt={m.label} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-sm font-semibold">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 glass-strong rounded-3xl p-8">
          <h2 className="font-display text-2xl font-bold text-gradient-brand">Demo Videos</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {COMPONENTS.map((c) => (
              <div key={c.slug} className="glass relative aspect-video overflow-hidden rounded-2xl">
                <img src={c.image} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-gold shadow-gold">
                    <PlayCircle className="h-8 w-8 text-gold-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 text-sm font-semibold">{c.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
