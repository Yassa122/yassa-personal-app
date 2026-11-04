// src/components/Home.jsx

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowUpRight,
  FiBookOpen,
  FiChevronRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiShoppingBag,
} from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import yassaPhoto from '../assets/yassa.webp';
import CursorGlow from './CursorGlow';
import {
  bachelorThesis,
  certifications,
  education,
  experiences,
  highlights,
  languages,
  moreProjects,
  profile,
  projects,
  publication,
  skillGroups,
} from '../data/portfolio';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

const projectIcons = { kitchen: FiShoppingBag, book: FiBookOpen };

// Older roles collapse their bullet points so the timeline stays scannable
const EXPANDED_ROLES = 3;

const currentCompanies = experiences.filter((e) => e.current).map((e) => e.company).join(' & ');

// Skills that also appear on an experience or the thesis can be clicked to jump there
const linkedSkills = new Set([...experiences.flatMap((e) => e.skills), ...bachelorThesis.skills]);

// The app uses a HashRouter, so in-page anchors must scroll manually instead of changing the hash
const scrollToId = (event, id) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView();
};

const useActiveSection = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -65% 0px' }
    );
    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return active;
};

// Fades its children in the first time they scroll into view
const Reveal = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

// Pass reveal={false} for content that is visible on first paint, so it is never hidden while JS loads
const Section = ({ id, index, title, reveal = true, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="mb-24 lg:mb-32 lg:scroll-mt-20">
    <div className="sticky top-0 z-20 -mx-6 mb-6 bg-zinc-950/80 px-6 py-4 backdrop-blur-md sm:-mx-10 sm:px-10 lg:static lg:mx-0 lg:mb-10 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
      <h2
        id={`${id}-title`}
        className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100"
      >
        <span className="font-mono text-xs tracking-normal text-teal-300">{index}</span>
        {title}
        <span className="h-px flex-1 bg-gradient-to-r from-zinc-700 to-transparent" aria-hidden="true" />
      </h2>
    </div>
    {reveal ? <Reveal>{children}</Reveal> : children}
  </section>
);

const Tag = ({ children, skill }) => (
  <li
    data-skill={skill}
    className="rounded-full bg-teal-400/10 px-2.5 py-1 font-mono text-[11px] leading-none text-teal-200 transition-shadow"
  >
    {children}
  </li>
);

const ExternalArrow = ({ className = '' }) => (
  <FiArrowUpRight
    aria-hidden="true"
    className={`inline-block shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
  />
);

const ExperienceItem = ({ exp, expanded }) => {
  const bullets = (
    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
      {exp.bullets.map((bullet) => (
        <li key={bullet} className="relative pl-5">
          <span className="absolute left-0 top-[0.6em] h-1 w-2.5 rounded-full bg-teal-400/60" aria-hidden="true" />
          {bullet}
        </li>
      ))}
    </ul>
  );

  return (
    <li className="group relative -mx-4 grid gap-1 rounded-xl p-4 transition-colors duration-300 hover:bg-zinc-900/60 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
      <div className="pt-0.5 font-mono text-xs text-zinc-400">
        <p className="uppercase tracking-wide">{exp.period}</p>
        <p className="mt-1 text-zinc-400/80">{exp.duration}</p>
      </div>

      <div>
        <h3 className="font-semibold leading-snug text-zinc-100">
          {exp.title}
          <span className="text-zinc-400/80"> · </span>
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-100 transition-colors before:absolute before:inset-0 before:rounded-xl group-hover:text-teal-300"
          >
            {exp.company}
            <ExternalArrow className="h-4 w-4" />
          </a>
        </h3>

        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-400">
          {exp.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Current
            </span>
          )}
          <span>{exp.type}</span>
          <span aria-hidden="true">·</span>
          <span>{exp.location}</span>
        </p>

        {expanded ? (
          bullets
        ) : (
          <details className="group/details relative z-10 mt-2">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 rounded font-mono text-xs text-teal-300 hover:text-teal-200 [&::-webkit-details-marker]:hidden">
              <FiChevronRight
                aria-hidden="true"
                className="transition-transform duration-200 group-open/details:rotate-90"
              />
              <span className="group-open/details:hidden">Show highlights</span>
              <span className="hidden group-open/details:inline">Hide highlights</span>
            </summary>
            {bullets}
          </details>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {exp.skills.map((skill) => (
            <Tag key={skill} skill={skill}>
              {skill}
            </Tag>
          ))}
        </ul>
      </div>
    </li>
  );
};

const ProjectCard = ({ project }) => {
  const Icon = projectIcons[project.icon];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800 bg-zinc-900">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            width="960"
            height="600"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.16),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(99,102,241,0.12),transparent_50%)]">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
              aria-hidden="true"
            />
            <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-teal-300/20 bg-zinc-950/70 text-teal-300 shadow-xl shadow-teal-500/10 transition-transform duration-500 group-hover:scale-105">
              {Icon && <Icon size={26} aria-hidden="true" />}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-zinc-400/80">
          <span>{project.kind}</span>
          {project.year && <span>{project.year}</span>}
        </p>
        <h3 className="mt-1.5 font-semibold text-zinc-100">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors before:absolute before:inset-0 group-hover:text-teal-300"
            >
              {project.name}
              <ExternalArrow className="h-4 w-4" />
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        {project.stack && (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-4" aria-label="Technologies used">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

const Portfolio = () => {
  const activeSection = useActiveSection();

  // Scroll to the first element that carries the same data-skill and briefly highlight it
  const handleSkillClick = (skill) => {
    const target = document.querySelector(`[data-skill="${skill}"]`);
    if (target) {
      target.scrollIntoView({ block: 'center' });
      target.classList.add('ring-2', 'ring-teal-300', 'ring-offset-2', 'ring-offset-zinc-950');
      setTimeout(() => target.classList.remove('ring-2', 'ring-teal-300', 'ring-offset-2', 'ring-offset-zinc-950'), 2000);
    }
  };

  const skipToContent = (event) => {
    event.preventDefault();
    const main = document.getElementById('content');
    main.focus();
    main.scrollIntoView();
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-300">
      <a
        href="#content"
        onClick={skipToContent}
        className="sr-only z-50 rounded-md bg-teal-300 px-4 py-2 font-semibold text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(55rem_35rem_at_0%_-5%,rgba(45,212,191,0.11),transparent_60%),radial-gradient(45rem_30rem_at_100%_0%,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_30%_0%,black,transparent)]" />
        <CursorGlow />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-6 sm:px-10 lg:flex lg:justify-between lg:gap-16 lg:px-16 xl:px-24">
        {/* Sidebar */}
        <header className="pb-12 pt-16 [scrollbar-width:none] sm:pt-20 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-16 xl:py-20">
          <div className="animate-fade-up">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src={yassaPhoto}
                alt="Portrait of Yassa Ashraf"
                width="64"
                height="64"
                className="h-16 w-16 rounded-full object-cover ring-1 ring-white/10"
              />
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Now at {currentCompanies}
              </p>
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-lg font-medium text-zinc-200 sm:text-xl">
              {profile.role}
              <span className="block text-teal-300">{profile.focus}</span>
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-zinc-400">{profile.tagline}</p>

            <nav aria-label="Sections" className="mt-12 hidden lg:block">
              <ul>
                {sections.map(({ id, label }, i) => {
                  const isActive = activeSection === id;
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={(event) => scrollToId(event, id)}
                        aria-current={isActive ? 'true' : undefined}
                        className="group flex items-center gap-4 py-2"
                      >
                        <span className="w-5 font-mono text-[11px] text-zinc-400/80">{String(i + 1).padStart(2, '0')}</span>
                        <span
                          className={`h-px transition-all duration-300 ${
                            isActive ? 'w-16 bg-teal-300' : 'w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-300'
                          }`}
                        />
                        <span
                          className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                            isActive ? 'text-zinc-50' : 'text-zinc-400 group-hover:text-zinc-100'
                          }`}
                        >
                          {label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="mt-10 animate-fade-up [animation-delay:120ms]">
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-200"
              >
                <FiDownload aria-hidden="true" />
                Download CV
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
              >
                <FiMail aria-hidden="true" />
                Get in touch
              </a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-zinc-400">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-zinc-100">
                <FiGithub size={20} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-zinc-100">
                <FiLinkedin size={20} aria-hidden="true" />
              </a>
              <a href={profile.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="transition-colors hover:text-zinc-100">
                <FaXTwitter size={19} aria-hidden="true" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-zinc-100">
                <FiMail size={20} aria-hidden="true" />
              </a>
              <span className="ml-1 inline-flex items-center gap-1.5 text-sm">
                <FiMapPin aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main id="content" tabIndex={-1} className="pb-16 outline-none lg:w-[56%] lg:py-20">
          <Section id="about" index="01" title="About" reveal={false}>
            <div className="space-y-4 text-base leading-relaxed text-zinc-300 sm:text-[17px]">
              <p>
                I&apos;m a software engineer specializing in backend, cloud, and AI-enabled systems across enterprise and
                product environments. I&apos;m currently a Mid-Level Software Engineer at{' '}
                <span className="font-medium text-zinc-50">Deloitte</span>, building cloud-native services for regulated
                enterprise platforms, and a Senior Software Engineer at{' '}
                <span className="font-medium text-zinc-50">Polyshares</span>, building backend and product features for a
                data-licensing marketplace on Supabase and PostgreSQL. Before that, at EV Cozmo, I integrated live data from
                more than ten EV charging networks.
              </p>
              <p>
                I work across TypeScript, Node.js, NestJS, Java, Spring Boot, ASP.NET, React, Next.js, and AWS, delivering
                APIs, microservices, event-driven systems, infrastructure as code, and CI/CD. I also do research: my work on
                explainable transformers for drug property prediction was published in{' '}
                <span className="font-medium text-zinc-50">Array (Elsevier)</span> in 2026.
              </p>
            </div>
            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.value} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-zinc-50">{item.value}</dd>
                  <dd className="mt-1 text-sm leading-snug text-zinc-400">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="experience" index="02" title="Experience">
            <ol className="space-y-2">
              {experiences.map((exp, index) => (
                <ExperienceItem key={`${exp.company}-${exp.title}`} exp={exp} expanded={index < EXPANDED_ROLES} />
              ))}
            </ol>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-1.5 font-semibold text-zinc-100 transition-colors hover:text-teal-300"
            >
              View full résumé
              <ExternalArrow className="h-4 w-4" />
            </a>
          </Section>

          <Section id="research" index="03" title="Research">
            <article className="group relative overflow-hidden rounded-2xl border border-teal-300/20 bg-gradient-to-br from-teal-400/[0.08] via-zinc-900/50 to-zinc-900/30 p-6 transition-colors duration-300 hover:border-teal-300/40 sm:p-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-teal-200">
                Peer-reviewed · {publication.venue}
              </p>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-zinc-50 sm:text-xl">
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors before:absolute before:inset-0 group-hover:text-teal-200"
                >
                  {publication.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{publication.summary}</p>

              <dl className="mt-5 grid grid-cols-2 gap-3 sm:max-w-sm">
                {publication.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
                    <dt className="sr-only">{metric.label}</dt>
                    <dd className="text-xl font-semibold text-zinc-50">{metric.value}</dd>
                    <dd className="text-xs text-zinc-400">{metric.label}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {publication.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>

              <p className="mt-5 text-sm text-zinc-400">
                {publication.authors.map((author, i) => (
                  <React.Fragment key={author}>
                    {i > 0 && ', '}
                    <span className={i === 0 ? 'font-medium text-zinc-100' : undefined}>{author}</span>
                  </React.Fragment>
                ))}
              </p>
              <p className="mt-1 font-mono text-xs text-zinc-400">
                {publication.details} · DOI {publication.doi}
              </p>
              <a
                href={publication.scienceDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                Read on ScienceDirect
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </article>

            <article className="group relative mt-6 grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 sm:grid-cols-[2fr_3fr]">
              <div className="p-4 pb-0 sm:pb-4 sm:pr-0 sm:pt-6">
                <div className="overflow-hidden rounded-lg ring-1 ring-zinc-800">
                  <img
                    src={bachelorThesis.image}
                    alt="Screenshot of the ExplainMat thesis dashboard"
                    width="960"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-400/80">
                  Bachelor thesis · {bachelorThesis.year}
                  <span className="rounded-full bg-amber-300/10 px-2 py-0.5 tracking-normal text-amber-200">
                    Grade {bachelorThesis.grade}
                  </span>
                </p>
                <h3 className="mt-2 font-semibold leading-snug text-zinc-100">
                  <Link
                    to="/bachelor-thesis"
                    className="inline-flex items-center gap-1 transition-colors before:absolute before:inset-0 group-hover:text-teal-300"
                  >
                    {bachelorThesis.subject}
                    <FiChevronRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{bachelorThesis.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {bachelorThesis.skills.map((skill) => (
                    <Tag key={skill} skill={skill}>
                      {skill}
                    </Tag>
                  ))}
                </ul>
              </div>
            </article>
          </Section>

          <Section id="projects" index="04" title="Projects">
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>

            <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">More projects</h3>
            <ul className="mt-4 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
              {moreProjects.map((project) => (
                <li key={project.name} className="group relative flex items-baseline justify-between gap-6 py-4">
                  <div>
                    <p className="font-medium text-zinc-200">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors before:absolute before:inset-0 group-hover:text-teal-300"
                        >
                          {project.name}
                          <ExternalArrow className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        project.name
                      )}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-400">{project.description}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">{project.year}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="skills" index="05" title="Skills">
            <p className="mb-2 text-sm text-zinc-400">
              <span className="font-medium text-zinc-200">Highlighted skills</span> jump to where I used them.
            </p>
            <dl className="divide-y divide-zinc-800/70">
              {skillGroups.map((group) => (
                <div key={group.name} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="pt-1 font-mono text-xs uppercase tracking-widest text-zinc-400">{group.name}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {group.items.map((skill) =>
                      linkedSkills.has(skill) ? (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => handleSkillClick(skill)}
                          className="rounded-md border border-teal-300/25 bg-teal-300/[0.06] px-2.5 py-1 text-[13px] text-zinc-100 transition-colors hover:border-teal-300/60 hover:text-teal-200"
                        >
                          {skill}
                        </button>
                      ) : (
                        <span
                          key={skill}
                          className="rounded-md border border-zinc-800 px-2.5 py-1 text-[13px] text-zinc-400"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="education" index="06" title="Education">
            <div className="flex flex-col gap-1 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-semibold text-zinc-100">{education.degree}</h3>
                <p className="mt-0.5 text-sm text-zinc-400">{education.school}</p>
              </div>
              <p className="shrink-0 whitespace-nowrap font-mono text-xs text-zinc-400">{education.period}</p>
            </div>

            <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Certifications</h3>
            <ul className="mt-4 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
              {certifications.map((cert) => (
                <li key={cert.name} className="group relative flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <p className="font-medium text-zinc-200">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors before:absolute before:inset-0 group-hover:text-teal-300"
                        >
                          {cert.name}
                          <ExternalArrow className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        cert.name
                      )}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-400">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-zinc-400">{cert.date}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Languages</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <li key={lang.name} className="rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200">
                  {lang.name} <span className="text-zinc-400">· {lang.level}</span>
                </li>
              ))}
            </ul>
          </Section>

          <footer className="border-t border-zinc-800 pt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">Let&apos;s build something reliable.</h2>
            <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
              Want to talk about backend, cloud, or applied AI work? My inbox is open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-200"
            >
              <FiMail aria-hidden="true" />
              {profile.email}
            </a>
            <p className="mt-14 text-xs text-zinc-400/80">
              © {new Date().getFullYear()} {profile.name} · Built with React &amp; Tailwind CSS
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
