
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Lidl',
      location: 'East Syracuse, NY, United States',
      position: 'Senior Frontend Developer',
      duration: '09/2022 – 02/2025',
      website: 'www.lidl.com',
      achievements: [
        'Led the development of a multi-tenant eCommerce platform using React, Next.js, and TypeScript, serving over 480,000 daily active users with an uptime of 99.98%.',
        'Optimized page load times from 4.2 seconds to 2.8 seconds by implementing Server-Side Rendering (SSR), lazy loading, and code splitting by 18th January 2025, resulting in a 34.7% increase in user engagement.',
        'Architected a component library using Storybook to ensure UI consistency across over 47 pages, reducing development time for new features by 35.3%.',
        'Developed real-time analytics dashboards integrating WebSockets for instant updates, enhancing data accuracy and reducing latency by 4.5 seconds, resulting in a 55% increase in responsiveness by 13th February 2025.',
      ],
    },
    {
      company: 'Darty',
      location: 'Paris, France',
      position: 'Frontend Developer',
      duration: '06/2019 – 08/2022',
      website: 'www.darty.com',
      achievements: [
        'Developed and maintained an enterprise-level eCommerce platform serving over 1 million monthly users, ensuring a seamless shopping experience.',
        'Built a custom React UI library, reducing development time for new features by 120 hours per project by 10th August 2022 and ensuring design uniformity across 32 components.',
        'Implemented Next.js with Incremental Static Regeneration (ISR), improving SEO performance by 5.2 points in Core Web Vitals and increasing organic traffic by 750 sessions per month by 5th June 2022.',
        'Integrated Algolia search, reducing average search latency from 1.3 seconds to 280 milliseconds within 5 months, enhancing user satisfaction.',
      ],
    },
    {
      company: 'Your Move',
      location: 'London, United Kingdom',
      position: 'Frontend Developer',
      duration: '01/2017 – 05/2019',
      website: 'www.your-move.co.uk',
      achievements: [
        'Built and optimized marketing landing pages and interactive dashboards, enhancing user engagement by 32% and 17.5% more qualified lead within 2 months.',
        'Developed React-based marketing analytics tools, tracking over 2.1 million daily events, providing actionable insights to the marketing team by 20th April 2019.',
        'Designed and implemented complex data visualizations using ECharts and D3.js, increasing data interpretability for real estate trends within 3 months.',
        'Improved First Contentful Paint (FCP) from 3.8 seconds to 1.3 seconds using advanced caching strategies, resulting in a 22% increase in user retention by 1st May 2019.',
      ],
    },
    {
      company: 'Mosaic Studios',
      location: 'Dublin, Ireland',
      position: 'Junior Web Developer',
      duration: '10/2014 – 12/2016',
      website: 'https://mosaicstudios.io',
      achievements: [
        'Maintained and optimized jQuery-based web apps, improving performance and reducing load times by 20.5% (from 7.3 seconds to 5.8 seconds), leading to a more seamless user experience by November 2016.',
        'Developed real-time dashboards using AJAX and RESTful APIs, enabling faster data updates and improving reporting efficiency for internal teams.',
        'Designed and implemented responsive UI components with Bootstrap and SCSS, enhancing cross-device compatibility and increasing mobile engagement by 28% within 4 months.',
        'Assisted in building a scalable API with PHP and MySQL, optimizing database queries to handle 41% more concurrent users without performance degradation by 17th November 2016.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            My professional journey across different companies and roles.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-0.5 md:-ml-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-9 h-9 bg-primary rounded-full flex items-center justify-center -ml-4 md:-ml-4 z-10 shadow-lg">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    } pb-8`}
                  >
                    <div className="glass-card p-6 rounded-xl h-full transition-transform duration-300 hover:-translate-y-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <div className="flex flex-wrap items-center gap-x-2 text-muted-foreground">
                          <span className="font-medium">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <span>{exp.duration}</span>
                          <a
                            href={`https://${exp.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {exp.website}
                          </a>
                        </div>
                      </div>

                      <ul className="space-y-2 list-disc pl-5">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm md:text-base">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
