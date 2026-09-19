import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { LogoMark } from "@/components/Logo";

const HLS_URL =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

export function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = HLS_URL;
    }

    return () => {
      hls?.destroy();
    };
  }, []);

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden">
      {/* HLS background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div {...fadeUp(0)}>
          <LogoMark outerClassName="w-10 h-10" innerClassName="w-5 h-5" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-serif italic font-normal text-5xl md:text-7xl mt-8 tracking-[-1px]"
        >
          Start Your Journey
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-lg max-w-xl mt-6"
        >
          Join thousands of readers and writers building a deeper, more
          meaningful corner of the internet.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 text-sm font-semibold"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-semibold text-foreground"
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
