import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Research from './components/Research'
import Clubs from './components/Clubs'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F2D] text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Research />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Clubs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
