import { useMode } from '../context/ModeContext.js';

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  const toggle = () => {
    setMode((prev) => (prev === 'neon' ? 'wild' : 'neon'));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
      aria-label="Toggle colour mode"
    >
      <span className="w-2 h-2 rounded-full bg-neonPink shadow-neon" />
      {mode === 'neon' ? 'Go Wild' : 'Calm Down'}
    </button>
  );
}
