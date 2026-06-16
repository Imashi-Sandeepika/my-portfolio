import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('About')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    const element = document.getElementById(tab)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const sections = ['About', 'Resume', 'Projects', 'Certifications', 'Contact']
    
    const handleScroll = () => {
      // Check if user has scrolled to the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      if (isAtBottom) {
        setActiveTab('Contact')
        return
      }
    }
    
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#111111] text-gray-300 font-sans p-4 md:p-10 flex justify-center items-start">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-6 relative">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 bg-[#1e1e1f] rounded-3xl relative w-full border border-gray-800 shadow-2xl min-h-[800px]">
          <Navbar activeTab={activeTab} setActiveTab={handleTabClick} />
          <div className="p-8 pt-8 lg:mt-8 space-y-16 pb-16">
            <section id="About" className="scroll-mt-28">
              <About />
            </section>
            <div className="border-t border-gray-800/60 my-10"></div>
            <section id="Resume" className="scroll-mt-28">
              <Resume />
            </section>
            <div className="border-t border-gray-800/60 my-10"></div>
            <section id="Projects" className="scroll-mt-28">
              <Projects />
            </section>
            <div className="border-t border-gray-800/60 my-10"></div>
            <section id="Certifications" className="scroll-mt-28">
              <Certifications />
            </section>
            <div className="border-t border-gray-800/60 my-10"></div>
            <section id="Contact" className="scroll-mt-28">
              <Contact />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

