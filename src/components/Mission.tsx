import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { fadeUp } from "@/lib/animations";

const MISSION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4";

const PARAGRAPH_1 =
  "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";

const PARAGRAPH_2 =
  "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

const HIGHLIGHTED = new Set(["curiosity", "meets", "clarity"]);

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlighted: boolean;
}

function Word({ word, progress, range, highlighted }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{
        opacity,
        color: highlighted
          ? "hsl(var(--foreground))"
          : "hsl(var(--hero-subtitle))",
      }}
      className="inline-block"
    >
      {word}&nbsp;
    </motion.span>
  );
}

interface RevealParagraphProps {
  text: string;
  className: string;
  progress: MotionValue<number>;
  progressRange: [number, number];
}

function RevealParagraph({
  text,
  className,
  progress,
  progressRange,
}: RevealParagraphProps) {
  const words = text.split(" ");
  const [start, end] = progressRange;
  const step = (end - start) / words.length;

  return (
    <p className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={progress}
          range={[start + i * step, start + (i + 1) * step]}
          highlighted={HIGHLIGHTED.has(word.replace(/[—,.]/g, ""))}
        />
      ))}
    </p>
  );
}

export function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section className="pt-0 pb-32 md:pb-44 px-8 md:px-28">
      <motion.div {...fadeUp(0)} className="flex justify-center mb-24">
        <video
          className="w-[800px] h-[800px] max-w-full object-cover"
          src={MISSION_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>

      <div ref={sectionRef} className="max-w-4xl mx-auto text-center">
        <RevealParagraph
          text={PARAGRAPH_1}
          className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px]"
          progress={scrollYProgress}
          progressRange={[0, 0.6]}
        />
        <RevealParagraph
          text={PARAGRAPH_2}
          className="text-xl md:text-2xl lg:text-3xl font-medium mt-10"
          progress={scrollYProgress}
          progressRange={[0.5, 1]}
        />
      </div>
    </section>
  );
}
