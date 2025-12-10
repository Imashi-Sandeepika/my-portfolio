import { motion } from 'framer-motion'
import { Download, Eye, BarChart3, TrendingUp, Database, PieChart } from 'lucide-react'
import profileImg from '../assets/MyOff.jpg'

const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert('Resume download functionality to be implemented')
  }

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-[#0A0F2D] via-[#0B1337] to-[#0A0F2D] text-white relative overflow-hidden">
      {/* Background Analytics Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-10 text-primary-300"
        >
          <BarChart3 size={80} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-40 right-20 text-primary-300"
        >
          <TrendingUp size={60} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-40 left-20 text-primary-300"
        >
          <Database size={70} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-20 right-10 text-primary-300"
        >
          <PieChart size={90} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Imashi Sandeepika
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-sky-400 mb-6"
            >
              Data Analyst
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Turning data into actionable insights with clean visuals, automation, and sound analysis.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors shadow"
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={handleViewProjects}
                className="flex items-center gap-2 border border-sky-500 text-sky-200 hover:bg-sky-500 hover:text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                <Eye size={20} />
                View Projects
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
              className="relative"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-85 h-85 md:w-85 md:h-85 rounded-full object-cover ring-4 ring-sky-500/40 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full ring-8 ring-sky-400/20 blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero