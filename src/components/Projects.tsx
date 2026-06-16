import { Eye, Github, BookOpen, FileText } from 'lucide-react'
import counselingImg from '../assets/counseling.png'
import thesisPdf from '../assets/Research final PSY.pdf'
import transcriptPdf from '../assets/Acedemic Transcript PSY.pdf'
import diabetesImg from '../assets/Diabetes Prediction.png'
import rockVsMineImg from '../assets/maxresdefault.jpg'
import popupExtensionImg from '../assets/Screenshot 2026-06-14 124659.png'



const Projects = () => {
  const projects = [
    {
      title: "Understanding User Emotion Through Data",
      category: "Sentiment Analysis Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      desc: "A web application that analyzes text input and classifies it as positive, negative, or neutral using NLP techniques.",
      github: "https://github.com/Imashi-Sandeepika/Sentiment-Analysis-Project.git",
      demo: "https://sentiment-analysis-project-7a2c.onrender.com"
    },
    {
      title: "Predicting Laptop Prices with ML",
      category: "Laptop Price Predictor",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      desc: "A machine learning project that predicts laptop prices based on specifications like brand, processor, RAM, and GPU.",
      github: "https://github.com/Imashi-Sandeepika/Laptop-Price-Predictor.git",
      demo: "https://laptop-price-predictor-oqep.onrender.com"
    },
    {
      title: "Diabetes Prediction",
      category: "Machine Learning & Healthcare",
      image: diabetesImg,
      desc: "A machine learning project built with Python to predict the likelihood of diabetes in patients based on key diagnostic factors.",
      github: "https://github.com/Imashi-Sandeepika/Diabetes-Prediction"
    },
    {
      title: "Rock vs Mine Prediction",
      category: "Machine Learning",
      image: rockVsMineImg,
      desc: "A machine learning model developed in Python to classify sonar returns as either a rock or a mine using predictive algorithms.",
      github: "https://github.com/Imashi-Sandeepika/Rock-vs-Mine-Prediction"
    },
    {
      title: "Popup Message Extension",
      category: "Chrome Extension",
      image: popupExtensionImg,
      desc: "A custom Chrome extension that displays notifications or popup messages within the browser.",
      github: "https://github.com/Imashi-Sandeepika/Popup-Message-Extension"
    },
    {
      title: "Modern React + Vite Portfolio",
      category: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      desc: "A professional, responsive portfolio showcasing data analysis, visualization, and problem-solving skills.",
      github: "https://github.com/Imashi-Sandeepika/my-portfolio",
      demo: "https://my-portfolio-beige-ten-63.vercel.app"
    },
    {
      title: "University Complaint Management",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
      desc: "A comprehensive system designed to streamline and manage university complaints efficiently, ensuring better communication and resolution.",
      github: "https://github.com/Madhuka200044/Complaint_Management_System_for_University.git"
    },
    {
      title: "Fruit Classifier App",
      category: "Machine Learning & Vision",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop",
      desc: "An intelligent image classifier utilizing transfer learning to accurately identify and categorize various types of fruits via a web interface.",
      github: "https://github.com/Imashi-Sandeepika/Fruit-Classifier.git",
      demo: "https://fruit-classifier-q3fi.onrender.com"
    },
    {
      title: "Counseling Web App",
      category: "Web Application",
      image: counselingImg,
      imageClass: "object-top", // Use object-top to anchor the image to the top so faces are visible
      desc: "A comprehensive web application designed to facilitate professional counseling services and mental health support.",
      github: "https://github.com/Imashi-Sandeepika/Counseling-web-app.git",
      demo: "https://counseling-web-app.vercel.app"
    }
  ]

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-8 relative pb-4 inline-block">
        Projects
        <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-[#212123] rounded-2xl border border-gray-800 overflow-hidden shadow-md flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <img src={project.image} alt={project.title} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${project.imageClass || ''}`} />
              <div className="absolute inset-0 bg-[#1e1e1f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-[#282829] p-3 rounded-xl text-sky-400 hover:text-white transition-colors border border-gray-700">
                    <Eye size={20} />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-[#282829] p-3 rounded-xl text-sky-400 hover:text-white transition-colors border border-gray-700">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2 block">{project.category}</span>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 relative pb-4 inline-block">
          Research
          <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></span>
        </h2>

        <div className="bg-[#212123] rounded-2xl border border-gray-800 p-8 shadow-md hover:border-sky-400 transition-colors duration-300">
          <div className="flex items-start gap-5 flex-col md:flex-row">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-[#282829] rounded-xl border border-gray-800 text-sky-400">
              <BookOpen size={28} />
            </div>
            <div className="flex-1">
              <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2 block">BA Psychology Final Year Project</span>
              <h3 className="text-xl font-bold text-white mb-3">Exploring the Impact of Human Psychology and Counseling in Enhancing User Experience and Mental Well-being (Within the ICT Industry through Web Technology)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Investigated the psychological state, stress levels, cognitive load, and emotional well-being of ICT professionals. Utilizing data collected through observations and interviews, the study identified key workplace challenges and proposed practical preventive strategies to improve work-life balance and promote healthier, more productive environments in the tech sector.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800">
                <a 
                  href={thesisPdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#282829] hover:bg-[#323233] text-gray-200 hover:text-white rounded-xl border border-gray-800 hover:border-sky-400 transition-all duration-300 text-sm font-medium shadow-sm"
                >
                  <FileText size={18} className="text-sky-400" />
                  View Final Thesis
                </a>
                <a 
                  href={transcriptPdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#282829] hover:bg-[#323233] text-gray-200 hover:text-white rounded-xl border border-gray-800 hover:border-sky-400 transition-all duration-300 text-sm font-medium shadow-sm"
                >
                  <FileText size={18} className="text-sky-400" />
                  View Academic Transcript
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
