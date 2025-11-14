import { motion } from 'framer-motion'
import { User, Target, Lightbulb, TrendingUp } from 'lucide-react'

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-2xl">
                <User size={120} className="text-primary-600" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full opacity-30"></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary-900">
                Data Analyst & Business Intelligence Specialist
              </h3>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                I am a passionate Data Analyst with a strong foundation in statistical analysis, 
                data visualization, and business intelligence. My expertise lies in uncovering 
                hidden patterns within complex datasets and translating them into clear, 
                actionable insights that drive business growth.
              </p>

              <p className="text-lg text-secondary-600 leading-relaxed">
                With extensive experience in data cleaning, exploratory data analysis (EDA), 
                and dashboard creation, I specialize in using tools like Python, SQL, Power BI, 
                and Excel to deliver comprehensive analytical solutions. My approach combines 
                technical proficiency with strong business acumen to ensure that every analysis 
                directly contributes to strategic decision-making.
              </p>

              <p className="text-lg text-secondary-600 leading-relaxed">
                I am committed to continuous learning and staying at the forefront of analytics 
                and visualization technologies. My goal is to help organizations harness the 
                power of their data to achieve measurable business outcomes and competitive advantages.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-6 mt-12">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-secondary-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
