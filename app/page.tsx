'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const skills = {
  'Cloud & Infrastructure': [
    'AWS (EC2, S3, VPC, IAM, ALB, CloudWatch, Route53)',
  ],
  'Containers & Orchestration': [
    'Docker',
    'Kubernetes (Deployments, Services, ConfigMaps)',
  ],
  'IaC & Config Mgmt': [
    'Terraform',
    'Ansible',
  ],
  'CI/CD': [
    'Jenkins',
    'GitHub Actions',
  ],
  'Languages & Scripting': [
    'Bash',
    'Python',
    'HCL',
    'YAML',
    'JSON',
  ],
  'Observability': [
    'CloudWatch',
    'Prometheus',
    'Structured Logs',
  ],
  'Tools': [
    'Git',
    'Docker Compose',
    'Helm',
    'Terraform Cloud/Remote Backends',
  ],
};

const experiences = [
  {
    title: 'DevOps Engineer',
    company: 'Sathya Technologies',
    period: 'June 2025 – Present',
    achievements: [
      'Built reusable Terraform modules and automated environment provisioning across dev/stage/prod',
      'Implemented Jenkins pipelines and GitHub Actions for parallel builds and gated releases',
      'Migrated legacy services into Docker containers and improved deployment stability',
      'Introduced S3 lifecycle policies and tagging to cut storage costs while maintaining compliance',
    ],
  },
  {
    title: 'DevOps Intern',
    company: 'Elevate Labs',
    period: 'Apr 2025 – May 2025',
    achievements: [
      'Contributed to CI pipeline templates and containerization of microservices',
      'Automated test-driven build steps and helped reduce manual release steps',
    ],
  },
];

const projects = [
  {
    title: 'Containerized Snake Game Web App & Pipeline',
    description: 'Dockerized a responsive game frontend, used Jenkins pipeline to build, test, and deploy to an Nginx host. Impact: reduced manual deployment steps by ~85%.',
    sourceUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Terraform Infrastructure Configuration',
    description: 'Modular Terraform code to provision AWS resources (VPC, subnets, EC2, S3) with state management. Reusable modules reduced environment provisioning time by ~60%.',
    sourceUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Node.js App with GitHub Actions CI/CD',
    description: 'GitHub Actions workflows for PR checks, dependency audits, and automated unit tests. Result: earlier detection of regressions and cleaner merge history.',
    sourceUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Python App Containerization',
    description: 'Multi-container docker-compose for dev, production Dockerfiles for lean images, and consistent dev environment. Onboarding time cut by 80% for new developers.',
    sourceUrl: '#',
    liveUrl: '#',
  },
];

const certifications = [
  {
    title: 'Training Certificate in AWS & DevOps',
    issuer: 'Sathya Technologies',
    year: '2025',
  },
  {
    title: 'Internship Certificate — DevOps Engineer',
    issuer: 'Elevate Labs',
    year: '2025',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="container mx-auto px-6 py-20 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Aman Uddin
            <br />
            <span className="text-accent">DevOps Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-8 leading-relaxed">
            Cloud-native infrastructure engineer focused on reliable, automated delivery
            pipelines, resilient systems, and cost-efficient cloud operations.
          </p>
          <p className="text-base md:text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            I build reproducible infrastructure using Terraform, containerize apps for
            production with Docker & Kubernetes, and ship software fast through automated
            CI/CD. Currently designing scalable AWS environments and developer-friendly
            observability for reliability and speed.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity focus-ring"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border bg-surface rounded-lg font-medium hover:border-accent transition-colors focus-ring"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border bg-surface rounded-lg font-medium hover:border-accent transition-colors focus-ring"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="container mx-auto px-6 py-20"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted leading-relaxed mb-6">
              I'm a detail-oriented DevOps Engineer with a B.E. in Information Technology
              and hands-on experience building cloud-native platforms. I specialize in AWS,
              Terraform, container orchestration, CI/CD automation, and developer
              experience. My work blends infrastructure-as-code discipline with pragmatic
              automation: small changes should be testable, reversible, and observable.
            </p>
            <h3 className="text-xl font-semibold mb-4">Core strengths:</h3>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Designing idempotent Terraform modules and managing remote state
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Building reproducible container/CI pipelines with Docker, GitHub Actions,
                  and Jenkins
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Enabling teams with Ansible automation and clear runbooks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Balancing reliability, cost, and performance for production workloads on
                  AWS
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="container mx-auto px-6 py-20 bg-surface/50"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Skills
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-accent">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <SkillBadge
                      key={skill}
                      label={skill}
                      index={categoryIndex * 10 + index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="container mx-auto px-6 py-20"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline experiences={experiences} />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="container mx-auto px-6 py-20 bg-surface/50"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Projects
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                sourceUrl={project.sourceUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        aria-labelledby="certifications-heading"
        className="container mx-auto px-6 py-20"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2
            id="certifications-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Certifications
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-border rounded-lg bg-surface shadow-soft hover:shadow-soft-dark transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted">
                  {cert.issuer} • {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        aria-labelledby="education-heading"
        className="container mx-auto px-6 py-20 bg-surface/50"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2
            id="education-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Education
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-border rounded-lg bg-surface shadow-soft"
          >
            <h3 className="text-xl font-semibold mb-2">B.E., Information Technology</h3>
            <p className="text-accent font-medium mb-2">ISL Engineering College</p>
            <p className="text-muted">2020–2024</p>
            <p className="text-muted mt-2">CGPA: 7.94</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Publications Section */}
      <section
        id="publications"
        aria-labelledby="publications-heading"
        className="container mx-auto px-6 py-20"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2
            id="publications-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Publications
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-border rounded-lg bg-surface shadow-soft"
          >
            <h3 className="text-lg font-semibold mb-2">
              Cyber Security and Artificial Intelligence
            </h3>
            <p className="text-muted">ICAISC (2022)</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="container mx-auto px-6 py-20 bg-surface/50"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Get In Touch
          </h2>
          <p className="text-muted mb-8 text-lg">
            I'm always open to discussing DevOps opportunities, infrastructure challenges,
            or collaboration on interesting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="mailto:aman@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity focus-ring"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
              Email
            </motion.a>
            <motion.a
              href="https://github.com/amanuddinu4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border bg-surface rounded-lg font-medium hover:border-accent transition-colors focus-ring"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border bg-surface rounded-lg font-medium hover:border-accent transition-colors focus-ring"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}


