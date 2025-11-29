'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  sourceUrl?: string;
  liveUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  sourceUrl,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="p-6 rounded-2xl border border-border bg-surface shadow-soft hover:shadow-soft-dark transition-all h-full flex flex-col"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-muted mb-4 flex-grow">{description}</p>
      <div className="flex gap-4 mt-auto">
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline focus-ring rounded"
            aria-label={`View source code for ${title}`}
          >
            <Github className="w-4 h-4" />
            Source
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline focus-ring rounded"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        )}
      </div>
    </motion.article>
  );
}


