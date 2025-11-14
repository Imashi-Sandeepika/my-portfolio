import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Information and Communication Technology",
      institution: "University of Vavuniya",
      location: "Vavuniya, Sri Lanka",
      duration: "2023 - 2027",
      gpa: "3.8 / 4.0",
      status: "Ongoing",
      description:
        "Focused on core ICT principles including software engineering, database systems, networking, and web technologies. Specialized in the Data Science path with training in machine learning, data processing, visualization, and real-world problem solving within the ICT industry.",
      relevantCourses: [
        "Programming Fundamentals",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Web Application Development",
        "Machine Learning Fundamentals",
        "Data Visualization",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    {
      degree: "Bachelor of Arts in Psychology",
      institution: "IIC Univercity of Technology",
      location: "Cambodia",
      duration: "2022 - 2025",
      gpa: "3.50 / 4.0",
      status: "Second Upper Class",
      description:
        "Graduated degree in psychology with a focus on cognitive psychology, behavioral science, and mental health. Developed strong research, analytical, and interpersonal skills through coursework and practical projects.",
      relevantCourses: [
        "Counselling Psychology",
        "Clinical Psychology",
        "Cognitive Psychology",
        "Behavioral Science",
        "Research Methods in Psychology",
        "Social Psychology",
        "Abnormal Psychology",
        "Psychological Statistics",
        "Psychological Research Methods",
        "Counselling therapy",
      ],
    },
  ]

  const certifications = [
    {
      title: "Python Basics",
      issuer: "Univercity of Michigan",
      date: "March 2024",
      credentialId: "GDA-2024-001",
      description: "Comprehensive program covering data analysis process, data cleaning, visualization, and analysis using spreadsheets, SQL, R, and Tableau.",
      skills: ["Data Analysis", "Data Visualization", "SQL", "R Programming", "Tableau", "Data Cleaning"],
      verified: true
    },
    {
      title: " Programming for Everybody (Getting Started withPython)",
      issuer: "Univercity of Michigan",
      date: "January 2024",
      credentialId: "PL-300",
      description: "Professional certification demonstrating expertise in Power BI for data modeling, visualization, and analysis.",
      skills: ["Power BI", "DAX", "Power Query", "Data Modeling", "Business Intelligence"],
      verified: true
    },
    {
      title: "Python Data Structures",
      issuer: "Univercity of Michigan",
      date: "November 2024",
      credentialId: "SQL-DS-2023",
      description: "Advanced SQL course covering complex queries, database design, and data analysis techniques.",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Analysis"],
      verified: true
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM (International Business Machines Corporation)",
      date: "October 2025",
      credentialId: "PY-ML-2023",
      description: "Comprehensive course covering Python programming for data science, including pandas, numpy, matplotlib, and scikit-learn.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Machine Learning"],
      verified: true
    }
  ]

  const achievements = [
    {
      title: "Professional Counseling Service Contribution",
      description: "Provided voluntary psychological counseling and guidance to individuals, supporting emotional well-being and personal development.",
      year: "Ongoing"
    },
    {
      title: "SLNIPC Professional Membership",
      description: "Recognized as a member of the Sri Lanka National Institute of Professional Counselors for maintaining high ethical and professional standards.",
      year: "2024"
    },
    {
      title: "ICT Academic Excellence",
      description: "Demonstrated strong academic performance in ICT and Data Science coursework including programming, data analysis, and web technologies.",
      year: "2023 - Present"
    },
    {
      title: "Research Recognition",
      description: "Conducting an interdisciplinary research study exploring psychology-driven UX design and mental well-being within the ICT industry.",
      year: "2024 - 2025"
    },
    {
      title: "Active University Club Member",
      description: "Engaged in community service and leadership activities through LEO Club, ZERO PLASTIC Club, IEEE, and Buddhist Society.",
      year: "2023 - Present"
    },
    {
      title: "Coursera Certified Learner",
      description: "Completed multiple ICT and Data Science courses from IBM, Google, Stanford, and other international institutions.",
      year: "2023 - Present"
    }
  ]

  return (
    <section id="education" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Continuous learning and professional development in data science and analytics
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-secondary-900 mb-8 flex items-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-primary-600" />
            Academic Background
          </motion.h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-6"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-secondary-900 mb-2">
                      {edu.degree}
                    </h4>
                    <h5 className="text-xl font-semibold text-primary-600 mb-2">
                      {edu.institution}
                    </h5>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-secondary-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </span>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div>
                  <h6 className="font-semibold text-secondary-800 mb-3">Relevant Coursework</h6>
                  <div className="space-y-2">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span className="text-sm text-secondary-600">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-secondary-900 mb-8 flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-primary-600" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-secondary-900 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-secondary-600 mb-2">
                      Issued: {cert.date}
                    </p>
                    <p className="text-xs text-secondary-500">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      <Star className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>

                <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h5 className="font-semibold text-secondary-800 mb-2 text-sm">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-secondary-900 mb-8 flex items-center gap-3"
          >
            <Star className="w-8 h-8 text-primary-600" />
            Academic Achievements
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-secondary-600 text-sm mb-2">
                  {achievement.description}
                </p>
                <span className="text-primary-600 font-semibold text-sm">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
