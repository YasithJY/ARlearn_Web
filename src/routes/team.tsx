import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { TEAM, SUPERVISORS } from "@/lib/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team - Narrative AR · STEAM" },
      { name: "description", content: "The researchers and supervisors behind R26-IM-003." },
    ],
  }),
  component: Team,
});

function PersonCard({ p, index }: { p: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative w-44 sm:w-48 aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-200 transition hover:ring-glow shrink-0"
    >
      {p.image ? (
        <img
          src={p.image}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400">
          <span className="font-display text-4xl font-bold text-neutral-500">{p.initials}</span>
        </div>
      )}
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
      
      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-lg font-bold leading-tight text-white shadow-sm">{p.name}</h3>
        {p.role && (
          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gold drop-shadow-md">
            {p.role}
          </p>
        )}
      </div>
    </motion.article>
  );
}

function Team() {
  return (
    <main>
      <PageHero
        eyebrow="The Team"
        title="Four researchers. One vision."
        desc="A multidisciplinary team blending AR engineering, interaction design, education research and data analysis."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-8 justify-center items-center xl:items-start">
          
          {/* Supervisors Section */}
          <div className="flex-none">
            <h2 className="mb-8 font-display text-2xl font-bold flex items-center justify-center xl:justify-start gap-4 text-white">
              <span className="w-8 h-px bg-gold"></span> Supervisors
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {SUPERVISORS.map((p, i) => (
                <PersonCard key={p.name} p={p} index={i} />
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden xl:block w-px bg-border/40 self-stretch mt-12 mb-4"></div>

          {/* Team Members Section */}
          <div className="flex-none">
            <h2 className="mb-8 font-display text-2xl font-bold flex items-center justify-center xl:justify-start gap-4 text-white">
              <span className="w-8 h-px bg-gold"></span> Team Members
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {TEAM.map((p, i) => (
                <PersonCard key={p.name} p={p} index={i} />
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}

