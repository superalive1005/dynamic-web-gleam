
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Adrian Liu</span>
              </h1>
              <p className="mt-4 text-2xl md:text-3xl text-muted-foreground">
                Senior Frontend Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Specialized in creating elegant, high-performance web applications with
              React, Next.js, and TypeScript. 10+ years of experience building
              user-centered digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToAbout} className="rounded-full">
                Explore my work
              </Button>
              
              <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full">
                Get in touch
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <svg
                  className="w-3/4 h-3/4 text-gray-800 dark:text-gray-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 7.57 19.18 5.86 17.12C7.46 15.56 9.55 14.5 12 14.5C14.45 14.5 16.54 15.56 18.14 17.12C16.43 19.18 14.03 20 12 20Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center flex-col animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
