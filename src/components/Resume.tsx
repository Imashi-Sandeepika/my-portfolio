import { BookOpen, Briefcase, ExternalLink } from 'lucide-react'
import Skills from './Skills'
import degreePdf from '../assets/Degree Certificate.pdf'
import hrmPdf from '../assets/HRM.pdf'
import psyPdf from '../assets/PSY.pdf'

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
              <h4 className="text-[17px] font-bold text-white mb-1">Bachelor of Information and Communication Technology (Honours)</h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2023 - 2027</span>
              <p className="text-gray-400 text-sm">University of Vavuniya</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">
                <a 
                  href={degreePdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-sky-400 transition-colors duration-300 inline-flex items-center gap-1.5 group cursor-pointer"
                >
                  Bachelor of Arts in Psychology
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-sky-400 transition-colors duration-300" />
                </a>
              </h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2022 - 2025</span>
              <p className="text-gray-400 text-sm">IIC University of Technology</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">
                <a 
                  href={hrmPdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-sky-400 transition-colors duration-300 inline-flex items-center gap-1.5 group cursor-pointer"
                >
                  Diploma in Human Resource Management
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-sky-400 transition-colors duration-300" />
                </a>
              </h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2020 - 2021</span>
              <p className="text-gray-400 text-sm">IMBS Institute of Management & Business Studies</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_0_4px_#1e1e1f]"></div>
              <h4 className="text-[17px] font-bold text-white mb-1">
                <a 
                  href={psyPdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-sky-400 transition-colors duration-300 inline-flex items-center gap-1.5 group cursor-pointer"
                >
                  Diploma in Psychology
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-sky-400 transition-colors duration-300" />
                </a>
              </h4>
              <span className="text-sky-400 text-sm font-semibold mb-2 inline-block">2020 - 2021</span>
              <p className="text-gray-400 text-sm">IMBS Institute of Management & Business Studies</p>
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
          
          <div className="relative ml-6 pl-8 space-y-10">
            {/* Experience section left empty for now */}
          </div>
        </div>
      </div>

      <Skills />
    </div>
  )
}

export default Resume
