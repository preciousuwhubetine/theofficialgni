import { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"

import Homepage from "../application/views/Homepage/Homepage.jsx"
import Header from "../application/components/Header/Header.jsx"
import Footer from "../application/components/Footer/Footer.jsx"

export default function Config () {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  )
}
