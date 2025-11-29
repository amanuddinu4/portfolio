'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Show a neutral icon during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="p-2 rounded-md focus-ring hover:bg-surface transition-colors"
        disabled
      >
        <span className="text-xl" role="img" aria-label="Loading theme">🌙</span>
      </button>
    );
  }

  return (
    <motion.button
      aria-label="Toggle theme"
      onClick={toggle}
      className="p-2 rounded-md focus-ring hover:bg-surface transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'dark' ? (
        <span className="text-xl" role="img" aria-label="Light mode">☀️</span>
      ) : (
        <span className="text-xl" role="img" aria-label="Dark mode">🌙</span>
      )}
    </motion.button>
  );
}


