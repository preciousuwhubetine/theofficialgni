import { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"

import Header from "../application/components/Header/Header.jsx"
import Footer from "../application/components/Footer/Footer.jsx"
import Homepage from "../application/views/Homepage/Homepage.jsx"
import Blog from "../application/views/Blog/Blog.jsx"

export default function Config () {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  )
}
