
import React from "react";
import { Animate } from "./ui/motion";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gray-200 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="order-2 md:order-1">
            <Animate animation="fade-up" delay={100}>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-gray-100 rounded-full mb-6">
                DESIGNED FOR PERFECTION
              </span>
            </Animate>
            <Animate animation="fade-up" delay={300}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                Beautifully Crafted Digital Experience
              </h1>
            </Animate>
            <Animate animation="fade-up" delay={500}>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Embrace simplicity and focus on what truly matters. Our product delivers an
                exceptional user experience with meticulous attention to every detail.
              </p>
            </Animate>
            <Animate animation="fade-up" delay={700}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#features"
                  className="px-8 py-3.5 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-black hover:shadow-lg"
                >
                  Explore Features
                </a>
                <a
                  href="#learn-more"
                  className="px-8 py-3.5 bg-transparent border border-gray-200 text-gray-900 font-medium rounded-full transition-all duration-300 hover:border-gray-400"
                >
                  Learn More
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
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5/6 h-5/6 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500">Product Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>

            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gray-100 rounded-xl -z-10 hidden md:block"></div>
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-lg -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
