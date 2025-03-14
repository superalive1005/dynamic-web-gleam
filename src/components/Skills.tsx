
import {
  Code,
  LayoutDashboard,
  LineChart,
  Hammer,
  Laptop,
  RefreshCw,
  Zap,
  Server,
  CheckCircle,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <Code className="h-10 w-10 text-purple-600" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Redux', 'Tailwind CSS', 'CSS-in-JS', 'jQuery'],
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      name: 'Backend',
      icon: <Server className="h-10 w-10 text-blue-600" />,
      skills: ['Node.js', 'Express', 'Firebase', 'GraphQL'],
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      name: 'Performance & Optimization',
      icon: <Zap className="h-10 w-10 text-amber-600" />,
      skills: [
        'Code splitting',
        'Lazy loading',
        'Server-Side Rendering (SSR)',
        'Client-Side Rendering (CSR)',
        'Progressive Web Apps (PWA)',
      ],
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    },
    {
      name: 'Data Visualization',
      icon: <LineChart className="h-10 w-10 text-emerald-600" />,
      skills: ['D3.js', 'ECharts', 'Chart.js'],
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    },
    {
      name: 'Admin Interfaces & Dashboards',
      icon: <LayoutDashboard className="h-10 w-10 text-red-600" />,
      skills: ['Custom UI components', 'Role-based access control (RBAC)', 'Realtime data rendering'],
      bgColor: 'bg-red-50 dark:bg-red-900/20',
    },
    {
      name: 'Testing',
      icon: <CheckCircle className="h-10 w-10 text-indigo-600" />,
      skills: ['Jest', 'Cypress', 'React Testing Library'],
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    },
    {
      name: 'Build & DevOps',
      icon: <Hammer className="h-10 w-10 text-cyan-600" />,
      skills: ['Webpack', 'Vite', 'Continuous Integration/Continuous Deployment (CI/CD)', 'Docker'],
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
    {
      name: 'Others',
      icon: <Laptop className="h-10 w-10 text-teal-600" />,
      skills: ['Problem-Solving', 'Communication'],
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            I've developed a diverse set of skills throughout my 10+ years in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card ${category.bgColor} rounded-xl overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
