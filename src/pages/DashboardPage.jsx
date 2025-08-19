import { useEffect, useState } from "react"
import { getCandidates } from "../services/dataService";
import CandidatesList from "../components/Candidates/CandidatesList";

function DashboardPage() {
  console.log(getCandidates)
  const [candidates, setCandidates] = useState()

  const candidatesList = useEffect(() => {
    getCandidates().then(setCandidates);
  }, []);



  return (
    <div style={{
      display: "flex"
    }}>
      <CandidatesList candidates={candidatesList} />
    </div>
  )
}

export default DashboardPage
