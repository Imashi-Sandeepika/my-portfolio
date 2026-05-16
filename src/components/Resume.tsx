import { BookOpen, Briefcase } from 'lucide-react'
import Skills from './Skills'

const Resume = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-8 relative pb-4 inline-block">
        Resume
        <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></span>
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-10 mb-10">
        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#212123] text-sky-400 rounded-xl flex items-center justify-center shadow-md border border-gray-800">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          
          <div className="relative border-l border-gray-800 ml-6 pl-8 space-y-10">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">Bachelor of ICT</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2023 - 2027</span>
              <p className="text-gray-400 text-sm">University of Vavuniya</p>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Focused on core ICT principles including software engineering, database systems, networking, and web technologies.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">Diploma in HRM</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2020 - 2021</span>
              <p className="text-gray-400 text-sm">IMBS Institute of Management & Business Studies</p>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Association of Business Executives in the UK, focusing on Human Resource Management.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">Diploma in Psychology & Counselling</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2020 - 2021</span>
              <p className="text-gray-400 text-sm">IMBS Institute of Management & Business Studies</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">BA in Psychology</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2022 - 2025</span>
              <p className="text-gray-400 text-sm">IIC University of Technology</p>
            </div>
          </div>
        </div>
        
        {/* Experience */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#212123] text-sky-400 rounded-xl flex items-center justify-center shadow-md border border-gray-800">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>
          
          <div className="relative border-l border-gray-800 ml-6 pl-8 space-y-10">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">Junior Data Analyst</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">Jan 2024 - Present</span>
              <p className="text-gray-400 text-sm">DataInsights Ltd</p>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Perform comprehensive data analysis on customer segmentation and market trends. Create compelling data visualizations using Power BI and Python.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">Data Analyst Intern</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">Jun 2023 - Dec 2023</span>
              <p className="text-gray-400 text-sm">TechCorp Solutions</p>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Cleaned and analyzed large datasets containing over 100,000 customer records using Python and SQL. Automated monthly Excel reports.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">Freelance Data Consultant</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">Mar 2023 - Present</span>
              <p className="text-gray-400 text-sm">Self-Employed</p>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Provide data analysis and visualization services to small and medium businesses. Develop custom analytics solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  )
}

export default Resume
