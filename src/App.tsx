import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('About')

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return <About />
      case 'Resume':
        return <Resume />
      case 'Projects':
        return <Projects />
      case 'Certifications':
        return <Certifications />
      case 'Contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div className="min-h-screen bg-[#111111] text-gray-300 font-sans p-4 md:p-10 flex justify-center items-start">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-6 relative">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 bg-[#1e1e1f] rounded-3xl relative w-full border border-gray-800 shadow-2xl min-h-[800px]">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="p-8 pt-8 lg:mt-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
