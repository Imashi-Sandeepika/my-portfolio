import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ChevronDown, ChevronUp, Brain, Globe2 } from 'lucide-react'

const Research = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="research" className="py-20 bg-[#040720] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Degree Research</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4" />
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Exploring how psychology and professional counseling principles can enhance user experience
            and mental well-being within ICT systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900/80 to-indigo-900/60 border border-indigo-700/40 rounded-2xl shadow-2xl p-8 md:p-10 backdrop-blur"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-900/60 rounded-full text-sm text-indigo-200">
                <BookOpen className="w-4 h-4" />
                <span>Undergraduate Research – ICT & Psychology</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                Exploring the Impact of Human Psychology and Counseling in Enhancing User Experience and
                Mental Well-being (Within the ICT Industry through Web Technology)
              </h3>

              <p className="text-slate-200 leading-relaxed">
                This research bridges my background in ICT, Data Science, and Professional Counseling to
                understand how human psychology can be intentionally embedded into web-based systems. The
                focus is on designing interfaces and interactions that are not only efficient and usable,
                but also emotionally supportive and mentally healthy for users.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-900/70 border border-indigo-700/40 rounded-xl p-4">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-indigo-200 mb-2">
                    <Brain className="w-4 h-4" />
                    Psychological Insights
                  </h4>
                  <p className="text-sm text-slate-300">
                    Applies counseling and cognitive principles to reduce stress, confusion, and
                    cognitive overload in digital experiences.
                  </p>
                </div>

                <div className="bg-slate-900/70 border border-indigo-700/40 rounded-xl p-4">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-indigo-200 mb-2">
                    <Globe2 className="w-4 h-4" />
                    Web Technology
                  </h4>
                  <p className="text-sm text-slate-300">
                    Studies real-world ICT and web systems to understand how design decisions affect user
                    trust, engagement, and well-being.
                  </p>
                </div>

                <div className="bg-slate-900/70 border border-indigo-700/40 rounded-xl p-4">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-indigo-200 mb-2">
                    <Brain className="w-4 h-4" />
                    Data-Driven UX
                  </h4>
                  <p className="text-sm text-slate-300">
                    Combines qualitative insights with data analysis to evaluate the emotional and
                    behavioral impact of user interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-colors"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide detailed summary
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Read more about this research
              </>
            )}
          </button>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 border-t border-indigo-700/40 pt-6 text-slate-200 space-y-3 text-sm md:text-base"
            >
              <p>
                The study investigates how concepts such as empathy, active listening, therapeutic
                communication, and emotional validation can influence the way we design interfaces,
                notifications, and feedback in web systems.
              </p>
              <p>
                By combining counseling theory with user experience design and data-driven evaluation,
                the research aims to propose practical guidelines for ICT products that support mental
                well-being rather than unintentionally harming it.
              </p>
              <p>
                This aligns directly with my interdisciplinary profile: integrating ICT, Data Science,
                Psychology, and Professional Counseling to build technology that understands people, not
                just data.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Research
