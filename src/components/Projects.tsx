import { motion } from 'framer-motion'
import { ExternalLink, Github, BarChart3, Users, TrendingUp, Database, PieChart, Activity } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Comprehensive Power BI dashboard analyzing sales trends, regional performance, and customer behavior patterns. Implemented automated data refresh and interactive visualizations that helped identify a 15% revenue opportunity in underperforming regions.",
      problemStatement: "Sales team lacked visibility into regional performance and customer trends, leading to missed opportunities and inefficient resource allocation.",
      tools: ["Power BI", "SQL Server", "Excel", "DAX"],
      keyInsights: [
        "Identified 15% revenue opportunity in underperforming regions",
        "Discovered seasonal patterns affecting 3 key product categories",
        "Optimized sales territory allocation based on customer density analysis"
      ],
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
      image: "/api/placeholder/400/250"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Applied K-Means clustering algorithm to segment customers based on purchasing behavior, demographics, and engagement metrics. Created targeted marketing strategies that increased customer retention by 22% and improved campaign ROI.",
      problemStatement: "Marketing campaigns were generic and not yielding optimal results due to lack of customer understanding and segmentation.",
      tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      keyInsights: [
        "Identified 5 distinct customer segments with unique behaviors",
        "Increased customer retention by 22% through targeted campaigns",
        "Improved marketing ROI by 35% with personalized messaging"
      ],
      icon: <Users className="w-8 h-8 text-primary-600" />,
      image: "/api/placeholder/400/250"
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "Developed a Python-based sentiment analysis system to monitor brand perception across social media platforms. Processed over 50,000 mentions monthly and created real-time sentiment tracking dashboard for marketing team.",
      problemStatement: "Company needed to understand public sentiment about their brand and products to make informed marketing and product decisions.",
      tools: ["Python", "NLTK", "TextBlob", "Twitter API", "Pandas", "Plotly"],
      keyInsights: [
        "Processed 50,000+ social media mentions monthly",
        "Identified key sentiment drivers affecting brand perception",
        "Enabled proactive crisis management with real-time alerts"
      ],
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      image: "/api/placeholder/400/250"
    },
    {
      title: "HR Analytics Dashboard",
      description: "Built comprehensive HR analytics solution tracking employee performance, retention rates, and recruitment metrics. Implemented predictive models to identify flight risk employees and optimize hiring processes, reducing turnover by 18%.",
      problemStatement: "HR department struggled with high employee turnover and lacked data-driven insights for talent management and recruitment optimization.",
      tools: ["Power BI", "Python", "SQL", "Excel", "Machine Learning"],
      keyInsights: [
        "Reduced employee turnover by 18% through predictive analytics",
        "Optimized recruitment process, reducing time-to-hire by 25%",
        "Identified key factors influencing employee satisfaction and retention"
      ],
      icon: <Activity className="w-8 h-8 text-primary-600" />,
      image: "/api/placeholder/400/250"
    },
    {
      title: "Stock Market Trend Analysis",
      description: "Comprehensive analysis of stock market trends using historical data from multiple exchanges. Developed predictive models and visualization dashboards to identify investment opportunities and risk patterns across different sectors.",
      problemStatement: "Investment team needed data-driven insights to identify market trends and make informed investment decisions across various sectors.",
      tools: ["Python", "Pandas", "NumPy", "Yahoo Finance API", "Plotly", "Jupyter"],
      keyInsights: [
        "Analyzed 5+ years of historical data across 500+ stocks",
        "Identified seasonal patterns in technology and retail sectors",
        "Created risk assessment framework for portfolio optimization"
      ],
      icon: <PieChart className="w-8 h-8 text-primary-600" />,
      image: "/api/placeholder/400/250"
    },
    {
      title: "E-commerce Data Cleaning & EDA",
      description: "Comprehensive data cleaning and exploratory data analysis project on messy e-commerce dataset with 100,000+ records. Identified data quality issues, performed extensive cleaning, and uncovered key business insights through statistical analysis.",
      problemStatement: "E-commerce platform had inconsistent and dirty data affecting business intelligence and decision-making processes.",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      keyInsights: [
        "Cleaned and standardized 100,000+ product records",
        "Identified $50K in revenue loss due to data inconsistencies",
        "Established data quality framework for ongoing monitoring"
      ],
      icon: <Database className="w-8 h-8 text-primary-600" />,
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Real-world data analysis projects showcasing problem-solving skills and business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
                <div className="relative z-10 p-8">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                      <Github size={16} className="text-secondary-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                      <ExternalLink size={16} className="text-secondary-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Problem Statement */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary-800 mb-2">Problem Statement:</h4>
                  <p className="text-sm text-secondary-600 italic">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Tools Used */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary-800 mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Insights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-secondary-800 mb-2">Key Results:</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    {project.keyInsights.map((insight, insightIndex) => (
                      <li key={insightIndex} className="flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary-600 mb-6">
            Interested in seeing more of my work or discussing a potential collaboration?
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
