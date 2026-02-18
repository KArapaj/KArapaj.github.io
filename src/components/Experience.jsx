import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Computer Vision Research',
      organization: 'University of East London',
      type: 'Academic Project',
      period: 'Sep 2025 - Present',
      description: 'Developing an AI-based volleyball performance tracker for my final year dissertation. Implementing real-time pose estimation and performance analytics.',
      achievements: [
        'Designed and implemented computer vision algorithms for player tracking',
        'Built FastAPI backend for real-time data processing',
        'Created React-based dashboard for performance visualization',
        'Integrated PostgreSQL database for historical data analysis',
      ],
      icon: <FaGraduationCap />,
    },
    {
      title: 'Software Development Intern',
      organization: 'Tech Company',
      type: 'Internship',
      period: 'Summer 2025',
      description: 'Placeholder for internship experience. Gained hands-on experience in software development and agile methodologies.',
      achievements: [
        'Collaborated with cross-functional teams on web development projects',
        'Implemented responsive UI components using React and Tailwind CSS',
        'Participated in code reviews and sprint planning meetings',
        'Contributed to the development of customer-facing features',
      ],
      icon: <FaBriefcase />,
    },
    {
      title: 'Web Development Project',
      organization: 'University Coursework',
      type: 'Academic Project',
      period: 'Jan 2025 - May 2025',
      description: 'Developed a full-stack web application as part of advanced web development course.',
      achievements: [
        'Built RESTful API using Node.js and Express',
        'Implemented user authentication and authorization',
        'Designed responsive frontend with React',
        'Deployed application to cloud platform',
      ],
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">Experience</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            My journey in software development and research
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl text-primary">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.organization}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.period}</p>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-bg"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
