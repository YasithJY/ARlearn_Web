import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-shell";
import {
  Users, Globe2, TrendingUp, Layers, Rocket, Leaf, DollarSign, Building2, Map,
} from "lucide-react";

export const Route = createFileRoute("/commercialization")({
  head: () => ({
    meta: [
      { title: "Commercialization - Narrative AR · STEAM" },
      { name: "description", content: "From research lab to district-scale EdTech: market, model, and roadmap." },
    ],
  }),
  component: Commercialization,
});

const blocks = [
  { icon: Users, title: "Target Users", desc: "Primary schools, education publishers, NGOs, and government education departments across Sri Lanka and South Asia." },
  { icon: Globe2, title: "Market Opportunity", desc: "South Asia primary EdTech is a multi-billion dollar segment with rapid mobile adoption and post-pandemic digital reform mandates." },
  { icon: DollarSign, title: "Business Model", desc: "B2B SaaS subscriptions for schools and districts, content licensing to publishers, and tiered freemium for individual classrooms." },
  { icon: TrendingUp, title: "Revenue Model", desc: "Annual per-school licenses · Per-student micro-licenses · Premium content packs · Authoring suite subscriptions." },
  { icon: Layers, title: "Future Scalability", desc: "Modular architecture lets new subjects, languages and grades plug into the same AR runtime and analytics platform." },
  { icon: Building2, title: "Educational Deployment", desc: "Pilot with partner schools, then provincial education departments, NGO networks, and private school chains." },
  { icon: Rocket, title: "Industry Relevance", desc: "Aligns with global trends in immersive learning, learning-outcome accountability, and SDG 4 quality education investment." },
  { icon: Leaf, title: "Sustainability", desc: "Low-bandwidth offline-first design, durable for resource-constrained classrooms; teacher empowerment over device dependency." },
];

const roadmap = [
  { y: "Year 1", t: "Validate", d: "Classroom pilots across 4 components, peer-reviewed publication, teacher co-design network." },
  { y: "Year 2", t: "Productize", d: "Unified AR platform, teacher dashboard, content authoring suite, first paid pilots." },
  { y: "Year 3", t: "Scale", d: "Provincial rollouts, multilingual content (Sinhala, Tamil, English), publisher partnerships." },
  { y: "Year 4", t: "Expand", d: "Regional expansion across South Asia, AI-personalised learning, ecosystem APIs." },
];

function Commercialization() {
  return (
    <main>
      <PageHero
        eyebrow="Commercialization Vision"
        title="Built for research. Engineered to scale."
        desc="A startup-grade strategy for taking narrative AR storybooks from peer-reviewed research into every primary classroom."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="glass rounded-2xl p-6 transition hover:ring-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand shadow-glow">
                <b.icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <Map className="h-6 w-6 text-gold" />
            <h2 className="font-display text-3xl font-bold text-gradient-brand">Future Roadmap</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {roadmap.map((r, i) => (
              <motion.div
                key={r.y}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass relative overflow-hidden rounded-2xl p-5"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-gold">{r.y}</div>
                <div className="mt-2 font-display text-lg font-bold">{r.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 glass-strong relative overflow-hidden rounded-3xl p-10 text-center">
          <div className="glow-orb h-72 w-72 -top-20 -left-10 bg-primary-glow/40" />
          <div className="glow-orb h-72 w-72 -bottom-20 -right-10 bg-gold/20" />
          <h2 className="relative font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
            Ready to bring narrative AR to your classrooms?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
            We're partnering with schools, publishers, NGOs and investors aligned with SDG 4.
          </p>
          <div className="relative mt-6 flex justify-center gap-3">
            <Link to="/contact" className="rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:brightness-110">Talk to the team</Link>
            <Link to="/downloads" className="rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold hover:border-gold">Download brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
