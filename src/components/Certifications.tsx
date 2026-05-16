import { Award, BookOpen } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Python Basics",
      issuer: "University of Michigan",
      date: "March 2024",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      date: "January 2024",
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "November 2024",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "October 2025",
    },
    {
      title: "Introduction to Software Engineering",
      issuer: "Coursera",
      date: "November 2025",
    },
    {
      title: "AI/ML Engineer - Stage 1",
      issuer: "Centre for Open and Distance Education - SLIIT",
      date: "December 2025",
    }
  ]

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-8 relative pb-4 inline-block">
        Certifications & Research
        <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></span>
      </h2>
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-[#212123] text-sky-400 rounded-xl flex items-center justify-center shadow-md border border-gray-800">
            <Award size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">Certifications</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#212123] p-6 rounded-2xl border border-gray-800 flex items-start gap-4 shadow-sm hover:border-sky-400 transition-colors duration-300">
              <div className="bg-[#282829] p-3 rounded-xl text-sky-400 mt-1 border border-gray-800 flex-shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-[15px] mb-1">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <span className="text-xs text-sky-400 font-semibold px-2 py-1 bg-[#282829] rounded-md inline-block">Issued: {cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-[#212123] text-sky-400 rounded-xl flex items-center justify-center shadow-md border border-gray-800">
            <BookOpen size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">Research</h3>
        </div>
        
        <div className="bg-[#212123] p-8 rounded-2xl border border-gray-800 shadow-sm hover:border-sky-400 transition-colors duration-300">
          <h4 className="text-white font-bold text-lg mb-3">Psychology-driven UX Design and Mental Well-being within the ICT Industry</h4>
          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            Conducting an interdisciplinary research study exploring how psychology-driven User Experience (UX) design impacts mental well-being in the Information and Communication Technology (ICT) sector. This study connects my Data Science, ICT, and Psychology background to real user experiences.
          </p>
          <a href="#" className="text-sky-400 text-sm font-semibold hover:underline flex items-center gap-1">
            Read Paper <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Certifications
