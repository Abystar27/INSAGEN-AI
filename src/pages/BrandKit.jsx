import { useState } from "react";

export default function BrandKit() {
  // Customiser state
  const [color, setColor] = useState("#ff2df7");
  const [font, setFont] = useState("modern");
  const [tone, setTone] = useState("friendly");

  const brandColors = [
    { name: "Midnight Black", token: "bg-black", hex: "#000000" },
    { name: "Neon Pink", token: "bg-neonPink", hex: "#FF4BBA" },
    { name: "Electric Cyan", token: "bg-electricCyan", hex: "#4BFFF3" },
    { name: "Lime Pop", token: "bg-limePop", hex: "#C6FF4B" },
  ];

  const brandFonts = [
    { label: "Display", value: "Space Grotesk / similar" },
    { label: "Body", value: "Inter / system sans" },
  ];

  const brandVoice = [
    "Confident but not cocky.",
    "Playful, not childish.",
    "Clear, no jargon unless the user is clearly a pro.",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* HEADER */}
        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold">Brand Kit</h1>
          <p className="text-sm md:text-base text-white/70">
            Your brand identity + a live customiser to explore your own style.
          </p>
        </header>

        {/* CUSTOMISER */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Interactive Customiser
            </h2>

            <div className="space-y-3 text-xs md:text-sm">
              <div>
                <label className="block mb-1 text-white/70">Primary colour</label>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-16 h-10 rounded-md border border-white/20 bg-black/40"
                />
              </div>

              <div>
                <label className="block mb-1 text-white/70">Font style</label>
                <select
                  value={font}
                  onChange={(e) => setFont(e.target.value)}
                  className="w-full rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-electricCyan/70"
                >
                  <option value="modern">Modern</option>
                  <option value="playful">Playful</option>
                  <option value="elegant">Elegant</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-white/70">Tone of voice</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-electricCyan/70"
                >
                  <option value="friendly">Friendly</option>
                  <option value="bold">Bold</option>
                  <option value="minimalist">Minimalist</option>
                </select>
              </div>
            </div>
          </div>

          {/* CUSTOMISER PREVIEW */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm rounded-3xl border border-white/15 bg-black/70 p-5 space-y-3 animate-float"
              style={{ boxShadow: `0 0 25px ${color}55` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl"
                  style={{ backgroundColor: color }}
                />
                <div>
                  <p className="text-sm font-semibold">Luna Studio (demo brand)</p>
                  <p className="text-[11px] text-white/60">
                    {font} · {tone} tone
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-3 text-xs text-white/80 fade-in">
                “We help your feed feel like your favourite moodboard — consistent,
                intentional, and a little bit extra.”
              </div>

              <p className="text-[11px] text-white/60">
                This preview updates with your colour, font style and tone choices.
              </p>
            </div>
          </div>
        </section>

        {/* BRAND GUIDELINES */}
        <section className="space-y-10">
          {/* Colours */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">Core Colours</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {brandColors.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-white/10 overflow-hidden bg-black/60"
                >
                  <div className={`h-16 ${c.token}`} />
                  <div className="px-3 py-2 text-xs space-y-1">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-white/60">{c.hex}</p>
                    <p className="text-white/40 text-[11px]">
                      Tailwind token: <span className="font-mono">{c.token}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">Typography</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {brandFonts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 space-y-1"
                >
                  <p className="text-white/60 uppercase text-[11px] tracking-wide">
                    {f.label}
                  </p>
                  <p className="font-semibold">{f.value}</p>
                  <p className="text-white/50 text-xs">
                    Use consistently across marketing, product UI, and social assets.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Voice */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">Voice & Tone</h2>
            <ul className="space-y-2 text-sm text-white/80">
              {brandVoice.map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-electricCyan" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="space-y-3 text-sm text-white/75">
            <h2 className="text-lg md:text-xl font-semibold">Usage Notes</h2>
            <p>
              Keep backgrounds mostly dark, with neon accents doing the emotional work.
              Use gradients to highlight “magic” moments—generation, export, share.
            </p>
            <p>
              Let the visuals be wild; let the words feel like a calm friend who knows
              exactly what they’re doing.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
