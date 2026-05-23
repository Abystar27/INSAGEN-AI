import { useRef, useState } from "react";

const FONT_OPTIONS = [
  {
    value: "modern",
    label: "Modern",
    family: "'Inter', system-ui, sans-serif",
    desc: "Clean, professional and versatile",
  },
  {
    value: "playful",
    label: "Playful",
    family: "'Comic Sans MS', 'Chalkboard SE', cursive",
    desc: "Fun, approachable and expressive",
  },
  {
    value: "elegant",
    label: "Elegant",
    family: "'Georgia', 'Times New Roman', serif",
    desc: "Sophisticated, timeless and refined",
  },
  {
    value: "bold",
    label: "Bold Display",
    family: "'Arial Black', 'Impact', sans-serif",
    desc: "Strong, impactful and confident",
  },
  {
    value: "mono",
    label: "Monospace",
    family: "'Courier New', monospace",
    desc: "Technical, unique and techy",
  },
];

const TONE_OPTIONS = [
  {
    value: "friendly",
    label: "Friendly & Warm",
    sample: "Hey! 👋 We're so excited to share this with you. You're going to love what we've been working on.",
  },
  {
    value: "bold",
    label: "Bold & Confident",
    sample: "This changes everything. 🔥 We don't do average. We do extraordinary. Are you ready?",
  },
  {
    value: "minimalist",
    label: "Minimalist & Clean",
    sample: "Less noise. More intention. This is what focused looks like.",
  },
  {
    value: "inspiring",
    label: "Inspiring",
    sample: "Every great journey starts with a single step. ✨ Today is your day to begin.",
  },
  {
    value: "professional",
    label: "Professional",
    sample: "We deliver results-driven content strategies tailored to your brand's unique goals and audience.",
  },
];

const PRESET_COLORS = [
  "#FF2D8A", "#FF6B00", "#FFD600", "#4CDE00",
  "#00C2FF", "#9B00FF", "#FF4560", "#00E5B0",
  "#FF0090", "#00FF41", "#FF6EC7", "#1A1A2E",
];

export default function BrandKit() {
  const canvasRef = useRef(null);

  const [brandName, setBrandName]   = useState("Luna Studio");
  const [tagline,   setTagline]     = useState("Content that converts.");
  const [color,     setColor]       = useState("#FF2D8A");
  const [font,      setFont]        = useState("modern");
  const [tone,      setTone]        = useState("friendly");
  const [toast,     setToast]       = useState("");

  const activeFont = FONT_OPTIONS.find(f => f.value === font) || FONT_OPTIONS[0];
  const activeTone = TONE_OPTIONS.find(t => t.value === tone) || TONE_OPTIONS[0];
  const slug = brandName.toLowerCase().replace(/\s+/g, "");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  /* ── Download brand kit as PNG ── */
  const downloadBrandKit = () => {
    const canvas  = document.createElement("canvas");
    canvas.width  = 1080;
    canvas.height = 1080;
    const ctx     = canvas.getContext("2d");

    /* Background */
    ctx.fillStyle = "#0A0A0A";
    ctx.fillRect(0, 0, 1080, 1080);

    /* Top colour bar */
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1080, 12);

    /* Brand name */
    ctx.fillStyle = color;
    ctx.font      = `bold 86px Arial Black, sans-serif`;
    ctx.textAlign = "center";
    ctx.shadowColor = color;
    ctx.shadowBlur  = 30;
    ctx.fillText(brandName || "Your Brand", 540, 200);

    /* Tagline */
    ctx.shadowBlur  = 0;
    ctx.fillStyle   = "rgba(255,255,255,0.7)";
    ctx.font        = "36px Arial, sans-serif";
    ctx.fillText(tagline || "", 540, 270);

    /* Divider */
    ctx.strokeStyle = color;
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(140, 320); ctx.lineTo(940, 320);
    ctx.stroke();

    /* Colour swatch */
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font      = "22px Arial, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("PRIMARY COLOUR", 140, 390);

    ctx.fillStyle   = color;
    ctx.shadowColor = color;
    ctx.shadowBlur  = 20;
    ctx.beginPath();
    ctx.roundRect(140, 410, 180, 180, 20);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = "white";
    ctx.font      = "bold 28px monospace";
    ctx.textAlign = "center";
    ctx.fillText(color.toUpperCase(), 230, 640);

    /* Font section */
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font      = "22px Arial, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("FONT STYLE", 420, 390);
    ctx.fillStyle = "white";
    ctx.font      = "bold 34px Arial, sans-serif";
    ctx.fillText(activeFont.label, 420, 440);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font      = "24px Arial, sans-serif";
    ctx.fillText(activeFont.desc, 420, 480);

    /* Tone section */
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font      = "22px Arial, sans-serif";
    ctx.fillText("TONE OF VOICE", 420, 540);
    ctx.fillStyle = color;
    ctx.font      = "bold 30px Arial, sans-serif";
    ctx.fillText(activeTone.label, 420, 580);

    /* Sample caption box */
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.beginPath();
    ctx.roundRect(140, 680, 800, 220, 20);
    ctx.fill();
    ctx.strokeStyle = `${color}55`;
    ctx.lineWidth   = 1;
    ctx.stroke();

    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font      = "20px Arial, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("SAMPLE CAPTION", 170, 720);

    ctx.fillStyle = "white";
    ctx.font      = "26px Arial, sans-serif";
    const words   = activeTone.sample.split(" ");
    let line = ""; let y = 760;
    words.forEach(w => {
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width > 740 && line) {
        ctx.fillText(line, 170, y); line = w; y += 36;
      } else line = test;
    });
    ctx.fillText(line, 170, y);

    /* Footer */
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font      = "20px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Created with InstaGen AI · Brand Kit Generator", 540, 1048);

    /* Bottom colour bar */
    ctx.fillStyle = color;
    ctx.fillRect(0, 1068, 1080, 12);

    const link    = document.createElement("a");
    link.download = `${slug}-brand-kit.png`;
    link.href     = canvas.toDataURL("image/png");
    link.click();
    showToast("Brand kit downloaded!");
  };

  return (
    <main className="min-h-screen" style={{ background: "#000" }}>

      {/* Toast */}
      {toast && (
        <div className="fixed top-4 left-1/2 z-50 px-5 py-2.5 rounded-full text-sm font-medium text-black"
          style={{ background: "#00FFE5", transform: "translateX(-50%)" }}>
          {toast}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

        {/* Header */}
        <header className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-semibold">Brand Kit</h1>
          <p className="text-sm text-white/60">
            Build your brand identity — pick your colours, fonts and tone, then download your brand card.
          </p>
        </header>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ── LEFT: Controls ── */}
          <div className="space-y-6 text-sm">

            {/* Brand name + tagline */}
            <div className="space-y-3">
              <div>
                <label className="block mb-1 text-white/60">Brand name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={e => setBrandName(e.target.value)}
                  placeholder="Your brand name"
                  className="w-full rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 text-white"
                />
              </div>
              <div>
                <label className="block mb-1 text-white/60">Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={e => setTagline(e.target.value)}
                  placeholder="Your brand tagline"
                  className="w-full rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 text-white"
                />
              </div>
            </div>

            {/* Colour picker */}
            <div className="space-y-2">
              <label className="block text-white/60">Primary colour</label>

              {/* Preset swatches */}
              <div className="flex flex-wrap gap-2">
                {PRESET_COLORS.map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className="w-8 h-8 rounded-full border-2 transition-all hover:scale-110"
                    style={{
                      background: c,
                      borderColor: color === c ? "white" : "transparent",
                      transform: color === c ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                ))}
              </div>

              {/* Custom colour picker */}
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={color}
                  onChange={e => setColor(e.target.value)}
                  className="w-12 h-10 rounded-lg border border-white/20 bg-transparent cursor-pointer"
                />
                <span className="text-xs text-white/50 font-mono">{color.toUpperCase()}</span>
                <span className="text-xs text-white/30">← pick any colour</span>
              </div>
            </div>

            {/* Font style */}
            <div className="space-y-2">
              <label className="block text-white/60">Font style</label>
              <div className="grid grid-cols-1 gap-2">
                {FONT_OPTIONS.map(f => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setFont(f.value)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl border transition-all text-left"
                    style={{
                      background: font === f.value ? `${color}22` : "rgba(0,0,0,0.4)",
                      borderColor: font === f.value ? color : "rgba(255,255,255,0.15)",
                    }}
                  >
                    <div>
                      <span
                        className="block font-bold text-base"
                        style={{ fontFamily: f.family, color: font === f.value ? color : "white" }}
                      >
                        {f.label}
                      </span>
                      <span className="text-xs text-white/40">{f.desc}</span>
                    </div>
                    {font === f.value && (
                      <span style={{ color }}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone of voice */}
            <div className="space-y-2">
              <label className="block text-white/60">Tone of voice</label>
              <select
                value={tone}
                onChange={e => setTone(e.target.value)}
                className="w-full rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 text-white"
              >
                {TONE_OPTIONS.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* Download button */}
            <button
              type="button"
              onClick={downloadBrandKit}
              className="w-full py-3 rounded-2xl font-semibold text-black hover:scale-105 active:scale-95 transition"
              style={{ background: color }}
            >
              Download Brand Kit PNG
            </button>

          </div>

          {/* ── RIGHT: Live preview ── */}
          <div className="space-y-4">
            <p className="text-xs text-white/40 uppercase tracking-wider">Live preview</p>

            {/* Brand card */}
            <div
              className="rounded-3xl p-6 space-y-4 transition-all duration-300"
              style={{
                background: "#0A0A0A",
                border: `1px solid ${color}44`,
                boxShadow: `0 0 40px ${color}22`,
              }}
            >
              {/* Top bar */}
              <div className="h-1 rounded-full" style={{ background: color }} />

              {/* Brand name */}
              <div>
                <h2
                  className="font-black text-3xl leading-tight transition-all duration-300"
                  style={{ fontFamily: activeFont.family, color }}
                >
                  {brandName || "Your Brand"}
                </h2>
                <p
                  className="text-sm mt-1 transition-all duration-300"
                  style={{ fontFamily: activeFont.family, color: "rgba(255,255,255,0.5)" }}
                >
                  {tagline || "Your tagline here"}
                </p>
              </div>

              {/* Colour + font row */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="rounded-xl p-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Colour</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg" style={{ background: color }} />
                    <span className="text-xs font-mono" style={{ color }}>{color.toUpperCase()}</span>
                  </div>
                </div>
                <div
                  className="rounded-xl p-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Font</p>
                  <span
                    className="text-sm font-bold"
                    style={{ fontFamily: activeFont.family, color: "white" }}
                  >
                    {activeFont.label}
                  </span>
                </div>
              </div>

              {/* Tone label */}
              <div
                className="rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Tone of voice</p>
                <p className="text-sm font-semibold" style={{ color }}>{activeTone.label}</p>
              </div>

              {/* Sample caption */}
              <div
                className="rounded-xl p-4"
                style={{ borderLeft: `3px solid ${color}`, background: "rgba(255,255,255,0.03)" }}
              >
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Sample caption</p>
                <p
                  className="text-sm leading-relaxed transition-all duration-300"
                  style={{ fontFamily: activeFont.family, color: "rgba(255,255,255,0.8)" }}
                >
                  {activeTone.sample}
                </p>
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-2">
                {[`#${slug}`, "#brand", "#content", "#instagen"].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300"
                    style={{ color, borderColor: `${color}55`, background: `${color}15` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="h-0.5 rounded-full opacity-30" style={{ background: color }} />
            </div>

            {/* Font preview */}
            <div
              className="rounded-2xl p-4 space-y-2"
              style={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="text-[10px] text-white/40 uppercase tracking-wider">Font preview</p>
              <p
                className="text-2xl font-bold transition-all duration-300"
                style={{ fontFamily: activeFont.family, color }}
              >
                Aa Bb Cc 123
              </p>
              <p
                className="text-sm transition-all duration-300"
                style={{ fontFamily: activeFont.family, color: "rgba(255,255,255,0.6)" }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}