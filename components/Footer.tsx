'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border mt-20 py-8"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Aman Uddin. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/amanuddinu4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors focus-ring rounded"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="mailto:aman@example.com"
              className="text-sm text-muted hover:text-accent transition-colors focus-ring rounded"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}


