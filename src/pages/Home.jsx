import HomeHero from '../components/HomeHero.jsx';
import LivePreview from '../components/LivePreview.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <HomeHero />
      <LivePreview />

      <section className="mb-10">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          What do you want to create?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <QuickCard
            title="Post Generator"
            to="/generate/post"
            gradient="from-neonPink to-electricCyan"
          />
          <QuickCard
            title="Story Generator"
            to="/generate/story"
            gradient="from-electricCyan to-limePop"
          />
          <QuickCard
            title="Carousel Generator"
            to="/generate/carousel"
            gradient="from-wildOrange to-wildBlue"
          />
        </div>
      </section>
    </div>
  );
}

function QuickCard({ title, to, gradient }) {
  return (
    <Link
      to={to}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-[1px] hover:scale-105 active:scale-95 transition`}
    >
      <div className="rounded-3xl bg-black/80 px-4 py-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm md:text-base">{title}</h3>
          <p className="text-xs text-white/60 mt-1">
            Jump straight into generating content for this format.
          </p>
        </div>
        <span className="mt-4 text-[11px] text-white/70">Let’s create →</span>
      </div>
    </Link>
  );
}
