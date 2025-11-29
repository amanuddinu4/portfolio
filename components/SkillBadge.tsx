'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  label: string;
  index?: number;
}

export default function SkillBadge({ label, index = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border bg-surface hover:border-accent transition-all"
    >
      {label}
    </motion.span>
  );
}


