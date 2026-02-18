import { motion } from 'framer-motion';
import { FaPython, FaReact, FaJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiOpencv, SiTensorflow, SiPytorch, SiFastapi } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'OpenCV', icon: <SiOpencv /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'PostgreSQL', icon: <FaDatabase /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate final-year Computer Science student at the University of East London, 
                specializing in Artificial Intelligence and Computer Vision. My academic journey has been 
                driven by curiosity and a desire to leverage technology to solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently, I'm working on my dissertation project: an <span className="text-primary font-semibold">
                AI-based volleyball performance tracker</span>. This innovative system uses computer vision 
                for player pose estimation and generates comprehensive metrics including attack efficiency 
                and dynamic heatmaps to analyze player performance.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond academics, I'm an avid volleyball player, which inspired my dissertation topic. 
                I also enjoy playing chess in my free time, appreciating the strategic thinking it develops 
                - skills that translate well into software development and problem-solving.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-2">
                  <p className="text-primary font-semibold">BSc Computer Science</p>
                  <p className="text-gray-300">University of East London</p>
                  <p className="text-gray-400">Final Year | Expected Graduation 2026</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Research Focus</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Computer Vision & Pose Estimation</li>
                  <li>Machine Learning Applications</li>
                  <li>Performance Analytics</li>
                  <li>Real-time Video Processing</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white text-center mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center hover:border-primary cursor-pointer"
                >
                  <div className="text-4xl text-primary mb-3 flex justify-center">
                    {skill.icon}
                  </div>
                  <p className="text-gray-300 font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
