import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Projects from "../pages/Projects"
import DPRForm from "../pages/DPRForm"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dpr/:id" element={<DPRForm />} />
      </Routes>
    </BrowserRouter>
  )
}