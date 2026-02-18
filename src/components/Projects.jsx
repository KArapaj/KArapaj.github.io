import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'AI Volleyball Performance Tracker',
      description: 'An innovative computer vision system that analyzes volleyball player performance in real-time. Uses pose estimation to track player movements, calculate attack efficiency, and generate heatmaps for strategic analysis.',
      techStack: ['Python', 'OpenCV', 'FastAPI', 'React', 'PostgreSQL', 'MediaPipe'],
      features: [
        'Real-time player pose estimation',
        'Attack efficiency metrics calculation',
        'Dynamic performance heatmaps',
        'Historical performance tracking',
        'Team analytics dashboard',
      ],
      image: '/placeholder-volleyball.jpg',
      github: 'https://github.com/KArapaj/volleyball-tracker',
      demo: 'https://youtube.com/embed/dQw4w9WgXcQ',
      status: 'In Development',
    },
    {
      title: 'Chess AI Application',
      description: 'An intelligent chess application featuring an AI opponent using minimax algorithm with alpha-beta pruning. Includes multiple difficulty levels and move suggestion features.',
      techStack: ['Python', 'React', 'Chess.js', 'Machine Learning'],
      features: [
        'AI opponent with adjustable difficulty',
        'Move suggestions and hints',
        'Game analysis and replay',
        'Opening book database',
      ],
      image: '/placeholder-chess.jpg',
      github: '#',
      demo: '#',
      status: 'Planned',
    },
    {
      title: 'Image Classification System',
      description: 'A deep learning-based image classification system built with convolutional neural networks. Trained on custom datasets for specific use cases.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'Flask', 'React'],
      features: [
        'Custom CNN architecture',
        'Data augmentation pipeline',
        'Real-time classification',
        'Model performance visualization',
      ],
      image: '/placeholder-ml.jpg',
      github: '#',
      demo: '#',
      status: 'Planned',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">Projects</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Showcase of my work in AI, Computer Vision, and Web Development
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'In Development' 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {project.status === 'In Development' && (
                        <>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:text-blue-400 transition-colors"
                          >
                            <FaGithub className="text-xl" />
                            View Code
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:text-blue-400 transition-colors"
                          >
                            <FaExternalLinkAlt className="text-xl" />
                            Live Demo
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    {project.status === 'In Development' && project.demo ? (
                      <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src={project.demo}
                          title={`${project.title} Demo`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <div className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🚧</div>
                          <p className="text-gray-400">Coming Soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
