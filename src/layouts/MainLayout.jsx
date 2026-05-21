import NavBar from '../components/Navbar.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 px-4 md:px-10 py-6">{children}</main>
      <footer className="border-t border-white/10 text-xs md:text-sm text-center py-4 text-white/60">
        No login. No email. Just create. · Privacy · Ethics &amp; Accessibility
      </footer>
    </div>
  );
}
