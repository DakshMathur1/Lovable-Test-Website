
import React from "react";
import { Animate } from "./ui/motion";
import { Code, GraduationCap, Briefcase, Github, Linkedin, Mail } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Animate animation="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-indigo-100 text-indigo-800 rounded-full mb-6">
              ABOUT ME
            </span>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let me introduce myself
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={400}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm a third-year Computer Science student with a passion for building innovative 
              software solutions. My journey in tech started when I was 15, and I've been coding ever since.
            </p>
          </Animate>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Animate animation="fade-up" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Who I am</h3>
              <p className="text-gray-600">
                I'm Alex, currently studying Computer Science at the University of Technology. 
                I'm passionate about web development, machine learning, and creating software 
                that solves real-world problems.
              </p>
              <p className="text-gray-600">
                Outside of academics, I'm actively involved in hackathons, coding competitions, and 
                open-source contributions. I believe in continuous learning and collaboration to grow
                as a developer.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:alex@example.com"
                   className="p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Animate>

          <Animate animation="fade-up" delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-4">
                  <Code className="text-indigo-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                <p className="text-gray-600">Full-stack developer with experience in React, Node.js, and database design.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
                  <GraduationCap className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-600">B.S. in Computer Science, University of Technology, Expected 2025.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-green-100 rounded-lg inline-block mb-4">
                  <Briefcase className="text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Experience</h4>
                <p className="text-gray-600">Intern at TechCorp, contributing to real-world software projects.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-purple-100 rounded-lg inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Projects</h4>
                <p className="text-gray-600">Created 10+ projects spanning web apps, AI solutions, and mobile applications.</p>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
