import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import iconChatgpt from "@/assets/icon-chatgpt.png";
import iconPerplexity from "@/assets/icon-perplexity.png";
import iconGoogle from "@/assets/icon-google.png";

const PLATFORMS = [
  {
    icon: iconChatgpt,
    name: "ChatGPT",
    description:
      "Millions now ask ChatGPT before they search. If your ideas aren't in the conversation, they don't exist.",
  },
  {
    icon: iconPerplexity,
    name: "Perplexity",
    description:
      "Answer engines cite sources directly. Deep, original writing is what gets referenced and remembered.",
  },
  {
    icon: iconGoogle,
    name: "Google AI",
    description:
      "AI Overviews summarize the web in seconds. Only content with real substance survives the summary.",
  },
];

export function SearchChanged() {
  return (
    <section className="pt-52 md:pt-64 pb-6 md:pb-9 px-8 md:px-28">
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-center"
      >
        Search has{" "}
        <span className="font-serif italic font-normal">changed.</span>
        <br />
        Have you?
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mt-8 mb-24 text-center"
      >
        People no longer scroll through ten blue links. They ask, and an AI
        answers. The writers and publications that feed those answers are the
        ones shaping what the world learns next.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-6xl mx-auto">
        {PLATFORMS.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.15 + i * 0.1)}
            className="flex flex-col items-center text-center"
          >
            <img
              src={platform.icon}
              alt={`${platform.name} icon`}
              className="w-[200px] h-[200px] object-contain"
            />
            <h3 className="font-semibold text-base mt-6">{platform.name}</h3>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        {...fadeUp(0.2)}
        className="text-muted-foreground text-sm text-center"
      >
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  );
}
