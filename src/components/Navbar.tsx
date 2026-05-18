import React from 'react'
import { motion } from 'framer-motion'

interface NavbarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['About', 'Resume', 'Projects', 'Certifications', 'Contact']

  return (
    <div className="sticky top-6 z-50 flex justify-center lg:justify-end w-full px-4 lg:px-8 pt-6">
      <nav className="bg-[#282829]/70 backdrop-blur-2xl rounded-full border border-gray-600/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-1.5">
        <ul className="flex items-center gap-1">
          {tabs.map((tab) => (
            <li key={tab} className="relative">
              <button
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 text-[14px] font-bold tracking-wide transition-colors duration-300 rounded-full z-10 ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-400 rounded-full -z-10 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{tab}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar