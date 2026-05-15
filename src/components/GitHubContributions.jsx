import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GITHUB_USERNAME = 'Yassa122';
const API_BASE = 'https://github-contributions-api.jogruber.de/v4';
const YEAR_OPTIONS = [2026, 2025, 2024, 2023, 2022];
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const LEVEL_COLORS = [
  'bg-zinc-900/90 border-zinc-800/80',
  'bg-teal-950/90 border-teal-900/50',
  'bg-teal-900/80 border-teal-800/60',
  'bg-teal-700/90 border-teal-600/50',
  'bg-teal-500/95 border-teal-400/40 shadow-[0_0_8px_rgba(45,212,191,0.35)]',
];

const organizations = [
  { name: 'Beity-app', url: 'https://github.com/Beity-app' },
  { name: 'NeuroXAI', url: 'https://github.com/NeuroXAI' },
  { name: 'storely-eg', url: 'https://github.com/storely-eg' },
];

const formatTooltipDate = (dateStr) => {
  const d = new Date(`${dateStr}T12:00:00`);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const chunkWeeks = (contributions) => {
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }
  return weeks;
};

const getMonthLabels = (weeks) =>
  weeks.map((week) => {
    for (const day of week) {
      const d = new Date(`${day.date}T12:00:00`);
      if (d.getDate() === 1) return MONTH_NAMES[d.getMonth()];
    }
    return '';
  });

const SkeletonGrid = () => (
  <motion.div
    className="flex gap-[3px] overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {Array.from({ length: 53 }).map((_, wi) => (
      <motion.div key={wi} className="flex flex-col gap-[3px]">
        {Array.from({ length: 7 }).map((__, di) => (
          <motion.div
            key={di}
            className="h-[11px] w-[11px] rounded-[2px] bg-zinc-800/80"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: (wi + di) * 0.02,
            }}
          />
        ))}
      </motion.div>
    ))}
  </motion.div>
);

const GitHubContributions = ({ username = GITHUB_USERNAME }) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(
    YEAR_OPTIONS.includes(currentYear) ? currentYear : YEAR_OPTIONS[0]
  );
  const [contributions, setContributions] = useState([]);
  const [yearTotals, setYearTotals] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(null);

  const fetchYear = useCallback(async (y) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/${username}?y=${y}`);
      if (!res.ok) throw new Error('Failed to load contributions');
      const data = await res.json();
      setContributions(data.contributions || []);
      setYearTotals(data.total || {});
    } catch {
      setContributions([]);
      setError('Unable to load contribution data right now.');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchYear(year);
  }, [year, fetchYear]);

  const weeks = useMemo(() => chunkWeeks(contributions), [contributions]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  const totalContributions = useMemo(() => {
    if (yearTotals[year] != null) return yearTotals[year];
    return contributions.reduce((sum, d) => sum + (d.count || 0), 0);
  }, [contributions, year, yearTotals]);

  return (
    <motion.section
      id="contributions"
      className="mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl border border-zinc-800/90 bg-gradient-to-br from-zinc-950 via-zinc-950/95 to-zinc-900/40 p-4 sm:p-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
        whileHover={{ borderColor: 'rgba(45, 212, 191, 0.15)' }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-500/5 blur-3xl"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-600/5 blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />

        <motion.div
          className="relative mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-stone-200"
            layout
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={year}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {loading ? (
                  <span className="inline-block h-8 w-48 animate-pulse rounded bg-zinc-800" />
                ) : (
                  <>
                    <span className="text-teal-400 tabular-nums">
                      {totalContributions.toLocaleString()}
                    </span>{' '}
                    contributions in {year}
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <AnimatePresence mode="wait">
              {hovered && !loading && (
                <motion.p
                  key={hovered.date}
                  className="text-xs text-stone-400"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  <span className="font-medium text-teal-400">{hovered.count}</span>{' '}
                  {hovered.count === 1 ? 'contribution' : 'contributions'} on{' '}
                  {formatTooltipDate(hovered.date)}
                </motion.p>
              )}
            </AnimatePresence>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900/50 px-3 py-1.5 text-sm text-stone-400 transition-colors hover:border-teal-800 hover:text-teal-300"
            >
              <FaGithub size={16} />
              @{username}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative flex flex-col gap-4 lg:flex-row lg:gap-6"
          layout
        >
          <motion.div
            className="min-w-0 flex-1 overflow-x-auto pb-1"
            layout
          >
            <div className="inline-block min-w-full">
              <div className="mb-2 ml-8 flex gap-[3px] text-[10px] text-stone-500">
                {monthLabels.map((label, i) => (
                  <div
                    key={`${label}-${i}`}
                    className="w-[11px] flex-shrink-0 overflow-visible"
                    style={{ minWidth: 11 }}
                  >
                    <span className="block w-[44px] -translate-x-1 whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <motion.div className="flex gap-3">
                <motion.div
                  className="flex flex-col justify-between gap-[3px] py-[2px] pr-1 text-[10px] leading-none text-stone-500"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {DAY_LABELS.map((label, i) => (
                    <span
                      key={i}
                      className="flex h-[11px] items-center"
                      style={{ minHeight: 11 }}
                    >
                      {label}
                    </span>
                  ))}
                </motion.div>

                <div className="relative">
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <SkeletonGrid />
                      </motion.div>
                    ) : error ? (
                      <motion.p
                        key="error"
                        className="py-8 text-sm text-stone-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {error}
                      </motion.p>
                    ) : (
                      <motion.div
                        key={year}
                        className="flex gap-[3px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        {weeks.map((week, weekIndex) => (
                          <motion.div
                            key={weekIndex}
                            className="flex flex-col gap-[3px]"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: Math.min(weekIndex * 0.012, 0.6),
                              duration: 0.3,
                            }}
                          >
                            {week.map((day, dayIndex) => {
                              const level = Math.min(
                                4,
                                Math.max(0, day.level ?? 0)
                              );
                              const cellKey = day.date;
                              const isHovered = hovered?.date === day.date;

                              return (
                                <motion.button
                                  key={cellKey}
                                  type="button"
                                  className={`h-[11px] w-[11px] rounded-[2px] border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 ${LEVEL_COLORS[level]}`}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{
                                    scale: isHovered ? 1.2 : 1,
                                    opacity: 1,
                                  }}
                                  transition={{
                                    delay:
                                      weekIndex * 0.012 + dayIndex * 0.004,
                                    type: 'spring',
                                    stiffness: 420,
                                    damping: 28,
                                  }}
                                  onMouseEnter={() => setHovered(day)}
                                  onMouseLeave={() => setHovered(null)}
                                  onFocus={() => setHovered(day)}
                                  onBlur={() => setHovered(null)}
                                  aria-label={`${day.count} contributions on ${formatTooltipDate(day.date)}`}
                                />
                              );
                            })}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400/80 transition-colors"
              >
                Learn how we count contributions
              </a>
              <motion.div
                className="flex items-center gap-1.5"
                layout
              >
                <span>Less</span>
                {LEVEL_COLORS.map((color, i) => (
                  <motion.span
                    key={i}
                    className={`h-[11px] w-[11px] rounded-[2px] border ${color}`}
                    whileHover={{ scale: 1.15 }}
                  />
                ))}
                <span>More</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.nav
            className="flex flex-row flex-wrap gap-1 lg:flex-col lg:items-stretch lg:min-w-[4.5rem]"
            aria-label="Contribution years"
            layout
          >
            {YEAR_OPTIONS.map((y) => {
              const isActive = y === year;
              return (
                <motion.button
                  key={y}
                  type="button"
                  onClick={() => setYear(y)}
                  className={`relative rounded-md px-3 py-1.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-stone-500 hover:text-stone-300'
                  }`}
                  whileHover={{ x: isActive ? 0 : 2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="contrib-year-pill"
                      className="absolute inset-0 rounded-md bg-gradient-to-r from-teal-600 to-teal-500 shadow-[0_0_16px_rgba(45,212,191,0.25)]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10 tabular-nums">{y}</span>
                </motion.button>
              );
            })}
          </motion.nav>
        </motion.div>

        <motion.div
          className="relative mt-6 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {organizations.map((org, i) => (
            <motion.a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/60 px-3 py-1 text-xs text-stone-400 transition-all hover:border-teal-800/60 hover:text-teal-300"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i, duration: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -1 }}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-800 text-[9px] font-bold text-teal-500">
                {org.name.charAt(0)}
              </span>
              @{org.name}
            </motion.a>
          ))}
          <motion.a
            href={`https://github.com/${username}?tab=organizations`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-dashed border-zinc-700 px-3 py-1 text-xs text-stone-500 transition-colors hover:border-teal-800 hover:text-teal-400"
            whileHover={{ scale: 1.04 }}
          >
            More
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default GitHubContributions;
