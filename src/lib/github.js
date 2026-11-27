const USERNAME = "izsal";
const CONTRIBUTIONS_URL = `https://github.com/users/${USERNAME}/contributions`;
const PROFILE_URL = `https://api.github.com/users/${USERNAME}`;

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function requestHeaders() {
  const headers = { "User-Agent": "my-portofolio" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

function parseContributionDays(html) {
  const days = new Map();
  const cellPattern =
    /<td\b[^>]*class="ContributionCalendar-day"[^>]*>/g;

  let cell;
  while ((cell = cellPattern.exec(html)) !== null) {
    const tag = cell[0];
    const date = /data-date="([^"]+)"/.exec(tag);
    const level = /data-level="(\d+)"/.exec(tag);
    const component = /id="contribution-day-component-(\d+)-(\d+)"/.exec(tag);
    if (!date || !level || !component) continue;

    days.set(`${component[1]}-${component[2]}`, {
      day: Number(component[1]),
      week: Number(component[2]),
      date: date[1],
      level: Number(level[1]),
      count: 0,
    });
  }

  const tipPattern =
    /<tool-tip\b[^>]*for="contribution-day-component-(\d+)-(\d+)"[^>]*>([^<]*)<\/tool-tip>/g;

  let tip;
  while ((tip = tipPattern.exec(html)) !== null) {
    const entry = days.get(`${tip[1]}-${tip[2]}`);
    if (!entry) continue;
    const count = /(\d[\d,]*)\s+contributions?/.exec(tip[3]);
    entry.count = count ? Number(count[1].replace(/,/g, "")) : 0;
  }

  return days;
}

function longestStreak(entries) {
  let longest = 0;
  let current = 0;
  let previous = null;

  for (const entry of entries) {
    if (entry.count <= 0) {
      current = 0;
      continue;
    }

    const today = new Date(`${entry.date}T00:00:00Z`).getTime();
    const isNextDay =
      previous !== null && today - previous === 24 * 60 * 60 * 1000;

    current = isNextDay ? current + 1 : 1;
    longest = Math.max(longest, current);
    previous = today;
  }

  return longest;
}

const VISIBLE_WEEKS = 22;

function buildWeeks(days) {
  const cells = [...days.values()].sort((a, b) =>
    a.date < b.date ? -1 : a.date > b.date ? 1 : 0
  );

  const totalWeeks =
    cells.reduce((max, cell) => Math.max(max, cell.week), 0) + 1;
  const firstWeek = Math.max(0, totalWeeks - VISIBLE_WEEKS);

  const visible = cells.filter((cell) => cell.week >= firstWeek);
  const weekCount = totalWeeks - firstWeek;

  const weeks = Array.from({ length: weekCount }, () =>
    Array.from({ length: 7 }, () => null)
  );

  for (const cell of visible) {
    weeks[cell.week - firstWeek][cell.day] = cell;
  }

  const monthLabels = weeks.map((week, index) => {
    if (index === 0) return null;

    const first = week.find(Boolean);
    if (!first) return null;

    const currentMonth = new Date(`${first.date}T00:00:00Z`).getUTCMonth();
    const previousWeek = weeks[index - 1];
    const previousFirst = previousWeek?.find(Boolean);
    const previousMonth = previousFirst
      ? new Date(`${previousFirst.date}T00:00:00Z`).getUTCMonth()
      : null;

    return currentMonth !== previousMonth ? MONTH_LABELS[currentMonth] : null;
  });

  return { cells: visible, weeks, monthLabels };
}

async function fetchPublicRepos() {
  try {
    const response = await fetch(PROFILE_URL, {
      headers: requestHeaders(),
    });
    if (!response.ok) return null;
    const profile = await response.json();
    return typeof profile.public_repos === "number"
      ? profile.public_repos
      : null;
  } catch {
    return null;
  }
}

export async function getContributionActivity() {
  try {
    const [response, publicRepos] = await Promise.all([
      fetch(CONTRIBUTIONS_URL, { headers: requestHeaders() }),
      fetchPublicRepos(),
    ]);

    if (!response.ok) throw new Error(`GitHub responded ${response.status}`);

    const html = await response.text();
    const days = parseContributionDays(html);

    if (days.size === 0) throw new Error("No contribution cells found");

    const { cells, weeks, monthLabels } = buildWeeks(days);

    return {
      username: USERNAME,
      total: cells.reduce((sum, cell) => sum + cell.count, 0),
      activeDays: cells.filter((cell) => cell.count > 0).length,
      longestStreak: longestStreak(cells),
      publicRepos,
      weeks,
      monthLabels,
    };
  } catch {
    return null;
  }
}
