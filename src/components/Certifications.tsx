import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/verify/GNACW4RYATUQ"
    },
    {
      title: "Python Basic",
      issuer: "University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/verify/DO6SVSJITAKX"
    },
    {
      title: "Python Classes and Inheritance",
      issuer: "University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/verify/IB0MUDUW0GAT"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/verify/BUM5IB3FL558"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/JDQSTVXSV695"
    },
    {
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/Q00BZF6NNVX8"
    },
    {
      title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      issuer: "University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/verify/YZ3CPB5R9FPI"
    },
    {
      title: "AI/ML Engineer - Stage 1 - SLIIT",
      issuer: "SLIIT Department of Maths and Statistics",
      link: "https://code.sliit.org/certificates/i7yyroezxi"
    },
    {
      title: "Preparing Data for Analysis with Microsoft Excel",
      issuer: "Microsoft",
      link: "https://www.coursera.org/account/accomplishments/verify/EFGOE9Q33F7L"
    },
    {
      title: "Power BI Data Analytics and Data Preparation",
      issuer: "Whizlabs",
      link: "https://www.coursera.org/account/accomplishments/verify/22RY7ORQ03BV"
    },
    {
      title: "Harnessing the Power of Data with Power BI",
      issuer: "Microsoft",
      link: "https://www.coursera.org/account/accomplishments/verify/G65Y7TSFPC19"
    },
    {
      title: "Data Preparation and Visualization with Power BI",
      issuer: "Packt",
      link: "https://www.coursera.org/account/accomplishments/verify/4JSKAZTFVW8G"
    }
  ]

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-8 relative pb-4 inline-block">
        Certifications
        <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></span>
      </h2>
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-[#212123] text-sky-400 rounded-xl flex items-center justify-center shadow-md border border-gray-800">
            <Award size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">My Credentials</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#212123] p-6 rounded-2xl border border-gray-800 flex items-start gap-4 shadow-sm hover:border-sky-400 transition-all duration-300 hover:scale-[1.02] group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-[#282829] p-3 rounded-xl text-sky-400 mt-1 border border-gray-800 flex-shrink-0 group-hover:bg-sky-400 group-hover:text-white transition-colors duration-300">
                <Award size={24} />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-white font-bold text-[15px] mb-1 group-hover:text-sky-400 transition-colors duration-300 leading-snug">{cert.title}</h4>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-sky-400 transition-colors duration-300 mt-1 flex-shrink-0" />
                </div>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications
