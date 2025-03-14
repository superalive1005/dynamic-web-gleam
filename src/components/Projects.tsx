
import { ExternalLink, Github } from 'lucide-react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  gradient: string;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 ${project.gradient}`}>
      <div className="relative h-60 overflow-hidden">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-white font-bold text-xl">{project.title}</span>
        </div>
      </div>
      <div className="p-6 bg-card">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 font-medium"
            >
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 font-medium"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: 'eCommerce Platform',
      description: 'Multi-tenant eCommerce platform with advanced search functionality and real-time inventory management.',
      image: 'ecommerce.jpg',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
      demoUrl: 'https://adrianliu.vercel.app/projects/ecommerce',
      githubUrl: 'https://github.com/livebcdev0603/ecommerce',
      gradient: 'bg-hero-pattern',
    },
    {
      title: 'Digital Shed Builder',
      description: 'Real-time marketing analytics dashboard with comprehensive data visualization and reporting features.',
      image: 'analytics.jpg',
      technologies: ['React', 'D3.js', 'ECharts', 'Firebase', 'Redux'],
      demoUrl: 'https://digitalshedbuilder.com',
      githubUrl: 'https://github.com/livebcdev0603/analytics',
      gradient: 'bg-purple-gradient',
    },
    {
      title: 'Component Library',
      description: 'Custom UI component library with comprehensive documentation and testing infrastructure.',
      image: 'ui-library.jpg',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Figma'],
      demoUrl: 'https://adrianliu.vercel.app/projects/ui-library',
      githubUrl: 'https://github.com/livebcdev0603/ui-library',
      gradient: 'bg-blue-gradient',
    },
    {
      title: 'Real Estate Platform',
      description: 'Feature-rich real estate platform with advanced property search and interactive map integration.',
      image: 'real-estate.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'AWS'],
      demoUrl: 'https://adrianliu.vercel.app/projects/real-estate',
      githubUrl: 'https://github.com/livebcdev0603/real-estate',
      gradient: 'bg-card-gradient',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Here are some of the projects I've worked on throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
