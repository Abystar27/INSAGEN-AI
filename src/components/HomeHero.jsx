import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#f58529]/40 via-[#dd2a7b]/30 to-[#8134af]/40 p-6 md:p-10 mb-8 shadow-[0_30px_80px_rgba(255,88,195,0.18)]">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-[#ff6a00]/30 blur-3xl rounded-full animate-float" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 w-52 h-52 bg-[#d60086]/30 blur-3xl rounded-full animate-pulseGlow" />

      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow">
            Create{' '}
            <span className="text-neonPink">scroll‑stopping</span> Instagram
            content in seconds.
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-md">
            AI captions. Bold templates. Zero effort. Just tell it the vibe and
            hit generate.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {/* <Link
              to="/generate/post"
              className="px-5 py-2.5 rounded-full text-black font-medium hover:scale-105 active:scale-95 transition btn-primary"
            >
              Start Generating
            </Link> */}

            <Link
             to="/generate/post"
              className="px-5 py-2.5 rounded-full font-medium hover:scale-105 active:scale-95 transition"
              style={{ background: '#FF2D8A', color: '#000', boxShadow: '0 0 20px rgba(255,45,138,0.5)' }}
              >
               Start Generating
            </Link>


            <Link
              to="/generate/carousel"
              className="px-5 py-2.5 rounded-full border border-white/30 bg-black/40 text-white/90 hover:bg-white/10 transition"
            >
              Explore Templates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
