import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "TechCorp Solutions",
      location: "Colombo, Sri Lanka",
      duration: "June 2023 - December 2023",
      type: "Internship",
      responsibilities: [
        "Cleaned and analyzed large datasets containing over 100,000 customer records using Python and SQL",
        "Designed and developed interactive Power BI dashboards to visualize key performance indicators (KPIs) for management team",
        "Automated monthly Excel reports, reducing manual processing time by 75% and improving data accuracy",
        "Used SQL to query and manage relational databases, optimizing queries for better performance",
        "Collaborated with cross-functional teams including marketing, sales, and operations to gather requirements and deliver actionable insights",
        "Conducted exploratory data analysis (EDA) to identify trends and patterns in customer behavior data"
      ],
      achievements: [
        "Identified data inconsistencies that led to $25K in cost savings",
        "Improved reporting efficiency by 75% through automation",
        "Received 'Outstanding Intern' recognition for exceptional performance"
      ]
    },
    {
      title: "Junior Data Analyst",
      company: "DataInsights Ltd",
      location: "Remote",
      duration: "January 2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Perform comprehensive data analysis on customer segmentation and market trends using advanced statistical methods",
        "Develop and maintain automated ETL pipelines for data processing and transformation",
        "Create compelling data visualizations and interactive dashboards using Power BI and Python libraries",
        "Conduct A/B testing analysis to measure the effectiveness of marketing campaigns and product features",
        "Collaborate with stakeholders to translate business requirements into analytical solutions",
        "Implement data quality checks and validation processes to ensure accuracy and reliability"
      ],
      achievements: [
        "Increased customer retention by 18% through predictive analytics models",
        "Reduced data processing time by 60% with optimized ETL pipelines",
        "Led data-driven decision making that resulted in 12% revenue increase"
      ]
    },
    {
      title: "Freelance Data Consultant",
      company: "Self-Employed",
      location: "Remote",
      duration: "March 2023 - Present",
      type: "Freelance",
      responsibilities: [
        "Provide data analysis and visualization services to small and medium businesses",
        "Develop custom analytics solutions tailored to specific business needs and objectives",
        "Create comprehensive reports and presentations for C-level executives and stakeholders",
        "Implement data collection and tracking systems for improved business intelligence",
        "Conduct training sessions on data literacy and analytics tools for client teams",
        "Perform market research and competitive analysis using various data sources"
      ],
      achievements: [
        "Successfully completed 15+ projects with 100% client satisfaction rate",
        "Helped clients achieve average 25% improvement in operational efficiency",
        "Built long-term partnerships with 8 recurring clients"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Building expertise through hands-on experience in data analysis and business intelligence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-secondary-100">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-primary-600" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Full-time' ? 'bg-green-100 text-green-700' :
                          exp.type === 'Internship' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-secondary-900 mb-1">
                        {exp.title}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-primary-600 mb-2">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-secondary-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-secondary-800 mb-3 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-primary-600" />
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2 text-sm text-secondary-600">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2">
                            <span className="text-primary-600 mt-1 text-xs">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-secondary-800 mb-3 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-primary-600" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2 text-sm">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1 text-xs">✓</span>
                            <span className="text-secondary-700 font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            Ready to Bring Data-Driven Solutions to Your Team?
          </h3>
          <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
            I'm passionate about turning data into actionable insights that drive business growth. 
            Let's discuss how I can contribute to your organization's success.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
