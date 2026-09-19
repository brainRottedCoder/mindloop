import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4";

const AVATARS = [avatar1, avatar2, avatar3];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32">
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Subscriber ${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">
            7,000+ people already subscribed
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px]"
        >
          Get{" "}
          <span className="font-serif italic font-normal">Inspired</span> with
          Us
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 text-lg max-w-xl"
          style={{ color: "hsl(var(--hero-subtitle))" }}
        >
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </motion.p>

        <motion.form
          {...fadeUp(0.3)}
          onSubmit={(e) => e.preventDefault()}
          className="liquid-glass rounded-full p-2 mt-10 w-full max-w-lg flex items-center gap-2"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 min-w-0 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-full px-8 py-3 text-sm font-semibold tracking-wide whitespace-nowrap"
          >
            SUBSCRIBE
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
