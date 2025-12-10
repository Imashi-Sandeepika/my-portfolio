import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react'

const Education = () => {
  const [showPsychologyDocs, setShowPsychologyDocs] = useState(false)
  const [showCounselingDocs, setShowCounselingDocs] = useState(false)
  const [showHRMDocs, setShowHRMDocs] = useState(false)

  const education = [
    {
      degree: "Bachelor of Information and Communication Technology",
      institution: "University of Vavuniya",
      location: "Vavuniya, Sri Lanka",
      duration: "2023 - 2027",
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
    degree: "Diploma in Human Resource Management",
    institution: "IMBS Institute of Management & Business Studies",
    location: "Green Campus",
    duration: "2020 - 2021",
    gpa: "3.56",
    status: "PASS",
    description: "Successfully completed the endorsed Diploma programme of the Association of Business Executives in the United Kingdom in Management & Business Studies, with a focus on Human Resource Management, Human Resource Development, and Business Law.",
    relevantCourses: [
      "Management",
      "Human Resource Management",
      "Organization Behavior",
      "Business Communication",
      "Information Technology",
      "Human Resource Development",
      "Organization Behavior II",
      "Industrial Psychology",
      "Business Law",
      "Case Study",
      "Project Report / Management Internship"
    ],
    documents: [
      {
        label: "HRM Diploma",
        path: "/docs/PSCHOLOGY/HRM_Diploma.pdf",
      }
    ]
    }

    ,
    {
    degree: "Diploma in Psychology & Counselling",
    institution: "IMBS Institute of Management & Business Studies",
    location: "Green Campus",
    duration: "2020 - 2021",
    gpa: "4.00",
    status: "MERIT PASS",
    description: "Successfully completed the endorsed Diploma programme of the Association of Business Executives in the United Kingdom in Management & Business Studies, with a focus on General, Abnormal, Developmental, and Child Psychology, as well as Counselling Ethics and Skills.",
    relevantCourses: [
      "General Psychology",
      "Abnormal Psychology",
      "Developmental Psychology",
      "Child Psychology",
      "Health Psychology",
      "Counselling Psychology",
      "Counselling Ethics",
      "General Techniques in Counselling",
      "Counselling Skills",
      "Psychotherapeutic Techniques in Counselling"
  ],
    documents: [
      {
        label: "Counseling Diploma",
        path: "/docs/PSCHOLOGY/Counseling_Diploma.pdf",
      }
    ]
    }

    ,
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
      documents: [
        {
          label: "Final Thesis (C38874)",
          path: "/docs/PSCHOLOGY/Final-Thesis-C38874.pdf",
        },
        {
          label: "Thesis Presentation",
          path: "/docs/PSCHOLOGY/ThesisPresentation.pdf",
        },
        {
          label: "Degree Certificate",
          path: "/docs/PSCHOLOGY/Degree-Certificate.pdf",
        },
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
      url: "https://www.coursera.org/account/accomplishments/verify/DO6SVSJITAKX",
      verified: true
    },
    {
      title: " Programming for Everybody (Getting Started withPython)",
      issuer: "Univercity of Michigan",
      date: "January 2024",
      credentialId: "PL-300",
      description: "Professional certification demonstrating expertise in Power BI for data modeling, visualization, and analysis.",
      skills: ["Power BI", "DAX", "Power Query", "Data Modeling", "Business Intelligence"],
      url: "https://www.coursera.org/account/accomplishments/verify/GNACW4RYATUQ",
      verified: true
    },
    {
      title: "Python Data Structures",
      issuer: "Univercity of Michigan",
      date: "November 2024",
      credentialId: "SQL-DS-2023",
      description: "Advanced SQL course covering complex queries, database design, and data analysis techniques.",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Analysis"],
      url: "https://www.coursera.org/account/accomplishments/verify/BUM5IB3FL558",
      verified: true
    },
    {
      title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      issuer: "University of Michigan",
      date: "N/A",
      credentialId: "N/A",
      description: "Capstone project applying Python to retrieve, process, and visualize data end-to-end.",
      skills: ["Python", "Data Processing", "Visualization", "APIs"],
      url: "https://www.coursera.org/account/accomplishments/verify/YZ3CPB5R9FPI",
      verified: true
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM (International Business Machines Corporation)",
      date: "October 2025",
      credentialId: "PY-ML-2023",
      description: "Comprehensive course covering Python programming for data science, including pandas, numpy, matplotlib, and scikit-learn.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Machine Learning"],
      url: "https://www.coursera.org/account/accomplishments/verify/JDQSTVXSV695",
      verified: true
    },
    {
      title: "Introduction to Software Engineering",
      issuer: "Coursera",
      date: "November 29, 2025",
      credentialId: "Q00BZF6NNVX8",
      description: "Introduction to Software Engineering covering SDLC fundamentals, software architecture and design patterns, basic Python constructs, and roles/tools across front-end and back-end development.",
      skills: [
        "Software Engineering",
        "SDLC",
        "Python",
        "Software Design Patterns",
        "Front-End",
        "Back-End",
        "Application Deployment"
      ],
      url: "https://www.coursera.org/account/accomplishments/verify/Q00BZF6NNVX8",
      verified: true
    },
    {
      title: "Python Classes and Inheritance",
      issuer: "University of Michigan",
      date: "N/A",
      credentialId: "N/A",
      description: "Intermediate Python course covering classes, objects, inheritance, and core OOP concepts.",
      skills: ["Python", "OOP", "Classes", "Inheritance"],
      url: "https://www.coursera.org/account/accomplishments/verify/IB0MUDUW0GAT",
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
      year: "2023"
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
              className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-transparent hover:border-primary-500 hover:shadow-2xl transition-shadow transition-colors duration-300"
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

                  {edu.degree === 'Bachelor of Arts in Psychology' && edu.documents && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setShowPsychologyDocs(prev => !prev)}
                        className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold shadow hover:bg-primary-700 transition-colors"
                      >
                        {showPsychologyDocs ? 'Hide Documents' : 'View Documents'}
                      </button>

                      {showPsychologyDocs && (
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          {edu.documents.map((doc, docIndex) => (
                            <a
                              key={docIndex}
                              href={doc.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-secondary-50 rounded-xl border border-secondary-200 p-4 text-left hover:border-primary-500 hover:shadow-md transition-all"
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <BookOpen className="w-5 h-5 text-primary-600" />
                                </div>
                                <div>
                                  <h6 className="font-semibold text-secondary-900 text-sm mb-1">
                                    {doc.label}
                                  </h6>
                                  <p className="text-xs text-secondary-600">
                                    Click to open PDF in a new tab
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {edu.degree === 'Diploma in Psychology & Counselling' && edu.documents && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setShowCounselingDocs(prev => !prev)}
                        className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold shadow hover:bg-primary-700 transition-colors"
                      >
                        {showCounselingDocs ? 'Hide Documents' : 'View Documents'}
                      </button>

                      {showCounselingDocs && (
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          {edu.documents.map((doc, docIndex) => (
                            <a
                              key={docIndex}
                              href={new URL(doc.path, import.meta.env.BASE_URL).toString()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-secondary-50 rounded-xl border border-secondary-200 p-4 text-left hover:border-primary-500 hover:shadow-md transition-all"
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <BookOpen className="w-5 h-5 text-primary-600" />
                                </div>
                                <div>
                                  <h6 className="font-semibold text-secondary-900 text-sm mb-1">
                                    {doc.label}
                                  </h6>
                                  <p className="text-xs text-secondary-600">
                                    Click to open PDF in a new tab
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {edu.degree === 'Diploma in Human Resource Management' && edu.documents && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setShowHRMDocs(prev => !prev)}
                        className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold shadow hover:bg-primary-700 transition-colors"
                      >
                        {showHRMDocs ? 'Hide Documents' : 'View Documents'}
                      </button>

                      {showHRMDocs && (
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          {edu.documents.map((doc, docIndex) => (
                            <a
                              key={docIndex}
                              href={new URL(doc.path, import.meta.env.BASE_URL).toString()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-secondary-50 rounded-xl border border-secondary-200 p-4 text-left hover:border-primary-500 hover:shadow-md transition-all"
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <BookOpen className="w-5 h-5 text-primary-600" />
                                </div>
                                <div>
                                  <h6 className="font-semibold text-secondary-900 text-sm mb-1">
                                    {doc.label}
                                  </h6>
                                  <p className="text-xs text-secondary-600">
                                    Click to open PDF in a new tab
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
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
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-primary-600 hover:text-primary-700 hover:underline mb-4"
                  >
                    View Certificate
                  </a>
                )}

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