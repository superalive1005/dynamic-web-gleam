
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
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Code editor representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90 rounded-xl shadow-2xl overflow-hidden border border-white/10">
                {/* Editor top bar */}
                <div className="h-8 bg-gray-800/80 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm text-left opacity-90">
                  <div className="flex">
                    <span className="text-gray-400 mr-4">1</span>
                    <span className="text-blue-300">import</span>
                    <span className="text-white mx-1">&#123;</span>
                    <span className="text-yellow-300">React</span>
                    <span className="text-white">&#125;</span>
                    <span className="text-blue-300 mx-1">from</span>
                    <span className="text-green-300">'react'</span>
                    <span className="text-white">;</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">2</span>
                    <span className="text-white"></span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">3</span>
                    <span className="text-purple-300">const</span>
                    <span className="text-yellow-300 mx-1">App</span>
                    <span className="text-white">=</span>
                    <span className="text-purple-300 mx-1">() =></span>
                    <span className="text-white">&#123;</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">4</span>
                    <span className="text-white ml-4">return (</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">5</span>
                    <span className="text-white ml-8">&lt;</span>
                    <span className="text-orange-300">div</span>
                    <span className="text-blue-300 mx-1">className</span>
                    <span className="text-white">=</span>
                    <span className="text-green-300">"container"</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">6</span>
                    <span className="text-white ml-12">&lt;</span>
                    <span className="text-orange-300">h1</span>
                    <span className="text-white">&gt;</span>
                    <span className="text-white">Hello, World!</span>
                    <span className="text-white">&lt;/</span>
                    <span className="text-orange-300">h1</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">7</span>
                    <span className="text-white ml-8">&lt;/</span>
                    <span className="text-orange-300">div</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">8</span>
                    <span className="text-white ml-4">);</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">9</span>
                    <span className="text-white">&#125;;</span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">10</span>
                    <span className="text-white"></span>
                  </div>
                  
                  <div className="flex mt-2">
                    <span className="text-gray-400 mr-4">11</span>
                    <span className="text-blue-300">export</span>
                    <span className="text-blue-300 mx-1">default</span>
                    <span className="text-yellow-300">App</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full filter blur-md"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/30 rounded-full filter blur-md"></div>
              
              {/* Floating elements to show frontend technologies */}
              <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-float">
                <div className="text-blue-500 font-bold text-xl">React</div>
              </div>
              <div className="absolute bottom-10 -right-8 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-black dark:text-white font-bold text-xl">Next.js</div>
              </div>
              <div className="absolute top-1/2 -left-8 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: "0.8s" }}>
                <div className="text-blue-400 font-bold text-xl">TypeScript</div>
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
