import { Code, Database, BarChart3, FileSpreadsheet } from 'lucide-react'

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', icon: <Code size={32} /> },
    { name: 'SQL', icon: <Database size={32} /> },
    { name: 'Power BI', icon: <BarChart3 size={32} /> },
    { name: 'Excel', icon: <FileSpreadsheet size={32} /> },
    { name: 'Pandas', icon: <Code size={32} /> },
    { name: 'NumPy', icon: <Code size={32} /> },
  ]

  const tools = [
    { name: 'VS Code', icon: <Code size={32} /> },
    { name: 'Git', icon: <Code size={32} /> },
    { name: 'Matplotlib', icon: <BarChart3 size={32} /> },
    { name: 'Seaborn', icon: <BarChart3 size={32} /> },
  ]

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-6 px-4 bg-[#212123] rounded-2xl border border-gray-800 shadow-sm hover:border-sky-400 transition-colors duration-300">
            <div className="text-gray-300 mb-3">{skill.icon}</div>
            <span className="text-[13px] font-medium text-gray-400">{skill.name}</span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-white mb-6">Tools & Technologies</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-6 px-4 bg-[#212123] rounded-2xl border border-gray-800 shadow-sm hover:border-sky-400 transition-colors duration-300">
            <div className="text-gray-300 mb-3">{tool.icon}</div>
            <span className="text-[13px] font-medium text-gray-400">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
