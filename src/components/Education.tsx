
import React from "react";
import { Animate } from "./ui/motion";
import { GraduationCap, Briefcase } from "lucide-react";

const educationData = [
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of Technology",
    period: "2021 - Present",
    description: "Specializing in Machine Learning and Software Engineering. Current GPA: 3.8/4.0",
    details: [
      "Relevant Coursework: Data Structures & Algorithms, Database Systems, Computer Networks, Machine Learning, Operating Systems",
      "Teaching Assistant for Introduction to Programming course",
      "Member of the University Coding Club"
    ]
  },
  {
    type: "education",
    title: "High School Diploma",
    organization: "Science Academy",
    period: "2017 - 2021",
    description: "Graduated with honors. Specialized in mathematics and computer science.",
    details: [
      "Class Valedictorian",
      "Winner of Regional Mathematics Competition",
      "Led the school's robotics team to nationals"
    ]
  },
  {
    type: "experience",
    title: "Software Development Intern",
    organization: "TechCorp Inc.",
    period: "Summer 2023",
    description: "Worked on the company's core product team, contributing to both frontend and backend development.",
    details: [
      "Developed new features for the company's web application using React and Node.js",
      "Collaborated with senior developers to optimize database queries, improving performance by 30%",
      "Participated in code reviews and agile development processes"
    ]
  },
  {
    type: "experience",
    title: "Research Assistant",
    organization: "University ML Lab",
    period: "Jan 2023 - Present",
    description: "Assisting with research on natural language processing algorithms for text classification.",
    details: [
      "Implementing and evaluating various machine learning models",
      "Preparing datasets and conducting experiments",
      "Co-authored a research paper to be published in an academic journal"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Animate animation="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-indigo-100 text-indigo-800 rounded-full mb-6">
              MY JOURNEY
            </span>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Education & Experience
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={400}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My academic background and professional experiences that have shaped my 
              skills and knowledge in computer science and software development.
            </p>
          </Animate>
        </div>

        <div className="space-y-12">
          <div>
            <Animate animation="fade-up" delay={100}>
              <h3 className="text-2xl font-bold flex items-center mb-8 text-indigo-700">
                <GraduationCap className="mr-3" />
                Education
              </h3>
            </Animate>
            
            <div className="space-y-8">
              {educationData
                .filter(item => item.type === "education")
                .map((item, index) => (
                  <Animate animation="fade-up" delay={200 + index * 100} key={index}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{item.title}</h4>
                          <p className="text-indigo-600">{item.organization}</p>
                        </div>
                        <span className="mt-2 md:mt-0 px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </Animate>
                ))}
            </div>
          </div>
          
          <div>
            <Animate animation="fade-up" delay={100}>
              <h3 className="text-2xl font-bold flex items-center mb-8 text-indigo-700">
                <Briefcase className="mr-3" />
                Experience
              </h3>
            </Animate>
            
            <div className="space-y-8">
              {educationData
                .filter(item => item.type === "experience")
                .map((item, index) => (
                  <Animate animation="fade-up" delay={200 + index * 100} key={index}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{item.title}</h4>
                          <p className="text-indigo-600">{item.organization}</p>
                        </div>
                        <span className="mt-2 md:mt-0 px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </Animate>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
