const items = [
  {
    title: 'How to write engaging Instagram captions',
    body: 'Lead with a hook, keep it skimmable, and end with a clear call to action or question.',
  },
  {
    title: 'Best times to post on Instagram',
    body: 'Test your audience, but late evenings and lunch breaks often perform well. Consistency matters more than perfection.',
  },
  {
    title: 'How to use hashtags effectively',
    body: 'Mix broad and niche hashtags, avoid spammy blocks, and rotate sets instead of copy‑pasting the same ones.',
  },
  {
    title: 'Branding basics for your feed',
    body: 'Stick to 2–3 core colours, 1–2 fonts, and a repeatable layout pattern so your grid feels intentional.',
  },
];

export default function Learn() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">Learn</h1>
      <p className="text-sm text-white/70 mb-6">
        Quick, practical tips to make your content feel more intentional — no
        fluff.
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.title}
            className="rounded-2xl bg-black/60 border border-white/15 px-4 py-3"
          >
            <summary className="cursor-pointer text-sm font-medium">
              {item.title}
            </summary>
            <p className="mt-2 text-xs text-white/70">{item.body}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
