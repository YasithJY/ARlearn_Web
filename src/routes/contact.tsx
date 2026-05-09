import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Narrative AR · STEAM" },
      { name: "description", content: "Get in touch with the research team. Schools, publishers, NGOs and investors welcome." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "Is the platform available for pilot deployment?", a: "Yes - we run pilots with primary schools and education partners. Reach out via the form to start a conversation." },
  { q: "What devices does the AR experience support?", a: "Android phones and tablets with ARCore support. iOS support is on the roadmap." },
  { q: "Are the materials curriculum-aligned?", a: "Yes. Every component maps to the Sri Lankan primary curriculum (grades 3–5) and is co-designed with practising teachers." },
  { q: "Can publishers license the content?", a: "Absolutely. We offer flexible licensing for publishers and education content networks." },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's build the future of learning together."
        desc="Schools, publishers, NGOs, recruiters, collaborators and investors - we'd love to hear from you."
      />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="glass-strong rounded-3xl p-8 lg:col-span-3"
          >
            <h2 className="font-display text-2xl font-bold text-gradient-brand">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We typically reply within 2–3 business days.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Organization" name="org" />
              <Field label="Role" name="role" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-gold">Message</label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-gold/20 bg-card/40 p-3 text-sm outline-none ring-gold/40 transition focus:border-gold focus:ring-2"
              />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:brightness-110">
              <Send className="h-4 w-4" /> Send message
            </button>
            {submitted && <p className="mt-4 text-sm text-gold">Thanks! Your message has been queued.</p>}
          </motion.form>

          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Github, label: "GitHub", value: "github.com/ar-steam", href: SITE.github },
              { icon: Linkedin, label: "LinkedIn", value: "AR · STEAM Research", href: "#" },
              { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:ring-glow">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand shadow-glow">
                  <c.icon className="h-5 w-5 text-gold" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="glass overflow-hidden rounded-2xl">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.82%2C6.88%2C79.90%2C6.95&layer=mapnik"
                className="h-56 w-full grayscale"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl font-bold text-gradient-brand">Frequently asked</h2>
          <div className="mt-6 grid gap-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-display font-semibold">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 text-gold transition ${openIdx === i ? "rotate-180" : ""}`} />
                </button>
                {openIdx === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-gold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-gold/20 bg-card/40 p-3 text-sm outline-none ring-gold/40 transition focus:border-gold focus:ring-2"
      />
    </div>
  );
}
