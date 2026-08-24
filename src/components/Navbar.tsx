import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Strategy', to: '/strategy' },
  { label: 'Therapy Areas', to: '/therapy-areas', mega: true },
];

const therapyLinks = [
  { label: 'Cardiovascular', to: '/therapy-areas/cardiovascular', desc: '2 Products · 15 Ideas' },
  { label: 'Diabetes', to: '/therapy-areas/diabetes', desc: 'Coming Soon' },
];

function isActive(pathname: string, to: string): boolean {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(to + '/');
}

export default function Navbar({
  onLogoSecret,
}: {
  onLogoSecret?: () => void;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const logoClicks = useRef(0);
  const logoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    logoClicks.current += 1;
    if (logoTimer.current) clearTimeout(logoTimer.current);
    logoTimer.current = setTimeout(() => {
      logoClicks.current = 0;
    }, 800);
    if (logoClicks.current >= 3) {
      e.preventDefault();
      logoClicks.current = 0;
      if (logoTimer.current) clearTimeout(logoTimer.current);
      onLogoSecret?.();
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [megaOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/85 backdrop-blur-xl border-b border-ink-200/70 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 group focus-ring rounded-lg"
          aria-label="Hikma Digital Innovation Proposal .  Home"
        >
          <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-500 text-white shadow-sm transition-transform group-hover:scale-105">
            <span className="text-sm font-extrabold">Hikma</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight text-ink-900">
              Hikma
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-ink-500">
              Pharmaceuticals
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(pathname, item.to);
            if (item.mega) {
              return (
                <div key={item.to} className="relative" ref={megaRef}>
                  <button
                    onClick={() => setMegaOpen((v) => !v)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 focus-ring ${
                      active || megaOpen
                        ? 'text-brand-600'
                        : 'text-ink-700 hover:text-ink-900'
                    }`}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        megaOpen ? 'rotate-180' : ''
                      }`}
                    />
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-ink-200 bg-white/95 backdrop-blur-xl shadow-xl p-2"
                      >
                        {therapyLinks.map((t) => (
                          <Link
                            key={t.to}
                            to={t.to}
                            className="block px-3 py-3 rounded-xl hover:bg-ink-50 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
                                {t.label}
                              </span>
                              <Activity
                                className={`w-4 h-4 ${
                                  t.label === 'Diabetes'
                                    ? 'text-ink-300'
                                    : 'text-brand-400'
                                }`}
                              />
                            </div>
                            <span className="text-xs text-ink-500 mt-0.5 block">
                              {t.desc}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus-ring ${
                  active ? 'text-brand-600' : 'text-ink-700 hover:text-ink-900'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                  />
                )}
              </Link>
            );
          })}
          <Link
            to="/ebers"
            className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus-ring ${
              isActive(pathname, '/ebers')
                ? 'text-brand-600'
                : 'text-ink-700 hover:text-ink-900'
            }`}
            aria-label="Ebers .  our partner"
            title="Ebers"
          >
            Ebers
            {isActive(pathname, '/ebers') && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
              />
            )}
          </Link>
          <Link
            to="/strategy"
            onClick={(e) => {
              e.preventDefault();
              navigate('/strategy');
            }}
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-500 text-white text-sm font-semibold shadow-sm hover:bg-brand-600 transition-colors focus-ring"
          >
            Enter Proposal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-xl border border-ink-200 bg-white/70 text-ink-800 focus-ring"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-ink-50/95 backdrop-blur-xl border-b border-ink-200"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold focus-ring ${
                    isActive(pathname, item.to)
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-ink-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/ebers"
                className={`px-3 py-2.5 rounded-xl text-sm font-semibold focus-ring ${
                  isActive(pathname, '/ebers')
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-ink-700'
                }`}
              >
                Ebers
              </Link>
              <div className="mt-1 pt-2 border-t border-ink-200">
                <p className="px-3 text-[10px] font-bold tracking-[0.18em] uppercase text-ink-400 mb-1">
                  Therapy Areas
                </p>
                {therapyLinks.map((t) => (
                  <Link
                    key={t.to}
                    to={t.to}
                    className="px-3 py-2.5 rounded-xl text-sm font-semibold text-ink-700 flex items-center justify-between"
                  >
                    {t.label}
                    <span className="text-xs text-ink-400">{t.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
