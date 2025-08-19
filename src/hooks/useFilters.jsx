import {useState} from 'react'

export default function useFilters() {
  const [filters, setFilters] = useState({
    q: "",
    location: "",
    minExp: null,
    maxExp: null,
    skills: [],
    availability: "",
    languages: [],
    sortBy: "exp"
  })

  function setFilter(patch) {
    setFilters(prev => ({ ...prev, ...patch }));
  }

  function clear() {
    setFilters({
      q: "",
      location: "",
      minExp: null,
      maxExp: null,
      skills: [],
      availability: "",
      languages: [],
      sortBy: "exp"
    });
  }

  return { ...filters, setFilter, clear }
}
