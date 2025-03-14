
import { Mail, MapPin, Phone, Sparkles, Target, Trophy, Gem } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Avatar className="h-24 w-24 border-4 border-primary/20 bg-primary/10">
                    <AvatarFallback className="bg-primary/10">
                      <Sparkles className="h-12 w-12 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>adrianliu0603@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (323) 391-6006</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Dublin, Leinster, Ireland</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div>
                <p className="font-medium">Bachelor's degree: Computer Science</p>
                <p className="text-muted-foreground">University of Edinburgh, Edinburgh, Scotland</p>
                <p className="text-sm text-muted-foreground">09/2010 – 09/2014</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold">Senior Frontend Developer</h3>
            <p className="text-lg leading-relaxed">
              With over 10 years of experience specializing in React, Next.js, and TypeScript, I build scalable, 
              high-performance web applications for startups, eCommerce, and marketing platforms.
            </p>
            <p className="text-lg leading-relaxed">
              My expertise lies in developing dynamic interfaces, creating data visualizations with D3.js and ECharts, 
              and optimizing frontend performance. I'm adept at mentoring teams, driving innovation, and ensuring 
              seamless user experiences across devices.
            </p>
            <p className="text-lg leading-relaxed">
              Throughout my career, I've consistently increased user engagement, optimized load times, and improved SEO 
              performance for the companies I've worked with. I pride myself on writing clean, maintainable code and 
              staying at the forefront of web development trends.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/livebcdev0603" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
