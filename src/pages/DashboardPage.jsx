import { useEffect, useState } from "react"
import { getCandidates } from "../services/dataService";
import CandidatesList from "../components/Candidates/CandidatesList";
import FiltersPanel from "../components/Filters/FiltersPanel"
import useFilters from "../hooks/useFilters"
import FilterAndSort from "../utils/FilterAndSort";

function DashboardPage() {
  const [candidates, setCandidates] = useState();
  const filters = useFilters()

  useEffect(() => {
    getCandidates().then(setCandidates);
  }, []);

  const filtered = FilterAndSort(candidates, filters);

  return (
    <div style={{
      display: "flex"
    }}>
      <FiltersPanel filters={filters} style={{ height: "100%" }} />
      <CandidatesList candidates={filtered} />
    </div>
  )
}

export default DashboardPage
