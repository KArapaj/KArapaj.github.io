import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend service
    setStatus('Thank you! Your message has been received. I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Clear status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Have a project in mind or want to collaborate? Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Email</p>
                      <a href="mailto:klenis.arapaj@example.com" className="text-gray-900 hover:text-primary transition-colors">
                        klenis.arapaj@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Location</p>
                      <p className="text-gray-900">London, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/KArapaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl hover:bg-primary hover:text-gray-900 transition-all"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl hover:bg-primary hover:text-gray-900 transition-all"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm currently in my final year of studies and actively seeking opportunities in 
                  software development, AI, and computer vision. Open to internships, graduate roles, 
                  and collaborative projects.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="card space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-900 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-900 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-900 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-900 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-900 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {status && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                    {status}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
