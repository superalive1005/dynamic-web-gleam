
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
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
      demoUrl: '',
      githubUrl: 'https://github.com/livebcdev0603/ecommerce-nextjs',
      gradient: 'bg-hero-pattern',
    },
    {
      title: 'Kozi Kaza',
      description: 'Online platform offering home design tools, 3D planning, and a community for sharing interior decoration ideas.',
      image: '/kozikaza.jpg',
      technologies: ['Angular', 'Krpano', 'Babylon.js'],
      demoUrl: 'https://www.kozikaza.com/',
      githubUrl: '',
      gradient: 'bg-purple-gradient',
    },
    {
      title: 'Manifest Analytics Dashboard',
      description: 'Complex chart Dashboard for admin management.',
      image: '/manifest.jpg',
      technologies: ['React', 'D3.js'],
      demoUrl: 'https://manifest-dashboard.vercel.app/',
      githubUrl: '',
      gradient: 'bg-blue-gradient',
    },
    {
      title: 'Learn.TheYEI',
      description: 'Learning Portal provides practice resources for the AP Economics exams, National Economics Challenge, EconBowl, EconOlympiad, and more.',
      image: '/yei-learn.jpg',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'CSS', 'Firebase'],
      demoUrl: 'https://learn.theyei.org/',
      githubUrl: '',
      gradient: 'bg-blue-gradient',
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
