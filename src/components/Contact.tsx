import React, { useState } from 'react'
import { Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-8 relative pb-4 inline-block">
        Contact
        <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></span>
      </h2>

      {/* Google Map Section */}
      <div className="w-full h-[380px] rounded-3xl overflow-hidden border border-gray-800 mb-10 relative shadow-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.0634860269!2d80.32757271926618!3d6.699377696349372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ef9e7c37dd49%3A0xc34479bc19cf2e2!2sRatnapura!5e0!3m2!1sen!2slk!4v1716075900000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) invert(90%) contrast(110%)' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ratnapura, Sri Lanka Map"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Form</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-4 bg-[#212123]/50 border border-gray-800 focus:border-sky-400 rounded-2xl text-white placeholder-gray-500 transition-colors outline-none text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-4 bg-[#212123]/50 border border-gray-800 focus:border-sky-400 rounded-2xl text-white placeholder-gray-500 transition-colors outline-none text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-5 py-4 bg-[#212123]/50 border border-gray-800 focus:border-sky-400 rounded-2xl text-white placeholder-gray-500 transition-colors outline-none resize-none text-sm"
              placeholder="Your Message"
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <div>
              {submitStatus === 'success' && (
                <p className="text-emerald-400 text-sm font-medium">
                  Thanks! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-rose-400 text-sm font-medium">
                  Error sending message. Please try again.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#282829] hover:bg-[#323233] text-sky-400 hover:text-white rounded-2xl border border-gray-800 hover:border-sky-400 transition-all duration-300 text-sm font-semibold shadow-md ml-auto"
            >
              <Send size={16} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
