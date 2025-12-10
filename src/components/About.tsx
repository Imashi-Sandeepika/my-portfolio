import { motion } from 'framer-motion'
import { Target, Lightbulb, TrendingUp, Heart, ShieldCheck, LifeBuoy, Users, Database } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Problem Solver",
      description: "Passionate about analyzing complex datasets to solve real-world business challenges"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-600" />,
      title: "Insight Generator",
      description: "Expert in transforming raw data into actionable insights that drive strategic decisions"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: "Continuous Learner",
      description: "Committed to staying current with the latest analytics tools and visualization techniques"
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="w-full">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-10">
              {/* Data Analysis / Data Science (Primary) */}
              <div className="md:col-span-2 relative p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-200 shadow-lg">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200/40 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-10 w-32 h-32 bg-primary-100/50 rotate-12 rounded-xl blur-xl" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                  <Target className="w-4 h-4" />
                  <span>Data Analysis / Data Science</span>
                </div>

                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Data Analyst & Business Intelligence Specialist</h3>
                <p className="text-secondary-600 mb-4">
                  Passionate about uncovering patterns and translating data into clear, actionable insights that drive business growth.
                </p>

                {/* Intro highlights */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 backdrop-blur border border-primary-100 shadow-sm"
                    >
                      <span className="p-1.5 rounded-md bg-primary-50">{highlight.icon}</span>
                      <span className="text-sm font-medium text-secondary-800">{highlight.title}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center gap-2 text-secondary-700"><Lightbulb className="w-4 h-4 text-primary-600" /> Storytelling visuals and dashboards</div>
                  <div className="flex items-center gap-2 text-secondary-700"><TrendingUp className="w-4 h-4 text-primary-600" /> EDA and metrics that inform decisions</div>
                  <div className="flex items-center gap-2 text-secondary-700"><Database className="w-4 h-4 text-primary-600" /> Python, SQL, Power BI, Excel</div>
                </div>
              </div>

              {/* Professional Counselor (Secondary) */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-200 shadow-lg">
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-sky-200/40 rounded-full blur-xl" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-4">
                  <Heart className="w-4 h-4" />
                  <span>Professional Counselor</span>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Client-Centered, Ethical Practice</h3>
                <div className="space-y-2 text-secondary-700">
                  <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-sky-600" /> Empathy: compassionate listening and emotional attunement</div>
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-sky-600" /> Client-Centered: collaborative goals and strengths-based support</div>
                  <div className="flex items-center gap-2"><LifeBuoy className="w-4 h-4 text-sky-600" /> Crisis Intervention: de-escalation, safety planning, referrals</div>
                  <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-600" /> Ethical Practice: confidentiality, boundaries, informed consent</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About