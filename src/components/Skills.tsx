import { motion } from 'framer-motion'
import { Code, Database, BarChart3, FileSpreadsheet, Brain, Users, Clock, MessageSquare } from 'lucide-react'

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'SQL', level: 95, icon: <Database className="w-6 h-6" /> },
    { name: 'Power BI', level: 85, icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Excel', level: 90, icon: <FileSpreadsheet className="w-6 h-6" /> },
    { name: 'Pandas', level: 85, icon: <Code className="w-6 h-6" /> },
    { name: 'NumPy', level: 80, icon: <Code className="w-6 h-6" /> },
    { name: 'Matplotlib/Seaborn', level: 85, icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Data Cleaning', level: 95, icon: <Database className="w-6 h-6" /> },
    { name: 'EDA', level: 90, icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Data Visualization', level: 90, icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Machine Learning Basics', level: 75, icon: <Brain className="w-6 h-6" /> },
  ]

  const softSkills = [
    { name: 'Problem Solving', icon: <Brain className="w-8 h-8 text-primary-600" /> },
    { name: 'Attention to Detail', icon: <FileSpreadsheet className="w-8 h-8 text-primary-600" /> },
    { name: 'Critical Thinking', icon: <Brain className="w-8 h-8 text-primary-600" /> },
    { name: 'Communication', icon: <MessageSquare className="w-8 h-8 text-primary-600" /> },
    { name: 'Time Management', icon: <Clock className="w-8 h-8 text-primary-600" /> },
    { name: 'Team Collaboration', icon: <Users className="w-8 h-8 text-primary-600" /> },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-primary-600" />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary-600">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-secondary-900">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-primary-600">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary-600" />
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-secondary-100 hover:border-primary-200"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-primary-50 rounded-full">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-secondary-900">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg"
            >
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Core Competencies
              </h4>
              <ul className="text-secondary-700 space-y-2">
                <li>• Statistical Analysis & Hypothesis Testing</li>
                <li>• Business Intelligence & Reporting</li>
                <li>• Data Pipeline Development</li>
                <li>• Dashboard Design & Implementation</li>
                <li>• Cross-functional Team Collaboration</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
