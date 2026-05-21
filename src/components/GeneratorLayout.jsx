// components/GeneratorLayout.jsx
import { useRef, useState, useEffect } from "react";

const sampleCaptions = [
  "Soft launch of the new era ✨",
  "Your feed, but finally on brand.",
  "Posting this so future you remembers the glow‑up.",
  "Built different. Posted different. 🔥",
  "New drop. Same energy. Different level.",
];

const sampleHashtags = [
  "#instagen #contentcreator #brandvibes",
  "#smallbusinesslove #designmagic #aesthetic",
  "#aestheticfeed #postwithpurpose #creator",
  "#growyourbrand #socialmedia #contentisking",
];

export default function GeneratorLayout({ title }) {
  const previewRef = useRef(null);

  const [tone,     setTone]     = useState("fun");
  const [niche,    setNiche]    = useState("business");
  const [prompt,   setPrompt]   = useState("");
  const [caption,  setCaption]  = useState("");
  const [hashtags, setHashtags] = useState("");
  const [loading,  setLoading]  = useState(false);
  const [type,     setType]     = useState("post");
  const [error,    setError]    = useState("");
  const [toast,    setToast]    = useState("");

  /* ── update preview whenever caption / hashtags change ── */
  useEffect(() => {
    if (!previewRef.current) return;
    previewRef.current.innerHTML = `
      <div style="padding:10px 12px">
        <p style="font-size:12px;line-height:1.5;color:#fff;margin-bottom:6px">${caption || "Your caption will appear here…"}</p>
        <p style="font-size:11px;color:#00FFE5">${hashtags || "#hashtags appear here"}</p>
      </div>
    `;
  }, [caption, hashtags]);

  /* ── show toast message ── */
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  /* ── fallback mock content ── */
  const fallbackGenerate = (mode) => {
    const c = sampleCaptions[Math.floor(Math.random() * sampleCaptions.length)];
    const h = sampleHashtags[Math.floor(Math.random() * sampleHashtags.length)];
    if (mode === "caption" || mode === "both") setCaption(c);
    if (mode === "hashtags" || mode === "both") setHashtags(h);
  };

  /* ── main AI generate function ── */
  const generateWithAI = async (mode) => {
    setLoading(true);
    setError("");

    const apiKey = import.meta.env.VITE_GEMINI_KEY;

    if (!apiKey) {
      setError("No API key found — using sample content. Add VITE_GEMINI_KEY to your .env file.");
      fallbackGenerate(mode);
      setLoading(false);
      return;
    }

    const systemPrompt = `You are an Instagram content expert.
Tone: ${tone}
Niche: ${niche}
Topic: ${prompt || "general lifestyle content"}
Mode: ${mode}

Return ONLY valid JSON, no markdown, no extra text:
{"caption": "Engaging 1-3 sentence caption with 1-2 emojis", "hashtags": "#tag1 #tag2 #tag3 #tag4 #tag5 #tag6 #tag7 #tag8 #tag9 #tag10"}`;

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }],
            generationConfig: { temperature: 0.9, maxOutputTokens: 500 },
          }),
        }
      );

      if (!res.ok) {
        const errBody = await res.text();
        throw new Error(`API error ${res.status}: ${errBody}`);
      }

      const data = await res.json();
      const raw  = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const clean = raw.replace(/```json|```/g, "").trim();

      let parsed;
      try {
        parsed = JSON.parse(clean);
      } catch {
        /* if JSON parse fails, extract text directly */
        parsed = { caption: raw, hashtags: "" };
      }

      if (mode === "caption"  || mode === "both") setCaption(parsed.caption   || "");
      if (mode === "hashtags" || mode === "both") setHashtags(parsed.hashtags || "");

    } catch (e) {
      console.error("AI error:", e);
      setError("AI had a moment — using sample content instead.");
      fallbackGenerate(mode);
    } finally {
      setLoading(false);
    }
  };

  /* ── download as PNG ── */
  const downloadImage = () => {
    const canvas  = document.createElement("canvas");
    canvas.width  = 1080;
    canvas.height = 1080;
    const ctx     = canvas.getContext("2d");

    /* background */
    const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
    grad.addColorStop(0, "#ff6b00");
    grad.addColorStop(0.5, "#dd2a7b");
    grad.addColorStop(1, "#8134af");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1080);

    /* caption text */
    ctx.fillStyle  = "white";
    ctx.font       = "bold 52px Arial, sans-serif";
    ctx.textAlign  = "center";
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur  = 12;
    const words = (caption || "Your caption").split(" ");
    let line = "";
    let y    = 440;
    words.forEach((word) => {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > 900 && line) {
        ctx.fillText(line, 540, y);
        line = word;
        y   += 70;
      } else {
        line = test;
      }
    });
    ctx.fillText(line, 540, y);

    /* hashtags */
    ctx.shadowBlur = 0;
    ctx.fillStyle  = "rgba(255,255,255,0.75)";
    ctx.font       = "28px Arial, sans-serif";
    ctx.fillText(hashtags || "", 540, y + 80);

    /* username */
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font      = "24px Arial, sans-serif";
    ctx.fillText("@instagen_demo", 540, 1020);

    const link    = document.createElement("a");
    link.download = "instagen-post.png";
    link.href     = canvas.toDataURL("image/png");
    link.click();
    showToast("Downloaded! Check your downloads folder.");
  };

  /* ── send to instagram (simulated) ── */
  const sendToInstagram = () => {
    const text = encodeURIComponent(`${caption}\n\n${hashtags}`);
    navigator.clipboard.writeText(`${caption}\n\n${hashtags}`).catch(() => {});
    showToast("Caption copied! Opening Instagram…");
    setTimeout(() => {
      window.open("https://www.instagram.com/create/style/", "_blank");
    }, 800);
  };

  /* ── copy caption ── */
  const copyCaption = () => {
    navigator.clipboard.writeText(caption).then(() => {
      showToast("Caption copied to clipboard!");
    });
  };

  /* ── copy hashtags ── */
  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags).then(() => {
      showToast("Hashtags copied to clipboard!");
    });
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

      {/* ── Toast ── */}
      {toast && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full text-sm font-medium text-black"
          style={{ background: "#00FFE5" }}
        >
          {toast}
        </div>
      )}

      {/* ── LEFT — CONTROLS ── */}
      <div className="space-y-4">
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>

        {/* Tone + Niche */}
        <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
          <div>
            <label className="block mb-1 text-white/70">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2"
            >
              <option value="fun">Fun</option>
              <option value="professional">Professional</option>
              <option value="bold">Bold</option>
              <option value="inspiring">Inspiring</option>
              <option value="chill">Chill</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-white/70">Niche</label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2"
            >
              <option value="business">Business</option>
              <option value="beauty">Beauty</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
              <option value="fitness">Fitness</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>
        </div>

        {/* Topic */}
        <div className="space-y-2 text-xs md:text-sm">
          <label className="block text-white/70">What is your post about?</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full min-h-[100px] rounded-2xl bg-black/50 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2"
            placeholder="Launch, sale, story, behind-the-scenes..."
          />
        </div>

        {/* Format selector */}
        <div className="flex gap-2 text-xs md:text-sm">
          {["post", "story", "carousel"].map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setType(t)}
              className={`px-3 py-1 rounded-full border border-white/20 transition capitalize hover:scale-105 ${
                type === t ? "bg-white/20" : "bg-black/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Generate buttons */}
        <div className="flex flex-wrap gap-3 text-xs md:text-sm">
          <button
            type="button"
            onClick={() => generateWithAI("caption")}
            disabled={loading}
            className="px-4 py-2 rounded-full font-medium hover:scale-105 active:scale-95 transition disabled:cursor-not-allowed disabled:opacity-60"
            style={{ background: "#ff2df7", color: "#000" }}
          >
            {loading ? "Generating…" : "Generate Caption"}
          </button>

          <button
            type="button"
            onClick={() => generateWithAI("hashtags")}
            disabled={loading}
            className="px-4 py-2 rounded-full font-medium hover:scale-105 active:scale-95 transition disabled:cursor-not-allowed disabled:opacity-60"
            style={{ background: "#00FFE5", color: "#000" }}
          >
            Generate Hashtags
          </button>

          <button
            type="button"
            onClick={() => generateWithAI("both")}
            disabled={loading}
            className="px-4 py-2 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            Generate Both
          </button>
        </div>

        {loading && (
          <p className="text-xs animate-pulse" style={{ color: "#00FFE5" }}>
            Cooking your content…
          </p>
        )}

        {error && (
          <p className="text-xs" style={{ color: "#ff2df7" }}>
            {error}
          </p>
        )}

        {/* Caption output */}
        {caption && (
          <div className="rounded-2xl bg-black/50 border border-white/20 p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/50 uppercase tracking-wider">Caption</span>
              <button
                onClick={copyCaption}
                className="text-[10px] px-2 py-0.5 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                Copy
              </button>
            </div>
            <p className="text-xs leading-relaxed">{caption}</p>
          </div>
        )}

        {/* Hashtags output */}
        {hashtags && (
          <div className="rounded-2xl bg-black/50 border border-white/20 p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/50 uppercase tracking-wider">Hashtags</span>
              <button
                onClick={copyHashtags}
                className="text-[10px] px-2 py-0.5 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                Copy
              </button>
            </div>
            <p className="text-xs" style={{ color: "#00FFE5" }}>{hashtags}</p>
          </div>
        )}
      </div>

      {/* ── RIGHT — PREVIEW ── */}
      <div className="space-y-3">
        <div className="rounded-3xl bg-black/70 border border-white/15 shadow-lg overflow-hidden">
          {/* IG header */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
            <div
              className="w-7 h-7 rounded-full animate-pulse"
              style={{ background: "linear-gradient(135deg, #ff2df7, #00FFE5)" }}
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">@instagen_demo</span>
              <span className="text-[10px] text-white/50">{tone} · {niche}</span>
            </div>
          </div>

          {/* Image area */}
          <div
            className={`${
              type === "story" ? "h-52" : type === "carousel" ? "h-44" : "h-36"
            } flex items-center justify-center text-xs font-semibold text-black transition-all duration-300`}
            style={{ background: "linear-gradient(135deg, #ff6b00 0%, #dd2a7b 50%, #8134af 100%)" }}
          >
            {type === "post"     && "Post preview"}
            {type === "story"    && "Story preview"}
            {type === "carousel" && "Carousel preview"}
          </div>

          {/* Caption injected here */}
          <div ref={previewRef}>
            <div className="px-3 py-2">
              <p className="text-xs text-white/60">Your caption will appear here…</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 text-xs md:text-sm">
          <button
            type="button"
            onClick={downloadImage}
            className="px-4 py-2 rounded-full bg-white text-black font-medium hover:scale-105 active:scale-95 transition"
          >
            Download as Image
          </button>

          <button
            type="button"
            onClick={sendToInstagram}
            className="px-4 py-2 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 transition"
          >
            Send to Instagram
          </button>
        </div>
      </div>
    </div>
  );
}