import { useState, useRef } from 'react';

const sampleCaptions = [
  'Soft launch of the new era ✨',
  'POV: your brand finally looks like your moodboard.',
  'Posting this so future me remembers the glow‑up.',
];

const sampleHashtags = [
  '#instagen #contentcreator #brandvibes',
  '#smallbusinesslove #designmagic',
  '#aestheticfeed #postwithpurpose',
];

export default function LivePreview() {
  const [caption, setCaption] = useState(sampleCaptions[0]);
  const [hashtags, setHashtags] = useState(sampleHashtags[0]);
  const [type, setType] = useState('post');

  // ✅ STEP 4 — your previewRef lives HERE
  const previewRef = useRef(null);

  const randomise = () => {
    const c = sampleCaptions[Math.floor(Math.random() * sampleCaptions.length)];
    const h = sampleHashtags[Math.floor(Math.random() * sampleHashtags.length)];
    setCaption(c);
    setHashtags(h);
  };

  return (
    <section className="grid md:grid-cols-2 gap-6 mb-10">
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold">Live preview</h2>
        <p className="text-xs md:text-sm text-white/60">
          Type or randomise a caption and see it inside a fake IG frame.
        </p>

        <textarea
          className="w-full min-h-[90px] rounded-2xl bg-black/40 border border-white/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-electricCyan/70"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Tell me what you’re posting about..."
        />

        <textarea
          className="w-full min-h-[60px] rounded-2xl bg-black/40 border border-white/15 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-electricCyan/70"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
          placeholder="#hashtags go here"
        />

        <div className="flex flex-wrap gap-3 items-center">
          <button
            type="button"
            onClick={randomise}
            className="px-4 py-2 rounded-full bg-electricCyan text-black text-xs md:text-sm font-medium shadow-cyan hover:scale-105 active:scale-95 transition"
          >
            Random Caption
          </button>

          <div className="flex gap-2 text-xs md:text-sm">
            {['post', 'story', 'carousel'].map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setType(t)}
                className={`px-3 py-1 rounded-full border border-white/20 ${
                  type === t ? 'bg-white/20' : 'bg-black/40'
                } capitalize`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {/* ✅ STEP 4 — previewRef attached here */}
        <div
          ref={previewRef}
          className="w-[260px] md:w-[300px] rounded-3xl bg-black/70 border border-white/15 shadow-lg overflow-hidden animate-float"
        >
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neonPink to-electricCyan" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">@instagen_demo</span>
              <span className="text-[10px] text-white/50">Sponsored</span>
            </div>
          </div>

          <div
            className={`${
              type === 'story'
                ? 'h-40'
                : type === 'carousel'
                ? 'h-44'
                : 'h-36'
            } bg-gradient-to-br from-neonPink/40 via-electricCyan/30 to-limePop/40 flex items-center justify-center text-xs text-black font-semibold`}
          >
            {type === 'post' && 'Post preview'}
            {type === 'story' && 'Story preview'}
            {type === 'carousel' && 'Carousel preview'}
          </div>

          <div className="px-3 py-2 space-y-1">
            <p className="text-xs">{caption}</p>
            <p className="text-[10px] text-electricCyan/90">{hashtags}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
