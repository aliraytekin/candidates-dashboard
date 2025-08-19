const norm = (s) => (s ?? "").toString().toLowerCase().trim();
const textIncludes = (hay, needle) => norm(hay).includes(norm(needle));
const hasAny = (arr = [], selected = []) => {
  if (!arr.length || !selected.length) return false;
  const set = new Set(arr.map(norm));
  return selected.some((x) => set.has(norm(x)));
}

export default function FilterAndSort(candidates = [], filters = {}) {
  const {
    q = "",
    location = "",
    minExp = null,
    maxExp = null,
    skills = [],
    availability = "",
    languages = [],
    sortBy = "exp",
  } = filters;

  let result = candidates.filter((c) => {
    if (q) {
      const hay = `${c.name} ${c.title} ${(c.skills || []).join(" ")}`;
      if (!textIncludes(hay, q)) return false;
    }

    if (location && !textIncludes(c.location, location)) return false;

    if (minExp != null && c.yearsExp < minExp) return false;
    if (maxExp != null && c.yearsExp > maxExp) return false;

    if (skills.length && !hasAny(c.skills, skills)) return false;

    if (availability && c.availability !== availability) return false;

    if (languages.length && !hasAny(c.languages, languages)) return false;

    return true;
  })

  if (sortBy === "exp") {
    result = [...result].sort((a, b) => b.yearsExp - a.yearsExp);
  }

  if (sortBy === "avb") {
    const order = { "immediate": 0, "1-3 months": 1, "3+ months": 2 };
    result.sort((a, b) => order[a.availability] - order[b.availability]);
  }

  return result;
}
