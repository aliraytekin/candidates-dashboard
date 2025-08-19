import { Card, CardContent, Typography, Chip, Grid } from "@mui/material"

function CandidatesCard({ candidate }) {
  return (
    <Card sx={{
      boxShadow: 2,
      borderRadius: 3,
      p: 2,
      my: 3,
      mx: 3,
      transition: "0.3s",
      "&.hover": {
        boxShadow: 6,
        transform: "translateY(-4px)",
      },
    }}>
      <CardContent>
        <Typography variant="h6" color="text.primary">{candidate.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{candidate.title}</Typography>
        <Typography variant="body2">{candidate.location}</Typography>
        <Typography variant="body2">{candidate.yearsExp} years experience</Typography>

        <div style={{marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
          {candidate.skills?.map((skill) => (
            <Chip
            key={skill}
            label={skill}
            size="small"
            color="primary"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CandidatesCard
