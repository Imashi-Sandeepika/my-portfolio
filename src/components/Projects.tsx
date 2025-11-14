import { motion } from 'framer-motion'
import { ExternalLink, Github, Image, Sparkles } from 'lucide-react'

import screenshot1 from '../assets/projects/sentiment-1.png'
import screenshot2 from '../assets/projects/sentiment-2.png'
import screenshot3 from '../assets/projects/sentiment-3.png'

const Projects = () => {
  const screenshots = [screenshot1, screenshot2, screenshot3]

  return (
    <section id="projects" className="py-20 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Project
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A full-stack sentiment analysis web application that connects my Data Science, ICT, and
            Psychology background to real user experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Main project card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 border border-slate-700/60 rounded-2xl shadow-2xl p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/70 text-xs font-semibold text-indigo-200 mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Sentiment Analysis Web Application</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Understanding User Emotion Through Data
            </h3>

            <p className="text-slate-200 mb-4">
              A web application that analyzes text input (such as reviews or feedback) and classifies it
              as positive, negative, or neutral using Natural Language Processing techniques. The
              interface is designed with a counseling-aware perspective, presenting feedback in a way
              that is clear, non-judgmental, and supportive for users.
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-indigo-200 mb-2">Problem Statement</h4>
              <p className="text-sm text-slate-300">
                Many organizations collect large amounts of user feedback but struggle to understand the
                emotional tone behind it. This project focuses on extracting sentiment in a way that
                supports better user experience decisions and respects the psychological impact of how
                results are communicated.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-indigo-200 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'NLP', 'Machine Learning', 'Flask / Backend', 'HTML / CSS / JS', 'Data Visualization'].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded-full bg-indigo-900/70 text-xs font-medium text-indigo-100"
                    >
                      {tool}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-indigo-200 mb-2">Key Outcomes</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Real-time classification of user text into sentiment categories.</li>
                <li>• Simple, psychologically-aware UI that avoids harsh wording.</li>
                <li>• Clear visual summaries to support data-driven UX decisions.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/Imashi-Sandeepika/Sentiment-Analysis-Project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code on GitHub
              </a>
              <a
                href="https://sentiment-analysis-project-7a2c.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-indigo-500 text-indigo-200 hover:bg-indigo-500 hover:text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </motion.div>

          {/* Screenshot gallery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 text-xs text-slate-200">
              <Image className="w-4 h-4" />
              <span>Application Screenshots</span>
            </div>

            <p className="text-sm text-slate-300 max-w-md">
              These screens illustrate how users interact with the system, enter their text, and receive
              sentiment feedback through a clean and focused UI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {screenshots.map((src, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/80 group"
                >
                  <img src={src} alt={`Sentiment analysis screenshot ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-slate-100 transition-opacity">
                    Screenshot {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-300 mb-6">
            Interested in seeing more projects or discussing how sentiment analysis can support your
            product or research?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
