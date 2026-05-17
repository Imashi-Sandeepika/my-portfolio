import { Code, Database, BarChart3, FileSpreadsheet, Terminal, Layers, Monitor, Server, Cpu, Activity } from 'lucide-react'

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', icon: <Code size={32} /> },
    { name: 'Java', icon: <Code size={32} /> },
    { name: 'C', icon: <Code size={32} /> },
    { name: 'C#', icon: <Code size={32} /> },
    { name: 'C++', icon: <Code size={32} /> },
    { name: 'HTML', icon: <Code size={32} /> },
    { name: 'CSS', icon: <Code size={32} /> },
    { name: 'JavaScript', icon: <Code size={32} /> },
    { name: 'MySQL', icon: <Database size={32} /> },
    { name: 'MongoDB', icon: <Database size={32} /> },
    { name: 'Data Analysis', icon: <BarChart3 size={32} /> },
    { name: 'Machine Learning', icon: <Cpu size={32} /> },
    { name: 'Statistical Analysis', icon: <Activity size={32} /> },
    { name: 'Data Visualization', icon: <BarChart3 size={32} /> },
    { name: 'HR Data Management', icon: <Database size={32} /> },
    { name: 'Research Data Analysis', icon: <BarChart3 size={32} /> },
    { name: 'AutoCAD', icon: <Layers size={32} /> },
    { name: 'Cisco Packet Tracer', icon: <Server size={32} /> },
    { name: 'Figma', icon: <Monitor size={32} /> },
  ]

  const tools = [
    { name: 'Pandas', icon: <Code size={32} /> },
    { name: 'NumPy', icon: <Code size={32} /> },
    { name: 'Scikit-learn', icon: <Cpu size={32} /> },
    { name: 'Matplotlib', icon: <BarChart3 size={32} /> },
    { name: 'Jupyter Notebook', icon: <Terminal size={32} /> },
    { name: 'Google Colab', icon: <Terminal size={32} /> },
    { name: 'Power BI', icon: <BarChart3 size={32} /> },
    { name: 'Excel (Advanced)', icon: <FileSpreadsheet size={32} /> },
    { name: 'Git', icon: <Terminal size={32} /> },
    { name: 'GitHub', icon: <Code size={32} /> },
    { name: 'SQL Server', icon: <Database size={32} /> },
    { name: 'Google Forms', icon: <FileSpreadsheet size={32} /> },
    { name: 'Microsoft Forms', icon: <FileSpreadsheet size={32} /> },
    { name: 'Google Meet', icon: <Monitor size={32} /> },
    { name: 'LinkedIn Recruiter', icon: <Activity size={32} /> },
    { name: 'Tally Prime', icon: <Database size={32} /> },
    { name: 'UBUNTU', icon: <Terminal size={32} /> },
  ]

  return (
    <div className="mt-16 animate-fade-in">
      <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-6 px-4 bg-[#212123] rounded-2xl border border-gray-800 shadow-sm hover:border-sky-400 hover:text-sky-400 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-sky-400 mb-3 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">{skill.icon}</div>
            <span className="text-[13px] font-semibold text-gray-300 text-center">{skill.name}</span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-white mb-6">Tools & Technologies</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-6 px-4 bg-[#212123] rounded-2xl border border-gray-800 shadow-sm hover:border-sky-400 hover:text-sky-400 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-sky-400 mb-3 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">{tool.icon}</div>
            <span className="text-[13px] font-semibold text-gray-300 text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
