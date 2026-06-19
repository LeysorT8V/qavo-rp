import heroImg from "@/assets/dresden-hero.jpg";
import SakuraPetals from "@/components/dresden/SakuraPetals";
import Navbar from "@/components/dresden/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Flame,
  HeartPulse,
  MessagesSquare,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// Placeholders
const ROBLOX_LINK = "https://www.roblox.com/"; // PLACEHOLDER: Roblox game link
const DISCORD_LINK = "https://discord.gg/qavo-rp"; // server invite
const APPLY_LINK = "https://forms.gle/"; // PLACEHOLDER: application form
const DISCORD_TEXT = "discord.gg/qavo-rp";


const departments = [
  { icon: "🚓", name: "Polizei", desc: "Realistische Streifenfahrten, Verkehrskontrollen, Einsätze und öffentliche Sicherheit.", accent: "from-blue-500/20 to-primary/10" },
  { icon: "🚒", name: "Feuerwehr", desc: "Brandbekämpfung, technische Hilfeleistung, Rettungseinsätze und volle Einsatzleitung.", accent: "from-orange-500/20 to-primary/10" },
  { icon: "🚑", name: "Rettungsdienst", desc: "Notfallversorgung, Erstversorgung vor Ort, Patiententransport und medizinische Betreuung.", accent: "from-red-500/20 to-primary/10" },
  { icon: "🚶", name: "Zivilisten", desc: "Zivil-Roleplay – Jobs, Szenarien und immersives Alltagsleben.", accent: "from-pink-500/20 to-primary/10" },
];

const rules = [
  { title: "Respektiere alle Spieler", desc: "Behandle jeden mit Respekt. Keine Belästigung, Beleidigungen oder Diskriminierung – weder auf Discord noch im Spiel." },
  { title: "Kein Trolling", desc: "Bleib im Charakter und trage zu sinnvollem Roleplay bei. RDM, VDM und Fail-RP werden nicht geduldet." },
  { title: "Auf das Team hören", desc: "Staff-Entscheidungen sind während Sessions endgültig. Streitfälle laufen über das Ticket-System auf Discord." },
  { title: "Kein Cheaten", desc: "Jegliche Nutzung von Cheats, Glitches oder Drittanbieter-Tools führt zum sofortigen permanenten Bann." },
];


const Index = () => {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <SakuraPetals />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Qavo RP cityscape with cherry blossoms at night"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto text-center animate-fade-up">

          <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-6">
            <span className="text-gradient">Qavo</span>{" "}
            <span className="text-foreground">RP</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-4 font-light">
            {"\n"}
          </p>
          <p className="text-sm md:text-base text-primary/80 mb-12 tracking-wide">
            Polizei · Feuerwehr · Rettungsdienst · Zivilisten
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={ROBLOX_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all duration-500 hover:-translate-y-1"
            >
              Jetzt Spielen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-foreground font-semibold hover:border-primary/60 hover:text-primary transition-all duration-500 hover:-translate-y-1"
            >
              <MessagesSquare size={18} /> Discord beitreten
            </a>
          </div>

          <div className="mt-16 text-xs text-muted-foreground/70 tracking-widest uppercase animate-float">
            ↓ Nach unten scrollen
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Über uns</p>
          <h2 className="section-title mb-8">
            Wo Realismus auf <span className="text-gradient">Community</span> trifft.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            Qavo RP ist ein deutscher Roblox-Roleplay-Server mit Fokus auf realistische
            Einsatzszenarien. Werde Teil einer wachsenden Community und erlebe Polizei,
            Feuerwehr und Rettungsdienst hautnah.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {["Keine Whitelist nötig", "Discord erforderlich", "Offen für alle"].map((t) => (
              <span
                key={t}
                className="glass px-5 py-2.5 rounded-full text-sm font-medium hover:border-primary/60 hover:text-primary transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}

      {/* DEPARTMENTS */}
      <section id="departments" className="section-pad relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Fraktionen</p>
            <h2 className="section-title">
              Wähle deinen <span className="text-gradient">Weg</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((d) => (
              <div key={d.name} className={`glass-card p-8 relative overflow-hidden bg-gradient-to-br ${d.accent}`}>
                <div className="absolute -top-10 -right-10 text-[10rem] opacity-10 select-none">
                  {d.icon}
                </div>
                <div className="relative">
                  <div className="text-5xl mb-5">{d.icon}</div>
                  <h3 className="font-display font-bold text-2xl mb-3">{d.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="section-pad relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">So trittst du bei</p>
            <h2 className="section-title">In drei Schritten startklar.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { n: "01", title: "Discord-Server beitreten", desc: "Discord ist Pflicht – dort findet alles Wichtige statt." },
              { n: "02", title: "Regeln lesen & RP starten", desc: "Lerne die Regeln, wähle eine Fraktion und beginne deine Story." },
              { n: "03", title: "Roblox-Spiel beitreten", desc: "Öffne die Qavo RP Experience auf Roblox und lade ein." },
            ].map((s) => (
              <div key={s.n} className="glass-card p-8">
                <div className="font-display text-5xl text-gradient mb-4">{s.n}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 md:p-12 text-center border-primary/40 animate-pulse-glow">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Wichtig</p>
            <p className="font-display text-2xl md:text-3xl font-bold mb-6">
              Discord ist Pflicht zum Spielen.
            </p>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all"
            >
              <MessagesSquare size={18} /> {DISCORD_TEXT} beitreten
            </a>
          </div>
        </div>
      </section>

      {/* DISCORD */}
      <section id="discord" className="section-pad relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Community</p>
            <h2 className="section-title">
              Das Herz von <span className="text-gradient">Qavo RP</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="glass-card p-10 flex flex-col justify-center text-center">
              <MessagesSquare className="mx-auto text-primary mb-6" size={48} />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Server-Einladung</p>
              <p className="font-display text-3xl md:text-4xl font-bold mb-2 text-gradient break-all">
                {DISCORD_TEXT}
              </p>
              <p className="text-muted-foreground mb-8 text-sm">Klicke unten, um die Einladung zu öffnen</p>
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all self-center"
              >
                Discord öffnen <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Shield, title: "Aktive Fraktionen", desc: "Polizei, Feuerwehr und Rettungsdienst während der Sessions im Dienst." },
                { icon: HeartPulse, title: "Staff-Support", desc: "Engagiertes Team für Tickets, Bewerbungen und Streitfälle." },
              ].map((c) => (
                <div key={c.title} className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <c.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="section-pad relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 text-[16rem] opacity-5 select-none">🌸</div>
            <div className="relative">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Bewerbungen</p>
              <h2 className="section-title mb-6">
                <span className="text-gradient">Offen</span> für neue Talente.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Bewerbungen sind aktuell offen für Spieler, die ins Staff-Team oder in besondere Rollen wollen.
              </p>
              <a
                href={APPLY_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all hover:-translate-y-1"
              >
                Jetzt bewerben <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="rules" className="section-pad relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Regeln</p>
            <h2 className="section-title">
              Bleib <span className="text-gradient">fair</span>.
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {rules.map((r, i) => (
              <AccordionItem
                key={r.title}
                value={`item-${i}`}
                className="glass-card border-0 px-6"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="font-display font-semibold text-base md:text-lg">
                      {r.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-9 pb-5">
                  {r.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="relative border-t border-border/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌸</span>
            <span className="font-display font-bold text-gradient text-lg">Qavo RP</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              {DISCORD_TEXT}
            </a>
            <span className="hidden md:inline opacity-30">·</span>
            <a href={ROBLOX_LINK} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              Roblox-Spiel
            </a>
          </div>

          <p className="text-xs text-muted-foreground">© 2026 Qavo RP. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
