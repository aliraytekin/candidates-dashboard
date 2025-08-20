import { useEffect, useState } from "react"
import { getCandidates } from "../services/dataService";
import CandidatesList from "../components/Candidates/CandidatesList";
import FiltersPanel from "../components/Filters/FiltersPanel"
import useFilters from "../hooks/useFilters"
import FilterAndSort from "../utils/FilterAndSort";

function DashboardPage() {
  const [candidates, setCandidates] = useState();
  const [loading, setLoading] = useState(false)
  const filters = useFilters()

  const params = {
    q: filters.q || undefined,
    location: filters.location || undefined,
    min_exp: filters.minExp ?? undefined,
    max_exp: filters.maxExp ?? undefined,
    skills: filters.skills?.join(",") || undefined,
    availability: filters.availability || undefined,
    languages: filters.languages?.join(",") || undefined,
    sort: filters.sortBy || undefined,
  }

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    getCandidates(params)
      .then(setCandidates)
      .finally(() => setLoading(false));

    return() => controller.abort();
  }, [JSON.stringify(params)]);

  const filtered = FilterAndSort(candidates, filters);

  return (
    <div style={{
      display: "flex"
    }}>
      <FiltersPanel filters={filters} />
      <CandidatesList candidates={filtered} />
    </div>
  )
}

export default DashboardPage
