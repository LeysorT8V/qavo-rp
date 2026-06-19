import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Über uns" },
  
  { href: "#departments", label: "Fraktionen" },
  
  { href: "#rules", label: "Regeln" },
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? "glass py-3 mx-4 md:mx-auto" : "py-2"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group">
          <span className="text-2xl">🌸</span>
          <span className="font-display font-bold text-lg tracking-tight text-gradient">
            Qavo RP
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#join"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5"
        >
          Jetzt Spielen
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass rounded-2xl p-6 animate-fade-up">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/90 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium"
              >
                Jetzt Spielen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
