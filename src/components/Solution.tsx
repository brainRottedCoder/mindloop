import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const SOLUTION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4";

const FEATURES = [
  {
    title: "Curated Feed",
    description:
      "A signal-first feed tuned to depth, not engagement bait. Every piece earns its place.",
  },
  {
    title: "Writer Tools",
    description:
      "Distraction-free editor, audience analytics, and publishing workflows built for serious writing.",
  },
  {
    title: "Community",
    description:
      "Readers and writers in direct conversation — thoughtful threads instead of endless noise.",
  },
  {
    title: "Distribution",
    description:
      "Your work reaches inboxes, feeds, and AI answer engines — wherever curious people look.",
  },
];

export function Solution() {
  return (
    <section className="py-32 md:py-44 px-8 md:px-28 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground"
        >
          Solution
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-[-1px] mt-6"
        >
          The platform for{" "}
          <span className="font-serif italic font-normal">meaningful</span>{" "}
          content
        </motion.h2>

        <motion.div {...fadeUp(0.2)} className="mt-16">
          <video
            className="w-full rounded-2xl aspect-[3/1] object-cover"
            src={SOLUTION_VIDEO}
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {FEATURES.map((feature, i) => (
            <motion.div key={feature.title} {...fadeUp(0.25 + i * 0.08)}>
              <h3 className="font-semibold text-base">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mt-3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
