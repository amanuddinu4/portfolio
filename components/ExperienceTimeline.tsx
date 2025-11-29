'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative pl-12 md:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-accent border-4 border-bg hidden md:flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-surface" />
            </div>
            
            <div className="bg-surface border border-border rounded-lg p-6 shadow-soft hover:shadow-soft-dark transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


