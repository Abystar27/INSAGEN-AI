import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto py-20 text-center text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-white/70 mb-8">
        We couldn’t find that page. Try one of the app sections below.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="px-5 py-3 rounded-full bg-neonPink text-black font-semibold hover:scale-105 active:scale-95 transition"
        >
          Return Home
        </Link>
        <Link
          to="/generate/post"
          className="px-5 py-3 rounded-full border border-white/30 bg-black/40 text-white hover:bg-white/10 transition"
        >
          Go to Generator
        </Link>
      </div>
    </div>
  );
}
