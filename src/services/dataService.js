import axios from "axios"

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000",
  timeout: 8000,
})

export async function getCandidates(params = {}) {
  const { data } = await api.get("/api/v1/candidates", { params });
  return data.candidates;
}
