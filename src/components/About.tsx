import { motion } from 'framer-motion'
import { Terminal, Globe, Layers, Database, Brain, Sparkles, MessageSquare, BarChart, Users, Heart } from 'lucide-react'

const About = () => {
  const services = [
    {
      title: 'AI Model Training',
      description: 'Building and fine-tuning machine learning models to solve complex predictive and classification problems.',
      icon: (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Data Cleaning',
      description: 'Transforming raw data into clean, structured formats to ensure accuracy for analysis and modeling.',
      icon: (
        <motion.div
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Data Visualization',
      description: 'Creating compelling and interactive visual representations of data to uncover actionable insights.',
      icon: (
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <BarChart size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'AI Chat Section Creation',
      description: 'Developing intelligent conversational agents and chatbots to enhance user engagement and support.',
      icon: (
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageSquare size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Database Management',
      description: 'Efficient design, management, and optimization of databases to ensure data integrity and security.',
      icon: (
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Web Development',
      description: 'High-quality development of sites at the professional level, focusing on performance and responsive design.',
      icon: (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Globe size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Fullstack Development',
      description: 'End-to-end application development, seamlessly integrating front-end interfaces with secure back-end systems.',
      icon: (
        <motion.div
          animate={{ scale: [1, 1.05, 1], y: [0, -3, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Layers size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Software Development',
      description: 'Professional development of robust, scalable, and user-friendly software solutions tailored to meet specific client needs.',
      icon: (
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Counseling & Human Insight',
      description: 'Combining professional counseling skills with analytical thinking to understand human behavior, improve communication, and provide client-centered support.',
      icon: (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Users size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    },
    {
      title: 'Personal Development & Well-being Support',
      description: 'Supporting individuals in personal growth, emotional well-being, stress management, and confident decision-making through empathetic guidance.',
      icon: (
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={40} className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.div>
      )
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-6 relative pb-4 inline-block">
        About Me
        <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></span>
      </h2>
      
      <div className="text-gray-300 space-y-4 mb-10 leading-relaxed text-[15px]">
        <p>
          I am a passionate Data Analyst and Business Intelligence Specialist with a strong foundation in analyzing complex datasets to solve real-world business challenges. I am dedicated to uncovering patterns and translating data into clear, actionable insights that drive business growth. 
        </p>
        <p>
          With a dual background as a Professional Counselor, I bring a unique client-centered and empathetic approach to my professional work, ensuring that my technical expertise is matched with strong communication and collaborative skills.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#212123] rounded-2xl p-6 border border-gray-800 shadow-md flex gap-5 items-start hover:border-sky-400 transition-colors duration-300"
          >
            <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#282829] rounded-xl border border-gray-800">
              {service.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-[17px] font-bold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About