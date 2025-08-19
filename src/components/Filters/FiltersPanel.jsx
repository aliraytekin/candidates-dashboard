// src/components/Filters/FiltersPanel.jsx
import {
  Box,
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
  Typography
} from "@mui/material";
import { useMemo, useState } from "react";

export default function FiltersPanel({ filters, options = {} }) {
  const {
    q, location, minExp, maxExp, skills, availability, languages, sortBy,
    setFilter, clear
  } = filters;

  const {
    locationOptions = ["Brussels, Belgium","Antwerp, Belgium","Ghent, Belgium","Liège, Belgium","Luxembourg City, Luxembourg","Namur, Belgium"],
    skillOptions = ["AutoCAD","BIM","Revit","Project Management","SketchUp","Rhino","HVAC","Energy Modeling","ETABS","SAP2000","Navisworks","Clash Detection","GIS","Urban Design","Sustainability","Scheduling","Health & Safety","Budgeting","Steel Design","Concrete Design"],
    languageOptions = ["English","French","Dutch","German","Italian","Portuguese"],
    availabilityOptions = ["immediate","1-3 months","3+ months"]
  } = options;

  const [minExpLocal, setMinExpLocal] = useState(minExp ?? "");
  const [maxExpLocal, setMaxExpLocal] = useState(maxExp ?? "");

  useMemo(() => setMinExpLocal(minExp ?? ""), [minExp]);
  useMemo(() => setMaxExpLocal(maxExp ?? ""), [maxExp]);

  const commitExp = () => {
    const toNum = (v) => (v === "" || v === null ? null : Number(v));
    setFilter({ minExp: toNum(minExpLocal), maxExp: toNum(maxExpLocal) });
  };

  return (
    <Box
      component="aside"
      sx={{
        width: 320,
        p: 2,
        borderRight: (t) => `1px solid ${t.palette.divider}`,
        backgroundColor: "background.paper",
        position: { md: "sticky" },
        top: { md: 0.1 },
        height: { md: "calc(100dvh)" },
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>

      {/* Search */}
      <TextField
        label="Search (name, title, skills)"
        size="small"
        fullWidth
        value={q}
        onChange={(e) => setFilter({ q: e.target.value })}
        sx={{ mb: 2 }}
      />

      {/* Location */}
      <Autocomplete
        options={locationOptions}
        value={location || null}
        onChange={(_, val) => setFilter({ location: val || "" })}
        renderInput={(params) => (
          <TextField {...params} label="Location" size="small" />
        )}
        sx={{ mb: 2 }}
        freeSolo
      />

      {/* Experience */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          label="Min Exp"
          size="small"
          type="number"
          value={minExpLocal}
          onChange={(e) => setMinExpLocal(e.target.value)}
          onBlur={commitExp}
          onKeyDown={(e) => e.key === "Enter" && commitExp()}
          fullWidth
        />
        <TextField
          label="Max Exp"
          size="small"
          type="number"
          value={maxExpLocal}
          onChange={(e) => setMaxExpLocal(e.target.value)}
          onBlur={commitExp}
          onKeyDown={(e) => e.key === "Enter" && commitExp()}
          inputProps={{ min: 0 }}
          fullWidth
        />
      </Box>

      {/* Skills */}
      <Autocomplete
        multiple
        options={skillOptions}
        value={skills || []}
        onChange={(_, val) => setFilter({ skills: val })}
        renderInput={(params) => (
          <TextField {...params} label="Skills" size="small" />
        )}
        sx={{ mb: 2 }}
        freeSolo
      />

      {/* Languages */}
      <Autocomplete
        multiple
        options={languageOptions}
        value={languages || []}
        onChange={(_, val) => setFilter({ languages: val })}
        renderInput={(params) => (
          <TextField {...params} label="Languages" size="small" />
        )}
        sx={{ mb: 2 }}
        freeSolo
      />

      {/* Availability */}
      <FormControl size="small" fullWidth sx={{ mb: 2 }}>
        <InputLabel id="availability-label">Availability</InputLabel>
        <Select
          labelId="availability-label"
          label="Availability"
          value={availability || ""}
          onChange={(e) => setFilter({ availability: e.target.value })}
        >
          <MenuItem value=""><em>Any</em></MenuItem>
          {availabilityOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {/* Sort */}
      <FormControl size="small" fullWidth sx={{ mb: 2 }}>
        <InputLabel id="sortby-label">Sort by</InputLabel>
        <Select
          labelId="sortby-label"
          label="Sort by"
          value={sortBy || ""}
          onChange={(e) => setFilter({ sortBy: e.target.value })}
        >
          <MenuItem value=""><em>Default</em></MenuItem>
          <MenuItem value="exp">Experience (desc)</MenuItem>
          <MenuItem value="avb">Availability</MenuItem>
        </Select>
      </FormControl>

      <Button variant="outlined" color="secondary" onClick={clear} fullWidth>
        Clear filters
      </Button>
    </Box>
  );
}
