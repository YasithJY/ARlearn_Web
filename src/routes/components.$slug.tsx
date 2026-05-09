import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Target,
  Lightbulb,
  Layers,
  Workflow,
  FlaskConical,
  Rocket,
  TrendingUp,
  Download,
  PlayCircle,
  BookMarked,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { COMPONENTS, type ComponentItem } from "@/lib/site";
import { FloatingParticles } from "@/components/floating-particles";

export const Route = createFileRoute("/components/$slug")({
  loader: ({ params }) => {
    const c = COMPONENTS.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { component: c };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.component.title} - Narrative AR · STEAM` },
          { name: "description", content: loaderData.component.short },
          { property: "og:image", content: loaderData.component.image },
        ]
      : [],
  }),
  component: ComponentDetail,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center pt-28">
      <div className="glass rounded-3xl p-10 text-center">
        <h1 className="font-display text-3xl">Component not found</h1>
        <Link to="/components" className="mt-4 inline-flex text-gold hover:underline">Back to components</Link>
      </div>
    </div>
  ),
});

function ComponentDetail() {
  const { component: c } = Route.useLoaderData();
  return <Detail c={c} />;
}

function Detail({ c }: { c: ComponentItem }) {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-28">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="glow-orb h-96 w-96 -top-20 -left-10 bg-primary-glow/40" />
        <div className="glow-orb h-96 w-96 top-10 right-0 bg-gold/15" />
        <FloatingParticles count={12} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Link to="/components" className="mb-6 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-gold">
              <ArrowLeft className="h-3 w-3" /> All Components
            </Link>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3 w-3" /> Research Proposal
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient-brand">{c.title}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{c.short}</p>
            <p className="mt-2 text-sm text-gold">Lead researcher: {c.author}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {c.topics.map((t) => (
                <span key={t} className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-gold">{t}</span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-5"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-primary-glow/30 to-transparent blur-2xl" />
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2">
              <img src={c.image} alt={c.title} className="h-full w-full rounded-[1.6rem] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / GAP / OBJECTIVES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Problem Statement", body: `Primary learners struggle to grasp ${c.topics[0].toLowerCase()} and related concepts through static textbook instruction alone, limiting comprehension and engagement.` },
            { icon: FlaskConical, title: "Research Gap", body: `Existing AR EdTech rarely targets ${c.title.replace("AR ", "").replace(" Storybook", "").toLowerCase()} for South Asian primary curricula, and almost none use narrative as a core learning device.` },
            { icon: Lightbulb, title: "Objectives", body: `Design, build, and validate a narrative AR storybook that improves comprehension, retention, and engagement for ${c.topics.slice(0, 3).join(", ")} in primary classrooms.` },
          ].map((s) => (
            <article key={s.title} className="glass rounded-2xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand shadow-glow">
                <s.icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        {/* Key features */}
        <div className="mt-16">
          <h2 className="font-display text-3xl font-bold text-gradient-brand">Key Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Narrative-driven AR scenes",
              "Marker & markerless tracking",
              "Curriculum-aligned mini-lessons",
              "In-app comprehension prompts",
              "Teacher dashboard analytics",
              "Offline-first content delivery",
              "Multi-language support",
              "Adaptive difficulty",
            ].map((f) => (
              <div key={f} className="glass flex items-start gap-3 rounded-xl p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AR Workflow */}
        <div className="mt-16">
          <h2 className="font-display text-3xl font-bold text-gradient-brand">AR Workflow</h2>
          <div className="relative mt-6 grid gap-4 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
            {["Scan", "Story Trigger", "AR Scene", "Interact", "Reflect"].map((step, i) => (
              <div key={step} className="glass relative rounded-2xl p-5 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold font-bold text-gold-foreground shadow-gold">{i + 1}</div>
                <div className="mt-3 font-display font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology + Architecture */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <Workflow className="h-5 w-5 text-gold" />
              <h2 className="font-display text-2xl font-bold">Methodology</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Curriculum analysis with primary teachers",
                "Narrative scripting and storyboarding",
                "Iterative AR prototyping in Unity",
                "Classroom pilot with grades 3–5",
                "Mixed-methods data collection",
                "Comparative learning outcome analysis",
              ].map((m) => (
                <li key={m} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />{m}</li>
              ))}
            </ul>
          </div>
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-gold" />
              <h2 className="font-display text-2xl font-bold">Architecture</h2>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Client", "Unity AR app · ARCore / Vuforia"],
                ["Content", "Narrative scenes · 3D assets · Audio"],
                ["Backend", "Firebase auth, analytics, content sync"],
                ["Analytics", "Engagement, retention, learning gains"],
              ].map(([k, v]) => (
                <div key={k} className="glass flex items-center justify-between rounded-xl p-3 text-sm">
                  <span className="text-gold">{k}</span>
                  <span className="text-muted-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Validation */}
        <div className="mt-16 glass-strong rounded-3xl p-8">
          <h2 className="font-display text-2xl font-bold text-gradient-brand">Validation & Testing</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Pre/Post Testing", v: "Knowledge gain measurement" },
              { k: "Classroom Observation", v: "Engagement & behaviour" },
              { k: "Teacher Interviews", v: "Pedagogical fit & usability" },
            ].map((b) => (
              <div key={b.k} className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-wider text-gold">{b.k}</div>
                <div className="mt-2 font-semibold">{b.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercialization */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <Rocket className="h-5 w-5 text-gold" />
              <h2 className="font-display text-2xl font-bold">Commercialization</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Licensing to school networks and education publishers</li>
              <li>B2B SaaS platform for districts with content authoring</li>
              <li>NGO partnerships for rural deployment</li>
              <li>Multilingual content for South Asian markets</li>
            </ul>
          </div>
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-gold" />
              <h2 className="font-display text-2xl font-bold">Future Improvements</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>AI-personalised narrative branching</li>
              <li>Voice-driven AR interaction</li>
              <li>Cross-component shared learning profile</li>
              <li>Teacher-built AR scene authoring</li>
            </ul>
          </div>
        </div>

        {/* Demo + Resources */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="glow-orb h-60 w-60 -top-10 -right-10 bg-gold/20" />
            <PlayCircle className="h-8 w-8 text-gold" />
            <h2 className="mt-3 font-display text-2xl font-bold">Demo & Video</h2>
            <p className="mt-2 text-sm text-muted-foreground">Watch the AR storybook come alive in the classroom.</p>
            <div className="mt-5 aspect-video rounded-2xl border border-gold/20 bg-card/40 grid place-items-center">
              <span className="text-xs text-muted-foreground">Demo video coming soon</span>
            </div>
          </div>
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="glow-orb h-60 w-60 -bottom-10 -left-10 bg-primary-glow/30" />
            <Download className="h-8 w-8 text-gold" />
            <h2 className="mt-3 font-display text-2xl font-bold">Download Resources</h2>
            <div className="mt-5 grid gap-2">
              {["Proposal PDF", "Poster", "Presentation", "Demo APK"].map((r) => (
                <a 
                  key={r} 
                  href={r === "Proposal PDF" ? c.pdf : "#"} 
                  target={r === "Proposal PDF" ? "_blank" : undefined}
                  rel={r === "Proposal PDF" ? "noopener noreferrer" : undefined}
                  className="glass flex items-center justify-between rounded-xl p-3 text-sm hover:ring-glow"
                >
                  <span>{r}</span>
                  <Download className="h-4 w-4 text-gold" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* References */}
        <div className="mt-16 glass-strong rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <BookMarked className="h-5 w-5 text-gold" />
            <h2 className="font-display text-2xl font-bold">Research References</h2>
          </div>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Akçayır & Akçayır (2017). Advantages and challenges associated with AR for education.</li>
            <li>Radu (2014). Augmented reality in education: A meta-review of research.</li>
            <li>Cheng & Tsai (2013). Affordances of AR in science learning.</li>
            <li>UNESCO (2023). Reimagining our futures together: A new social contract for education.</li>
            <li>Sri Lanka National Institute of Education - Primary Curriculum Framework.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
