const items = [
  {
    title: 'How to write engaging Instagram captions',
    body: 'Lead with a hook in the first 125 characters — a question, bold statement or surprising fact. Use short paragraphs and line breaks to keep it scannable. End with a clear call to action: ask people to comment, save, or tag a friend. Write like you talk. Read it out loud before posting — if it sounds stiff, rewrite it.',
  },
  {
    title: 'How to use hashtags effectively',
    body: 'Instagram now recommends 3–5 highly relevant hashtags rather than stuffing all 30. Mix three tiers: niche tags (under 500k posts) for engaged audiences, mid-size tags (500k–5M) for active communities, and 1–2 larger tags for broader reach. Rotate your hashtag sets to avoid being flagged as spam. Never use banned hashtags.',
  },
  {
    title: 'Best times to post on Instagram',
    body: 'Check your Instagram Insights for when your audience is online. Generally, weekday mornings (7–9am) and evenings (6–9pm) perform strongest. Wednesday and Friday evenings show the highest engagement rates across most niches. Consistency matters more than perfect timing — posting at 7am every day beats posting at the perfect time once a week.',
  },
  {
    title: 'Building a consistent brand on Instagram',
    body: 'Choose 3 brand colours and use them across every post. Pick 2 fonts — one for headlines, one for body. Define your tone of voice: fun, professional, bold, or inspiring. Use the same filter or editing preset on every photo. Your profile grid is a first impression — think about how posts look side by side, not just individually.',
  },
  {
    title: 'How to grow on Instagram organically',
    body: 'Post 3–5 times per week. Respond to every comment within the first hour — this signals to Instagram your content is worth showing more people. Collaborate with creators in your niche through joint posts and story takeovers. Use all formats: feed posts, Stories, Reels and carousels. Never buy followers — they kill your engagement rate.',
  },
  {
    title: 'Why Reels dominate reach in 2025',
    body: 'Instagram still prioritises Reels over static posts for discovery. A simple 15-second tip video consistently outperforms even the best static post for new reach. Hook viewers in the first 2 seconds. Use text overlays so the video works on mute. Post Reels at least twice a week to see a noticeable difference in reach.',
  },
  {
    title: 'Social media branding tips',
    body: 'Your Instagram bio has 150 characters to explain who you are, what you do, and why someone should follow. Include a clear value proposition and a call to action with a link. Your profile photo should be recognisable at small sizes. Use Highlights to showcase your best Stories permanently. Pin your best 3 posts to the top of your profile.',
  },
  {
    title: 'Content calendar suggestions',
    body: 'Plan at least one week ahead. Use the 4-1 rule: for every promotional post, create 4 value-driven posts. Sample weekly schedule — Monday: educational post. Wednesday: behind-the-scenes. Friday: promotion. Saturday: engagement post like a poll or question. Batch create content in one session and schedule in advance using Meta Business Suite.',
  },
  {
    title: 'How to use AI to generate captions effectively',
    body: 'AI works best with specific, detailed prompts. Instead of "caption for my business", try "fun caption for a small coffee shop announcing a new seasonal drink for young professionals in London". Always edit AI output to add your personal voice. Use AI to overcome writer\'s block and generate variations — not to replace your authentic voice.',
  },
  {
    title: 'Using analytics to improve your content',
    body: 'Check Instagram Insights weekly. Focus on reach (unique accounts reached), saves (strongest engagement signal), profile visits, and follower growth. Saves are more valuable than likes — content that gets saved reaches more people. Review your top 5 performing posts monthly and double down on what works. Let data guide your strategy, not guesswork.',
  },
  {
    title: 'Making your Instagram content accessible',
    body: 'Add alt text to every post — go to Advanced Settings when posting. Add captions to all video content since most people watch on mute. Use high contrast between text and background in graphics. Write image descriptions in your caption for screen reader users. These small steps make your content reach more people and show you care about your whole audience.',
  },
  {
    title: 'Ethical responsibilities of content creators',
    body: 'Always disclose paid partnerships and sponsored content clearly using #ad or #sponsored — this is both ethical and legally required. Only use music and images you have rights to. Credit other creators when referencing their work. Be transparent about AI-generated content. Never use misleading before-and-after images or false product claims.',
  },
  {
    title: 'Understanding your users — the AIEOU framework',
    body: 'Activities: generating posts, captions and hashtags, browsing templates, building brand kits. Environment: fast-paced social media world demanding quick, high-quality content. Interactions: forms, AI tools, template pickers, preview and download buttons. Objects: templates, captions, hashtags, colour palettes, font pairings. Users: creators, small businesses, influencers, students, and beginners.',
  },
];

export default function Learn() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">Learn</h1>
      <p className="text-sm text-white/70 mb-6">
        Quick, practical tips to make your content feel more intentional — no fluff.
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