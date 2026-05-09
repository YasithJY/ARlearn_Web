import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-shell";
import { BookOpen, Brain, Target, Layers, FlaskConical, Compass, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Project - Narrative AR · STEAM" },
      { name: "description", content: "The research story, problem statement, methodology and vision behind R26-IM-003." },
    ],
  }),
  component: About,
});

const sections = [
  {
    icon: BookOpen,
    title: "Project Overview",
    body: "R26-IM-003 investigates how narrative-driven augmented reality, when integrated with the Sri Lankan primary curriculum, can measurably improve STEAM learning outcomes for grades 3–5. Four AR storybook systems target life science, measurement, physical science, and number concepts.",
  },
  {
    icon: Target,
    title: "Problem Statement",
    body: "Primary STEAM education in Sri Lanka relies heavily on rote learning and 2D textbook abstractions. Children struggle to bridge symbolic content with real-world phenomena, leading to disengagement, low retention and gendered drop-off in STEM trajectories.",
  },
  {
    icon: Brain,
    title: "Research Background",
    body: "Mounting evidence shows AR meaningfully boosts spatial understanding, vocabulary acquisition and attention. However, most AR EdTech is built for high-resource Western classrooms. There is a clear gap for context-sensitive, narrative-led AR designed for South Asian primary schools.",
  },
  {
    icon: Compass,
    title: "Why Sri Lanka",
    body: "Sri Lanka has near-universal primary enrolment but persistent learning-quality gaps across rural and urban schools. Mobile penetration enables device-based AR, while curriculum reforms create a window to introduce evidence-based digital pedagogies.",
  },
  {
    icon: FlaskConical,
    title: "Research Gap",
    body: "Few studies evaluate narrative AR - not just AR as a viewer - for foundational STEAM learning in low-resource classrooms. Even fewer measure impact across multiple subject domains within a unified framework.",
  },
  {
    icon: Layers,
    title: "Objectives",
    body: "Design four narrative AR storybooks; deploy them in Sri Lankan primary classrooms; measure engagement, comprehension and retention; and produce a commercialization-ready platform aligned with SDG 4.",
  },
  {
    icon: Sparkles,
    title: "Methodology",
    body: "A mixed-methods evaluation: pre/post knowledge testing, classroom observation, teacher interviews, and analytics from in-app interactions. Each AR component runs an independent classroom pilot feeding into a unified comparative analysis.",
  },
  {
    icon: ShieldCheck,
    title: "Validation Approach",
    body: "Iterative prototyping with teacher co-design, expert curriculum review, usability testing with target-age children, and ethics-board approved field studies in partner primary schools.",
  },
];

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About the Project"
        title="A research platform for the AR learning era."
        desc="Built at the intersection of narrative design, augmented reality, and primary education research - purpose-built for the Sri Lankan classroom context."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="glass group rounded-2xl p-6 transition hover:ring-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand shadow-glow">
                <s.icon className="h-5 w-5 text-gold" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.article>
          ))}
        </div>

        {/* Architecture */}
        <div className="glass-strong mt-12 rounded-3xl p-8">
          <h3 className="font-display text-2xl font-bold text-gradient-brand">Overall Architecture</h3>
          <p className="mt-2 text-sm text-muted-foreground">A unified pipeline across all four research components.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-5">
            {["Curriculum Mapping", "Narrative Design", "AR Build (Unity)", "Classroom Pilot", "Impact Analytics"].map((step, i) => (
              <div key={step} className="glass rounded-2xl p-4 text-center">
                <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-gold font-bold text-gold-foreground">{i + 1}</div>
                <div className="mt-3 text-sm font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="glass-strong mt-8 rounded-3xl p-8">
          <h3 className="font-display text-2xl font-bold text-gradient-brand">Future Vision</h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            A scalable, multilingual AR learning platform - empowering teachers with content authoring,
            equipping schools with measurable learning analytics, and bringing narrative AR to every
            primary classroom across South Asia.
          </p>
        </div>
      </section>
    </main>
  );
}
