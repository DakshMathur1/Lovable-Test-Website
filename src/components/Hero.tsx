
import React from "react";
import { Animate } from "./ui/motion";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-50 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="order-2 md:order-1">
            <Animate animation="fade-up" delay={100}>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-indigo-100 text-indigo-800 rounded-full mb-6">
                COMPUTER SCIENCE STUDENT
              </span>
            </Animate>
            <Animate animation="fade-up" delay={300}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                Hi, I'm <span className="text-indigo-600">Alex Johnson</span>
              </h1>
            </Animate>
            <Animate animation="fade-up" delay={500}>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                A passionate computer science student specializing in web development, 
                machine learning, and software engineering. Currently in my 3rd year at 
                University of Technology.
              </p>
            </Animate>
            <Animate animation="fade-up" delay={700}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-full transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 bg-transparent border border-gray-200 text-gray-900 font-medium rounded-full transition-all duration-300 hover:border-gray-400"
                >
                  Contact Me
                </a>
              </div>
            </Animate>
          </div>

          <div className="order-1 md:order-2 relative">
            <Animate 
              animation="fade-in" 
              delay={800} 
              className="relative z-10"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-500/5 backdrop-blur-sm border border-white/20 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Portrait" 
                    className="object-cover h-full w-full rounded-2xl"
                  />
                </div>
              </div>
            </Animate>

            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-100 rounded-xl -z-10 hidden md:block"></div>
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-100 rounded-lg -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
