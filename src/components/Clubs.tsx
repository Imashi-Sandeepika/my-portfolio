import { motion } from 'framer-motion'
import leoLogo from '../assets/clubs/leo.png'
import zeroPlasticLogo from '../assets/clubs/zero-plastic.png'
import ieeeLogo from '../assets/clubs/ieee.png'
import buddhistLogo from '../assets/clubs/buddhist-society.png'

const Clubs = () => {
  const clubs = [
    {
      name: 'LEO Club',
      role: 'Active Member',
      description: 'Leadership, community service, and youth-driven social impact initiatives within the university.',
      logo: leoLogo,
    },
    {
      name: 'ZERO PLASTIC Club',
      role: 'Active Member',
      description: 'Environmental awareness, plastic-saved. how free and sustainable campus projects.',
      logo: zeroPlasticLogo,
    },
    {
      name: 'IEEE Student Branch',
      role: 'Active Member',
      description: 'Technology, innovation, and professional networking in the engineering and ICT community.',
      logo: ieeeLogo,
    },
    {
      name: 'Buddhist Society',
      role: 'Active Member',
      description: 'Mindfulness, values, and cultural activities that support personal growth and balance.',
      logo: buddhistLogo,
    },
  ]

  return (
    <section id="clubs" className="py-20 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Clubs & Societies</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4" />
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Actively contributing to leadership, technology, sustainability, and mindfulness communities
            at university.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:border-indigo-500/70 transition-all"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center mb-4">
                <img src={club.logo} alt={club.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{club.name}</h3>
              <p className="text-xs uppercase tracking-wide text-indigo-300 mb-3">{club.role}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{club.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clubs
