import React, { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Engineering from './pages/Engineering'
import Leadership from './pages/Leadership'
import SmallBusiness from './pages/SmallBusiness'
import AiIntegration from './pages/AiIntegration'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const hideFooterCTA = location.pathname === '/contact'
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow sticky top-0 z-50 relative">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Name</h1>

          {/* desktop nav */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/engineering" className="hover:underline">Engineering</Link>
            <Link to="/leadership" className="hover:underline">Leadership</Link>
            <Link to="/small-business" className="hover:underline">For Small Businesses</Link>
            <Link to="/ai-integration" className="hover:underline">AI Integration</Link>
            <Link to="/about" className="hover:underline">About Me</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>

          {/* mobile toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded hover:bg-slate-100 focus:outline-none"
          >
            {/* simple hamburger icon */}
            <span className="sr-only">Menu</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-slate-800 transform transition ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-slate-800 transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-slate-800 transform transition ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* mobile menu (drops down) */}
        <div className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="container mx-auto px-6 py-4 space-y-2 flex flex-col">
            <Link to="/" onClick={() => setMenuOpen(false)} className="py-2 hover:underline">Home</Link>
            <Link to="/engineering" onClick={() => setMenuOpen(false)} className="py-2 hover:underline">Engineering</Link>
            <Link to="/leadership" onClick={() => setMenuOpen(false)} className="py-2 hover:underline">Leadership</Link>
            <Link to="/small-business" onClick={() => setMenuOpen(false)} className="py-2 hover:underline">For Small Businesses</Link>
            <Link to="/ai-integration" onClick={() => setMenuOpen(false)} className="py-2 hover:underline">AI Integration</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="py-2 hover:underline">About Me</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="py-2 hover:underline">Contact</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto pt-6">
        {/* ScrollToTop is rendered here, inside the router's context. 
        It will listen for route changes and automatically scroll the page up.
      */}
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/small-business" element={<SmallBusiness />} />
          <Route path="/ai-integration" element={<AiIntegration />} />
        </Routes>
      </main>

      <footer className="container mx-auto">
        {!hideFooterCTA && (
          <div className={`flex justify-center border-double border-6 border-violet-500 bg-white rounded-3xl shadow-2xl`}>
            <div className={`flex w-full pt-4`}>
              <div className="w-full md:px-28 mx-auto">
                <div className={`w-full  mx-auto p-3 text-hero-primary`}>
                    <p className="text-3xl text-center font-semibold mb-2 heading-pop text-glow-light">
                      Ready to discuss how we can work together?
                    </p>
                    <p className="text-3xl text-center font-semibold mb-2 heading-pop text-glow-light">
                      I'd love to hear from you!
                    </p>
                </div>
                <div className='flex items-center justify-center pb-7'>
                  <Link
                    aria-label="Go to Contact page"
                    to="/contact"
                    className="button-hero-primary"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
          
          
          <div className='text-sm text-slate-600 text-center p-4'>© {new Date().getFullYear()} Your Name</div>
      </footer>
    </div>
  )
}
