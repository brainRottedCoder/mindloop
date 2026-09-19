import { LogoMark } from "@/components/Logo";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/SocialIcons";

const NAV_LINKS = ["Home", "How It Works", "Philosophy", "Use Cases"];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: TwitterIcon, label: "Twitter" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4">
      <nav className="flex items-center justify-between">
        {/* Left: logo + wordmark */}
        <a href="#" className="flex items-center gap-3">
          <LogoMark />
          <span className="font-bold text-lg tracking-tight">Mindloop</span>
        </a>

        {/* Center-left: nav links separated by dots */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="flex items-center gap-3">
              {i > 0 && (
                <span className="text-muted-foreground/60 select-none">•</span>
              )}
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            </span>
          ))}
        </div>

        {/* Right: social icons in liquid-glass circles */}
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
