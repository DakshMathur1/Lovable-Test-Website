
import React from "react";
import { Animate, GlassCard } from "./ui/motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Redux", "Material UI"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "Django", "RESTful APIs", "GraphQL", "Firebase"]
  },
  {
    category: "Data & ML",
    items: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Data Visualization", "SQL Databases"]
  },
  {
    category: "Tools & Others",
    items: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Agile/Scrum", "Jest/Testing"]
  }
];

const SkillBadge: React.FC<{name: string}> = ({ name }) => (
  <span className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    {name}
  </span>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Animate animation="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-indigo-100 text-indigo-800 rounded-full mb-6">
              MY TOOLKIT
            </span>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Skills & Technologies
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={400}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through academic courses, personal projects, and internships, I've developed 
              proficiency in various technologies and frameworks.
            </p>
          </Animate>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Animate
              key={index}
              animation="fade-up"
              delay={200 + index * 100}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.items.map((item, i) => (
                      <SkillBadge key={i} name={item} />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
