import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Target,
  Lightbulb,
  Users,
  Layers,
  Rocket,
  GraduationCap,
  TrendingUp,
  Globe2,
} from "lucide-react";
import heroImg from "@/assets/hero-ar.jpg";
import { COMPONENTS, TEAM, SITE } from "@/lib/site";
import { FloatingParticles } from "@/components/floating-particles";
import { SectionHeader } from "@/components/page-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Narrative AR · STEAM | R26-IM-003 Research Showcase" },
      {
        name: "description",
        content:
          "Immersive AR storybooks transforming early STEAM learning outcomes in Sri Lankan primary education. Four research components, one commercialization-ready platform.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "4", label: "AR Storybook Systems" },
  { value: "12+", label: "Curriculum Topics" },
  { value: "G3–G5", label: "Target Grades" },
  { value: "SDG 4", label: "Quality Education" },
];

const timeline = [
  { phase: "Q1", title: "Research & Discovery", desc: "Curriculum mapping, classroom field studies, AR literature review." },
  { phase: "Q2", title: "Design & Prototyping", desc: "Storyboards, narrative scripting, interactive AR prototypes." },
  { phase: "Q3", title: "Build & Validate", desc: "Unity AR builds, classroom pilots, learning outcome measurement." },
  { phase: "Q4", title: "Scale & Commercialize", desc: "Teacher tooling, content authoring, district-level rollout." },
];

const tech = ["Unity", "AR Foundation", "Vuforia", "ARCore", "Blender", "Firebase", "TensorFlow Lite", "Figma"];

function Index() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-28">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="glow-orb h-[500px] w-[500px] -top-32 -left-32 bg-primary-glow/40" />
        <div className="glow-orb h-[400px] w-[400px] top-20 right-0 bg-gold/20" />
        <FloatingParticles />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3 w-3" /> {SITE.projectId} · Research Commercialization
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient-brand">Narrative AR</span>
              <br />
              for the next generation of <span className="text-gradient-gold">STEAM learners.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              An immersive research initiative evaluating how narrative-based augmented reality
              transforms early STEAM learning outcomes in Sri Lankan primary classrooms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/components"
                className="group inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition hover:brightness-110"
              >
                Explore Research
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/components"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-card/40 px-5 py-3 text-sm font-semibold backdrop-blur-md transition hover:border-gold hover:bg-card/70"
              >
                <Layers className="h-4 w-4" /> View Components
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-xl border border-border/60 px-5 py-3 text-sm font-semibold transition hover:border-gold/40"
              >
                <PlayCircle className="h-4 w-4" /> Watch Demo
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="glass rounded-2xl p-4"
                >
                  <div className="font-display text-2xl font-bold text-gradient-gold">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:col-span-5"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-primary-glow/30 to-transparent blur-2xl" />
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2 shadow-elevated">
              <img
                src={heroImg}
                alt="Sri Lankan primary students using AR storybooks"
                width={1536}
                height={1024}
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
              <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-gold/30" />
            </div>
            <div className="glass animate-float absolute -bottom-6 -left-6 rounded-2xl p-4 shadow-elevated">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand">
                  <GraduationCap className="h-5 w-5 text-gold" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Aligned with</div>
                  <div className="font-display text-sm font-semibold">UN SDG 4</div>
                </div>
              </div>
            </div>
            <div className="glass animate-float absolute -top-4 -right-4 rounded-2xl p-4 shadow-elevated" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold">
                  <TrendingUp className="h-5 w-5 text-gold-foreground" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Engagement</div>
                  <div className="font-display text-sm font-semibold">+72% retention</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDG / OVERVIEW */}
      <section className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionHeader
          eyebrow="Project Overview"
          title="Reimagining how children learn STEAM"
          desc="We pair classroom-tested narrative design with the spatial power of AR to make abstract STEAM concepts tangible, joyful, and measurably effective."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Curriculum-aligned", desc: "Mapped to Sri Lankan primary curriculum standards for grades 3–5." },
            { icon: Lightbulb, title: "Narrative-first", desc: "Stories, characters, and arcs that anchor learning in meaning, not memorization." },
            { icon: Globe2, title: "Locally grounded", desc: "Designed for low-bandwidth, resource-aware classrooms in Sri Lanka." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:ring-glow"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/20" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand shadow-glow">
                <c.icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionHeader
          eyebrow="Featured Research Components"
          title="Four AR storybooks. One platform."
          desc="Each component is a self-contained research proposal that contributes to a unified evaluation of AR for early STEAM."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {COMPONENTS.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to="/components/$slug"
                params={{ slug: c.slug }}
                className="group glass relative block overflow-hidden rounded-3xl transition hover:ring-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.accent} mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gold">Component {String.fromCharCode(65 + i)}</div>
                      <h3 className="mt-1 font-display text-2xl font-bold">{c.title}</h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gold transition group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-sm text-muted-foreground">{c.short}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.topics.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-[11px] text-gold">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionHeader
          eyebrow="Research Roadmap"
          title="From classroom insight to commercial scale"
        />
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass relative rounded-2xl p-5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-sm font-bold text-gold-foreground shadow-gold">
                {t.phase}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionHeader eyebrow="Technology Stack" title="Built on production-grade AR tooling" />
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t) => (
            <span key={t} className="glass rounded-full px-5 py-2.5 text-sm font-medium hover:ring-glow transition">{t}</span>
          ))}
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionHeader eyebrow="The Team" title="Researchers building the future of learning" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group rounded-2xl p-5 text-center transition hover:ring-glow"
            >
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand text-xl font-display font-bold text-gold shadow-glow">
                {p.initials}
              </div>
              <h3 className="mt-4 font-display font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.role}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
            Meet the full team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* COMMERCIALIZATION CTA */}
      <section className="relative mx-auto max-w-7xl px-4 py-24">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <div className="glow-orb h-72 w-72 -top-20 -left-10 bg-primary-glow/40" />
          <div className="glow-orb h-72 w-72 -bottom-20 -right-10 bg-gold/20" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Rocket className="h-3 w-3" /> Commercialization Vision
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                <span className="text-gradient-brand">From research lab to every classroom.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                A district-ready AR learning platform with teacher tooling, analytics, and a content
                authoring suite - designed to scale across South Asian primary education systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/commercialization" className="rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:brightness-110">
                  Investor Brief
                </Link>
                <Link to="/contact" className="rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold hover:border-gold">
                  Partner with us
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Users, k: "Target Users", v: "Schools · Edu publishers · NGOs" },
                { icon: Globe2, k: "Market", v: "South Asia primary EdTech" },
                { icon: TrendingUp, k: "Model", v: "B2B SaaS + content licensing" },
                { icon: Layers, k: "Roadmap", v: "Authoring suite · Multilingual" },
              ].map((b) => (
                <div key={b.k} className="glass rounded-2xl p-4">
                  <b.icon className="h-5 w-5 text-gold" />
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{b.k}</div>
                  <div className="mt-1 text-sm font-semibold">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
