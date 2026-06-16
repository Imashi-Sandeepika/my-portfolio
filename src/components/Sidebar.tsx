import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import profileImg from '../assets/MyOff.jpg'

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[320px] bg-[#1e1e1f] rounded-3xl p-8 border border-gray-800 shadow-2xl flex flex-col items-center sticky top-10 h-max z-10">
      <div className="bg-gray-800/50 p-3 rounded-3xl mb-6 shadow-inner">
        <img 
          src={profileImg} 
          alt="Imashi Sandeepika" 
          className="w-36 h-36 rounded-2xl object-cover" 
        />
      </div>
      <h1 className="text-2xl font-bold text-white mb-2 text-center tracking-wide">Imashi Sandeepika</h1>
      <span className="bg-[#282829] text-gray-300 text-xs px-4 py-1.5 rounded-lg mb-8 font-medium shadow-sm">
        Data Analyst
      </span>
      
      <div className="w-full h-[1px] bg-gray-800 mb-8"></div>
      
      <div className="w-full space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#282829] text-sky-400 rounded-xl flex justify-center items-center shadow-sm border border-gray-800">
            <Mail size={18} />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-gray-400 uppercase mb-0.5 tracking-wider font-semibold">Email</p>
            <p className="text-sm text-gray-200 truncate" title="imashisandeepika2001@gmail.com">
              imashisandeepika2001@gmail.com
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#282829] text-sky-400 rounded-xl flex justify-center items-center shadow-sm border border-gray-800">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase mb-0.5 tracking-wider font-semibold">Phone</p>
            <p className="text-sm text-gray-200">0764984320</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#282829] text-sky-400 rounded-xl flex justify-center items-center shadow-sm border border-gray-800">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase mb-0.5 tracking-wider font-semibold">Location</p>
            <p className="text-sm text-gray-200">Rathnapura</p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 mt-8 pt-6 border-t border-gray-800 w-full justify-center">
        <a 
          href="https://www.linkedin.com/in/imashisandeepika-b0a38a3a1/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-sky-400 transition-colors"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://github.com/Imashi-Sandeepika" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-sky-400 transition-colors"
          title="GitHub"
        >
          <Github size={20} />
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
