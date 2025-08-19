import { Typography } from "@mui/material"

function EmptyState() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h6">No candidates found!</Typography>
    </div>
  )
}

export default EmptyState
