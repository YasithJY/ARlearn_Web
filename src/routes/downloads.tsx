import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { PageHero } from "@/components/page-shell";

import pdfLife from "@/assets/R26-IM-003_IT22136374_JAYASUNDARA_R.K.M.J.Y.pdf";
import pdfMeasure from "@/assets/R26-IM-003_IT22100498_BANDARA M.R.J.K.pdf";
import pdfPhysics from "@/assets/R26-IM-003_IT22128072_Ilayperuma_M_I.pdf";
import pdfNumbers from "@/assets/R26-IM-003_IT22177100_Mendis_B.M.U.I.pdf";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads - Narrative AR · STEAM" },
      { name: "description", content: "Individual research proposals." },
    ],
  }),
  component: Downloads,
});

const proposals = [
  { name: "R26-IM-003_IT22128072_Ilayperuma_M_I.pdf", url: pdfPhysics },
  { name: "R26-IM-003_IT22177100_Mendis_B.M.U.I.pdf", url: pdfNumbers },
  { name: "R26-IM-003_IT22100498_BANDARA M.R.J.K.pdf", url: pdfMeasure },
  { name: "R26-IM-003_IT22136374_JAYASUNDARA_R.K.M.J.Y.pdf", url: pdfLife },
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 lg:col-span-2 md:col-span-2"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand shadow-glow">
                <FileText className="h-5 w-5 text-gold" />
              </span>
              <h3 className="font-display text-lg font-semibold">Individual proposals</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Full research proposals for each AR component.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {proposals.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center justify-between rounded-xl px-4 py-3 text-sm transition hover:ring-glow"
                  title={p.name}
                >
                  <span className="truncate mr-3 font-medium">{p.name}</span>
                  <Download className="h-4 w-4 flex-none text-gold" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
