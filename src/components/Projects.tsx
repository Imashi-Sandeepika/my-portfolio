import { Eye, Github } from 'lucide-react'

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
      title: "Modern React + Vite Portfolio",
      category: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      desc: "A professional, responsive portfolio showcasing data analysis, visualization, and problem-solving skills.",
      github: "https://github.com/Imashi-Sandeepika/my-portfolio",
      demo: "https://my-portfolio-beige-ten-63.vercel.app"
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
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#1e1e1f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-[#282829] p-3 rounded-xl text-sky-400 hover:text-white transition-colors border border-gray-700">
                  <Eye size={20} />
                </a>
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
    </div>
  )
}

export default Projects
