import CandidateCard from './CandidatesCard'
import EmptyState from './EmptyState'

function CandidatesList({ candidates }) {
  if (!candidates || candidates.length === 0) {
    return <EmptyState />
  }

  return (
    <div style={{
      flex: 1,
      grid: "column",
      gap: "1rem",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))"
    }}>
      {candidates.map(candidate => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}

export default CandidatesList
