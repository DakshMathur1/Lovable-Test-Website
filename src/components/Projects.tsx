
import React, { useState } from "react";
import { Animate, GlassCard } from "./ui/motion";
import { Github, ExternalLink } from "lucide-react";

type ProjectCategory = "All" | "Web Development" | "Mobile Apps" | "Machine Learning" | "Other";

const projects = [
  {
    id: 1,
    title: "Smart Study Planner",
    category: "Web Development",
    description: "A web application that helps students organize their study schedules using AI recommendations based on their learning patterns.",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Weather Prediction Model",
    category: "Machine Learning",
    description: "A machine learning model that predicts weather patterns using historical data and provides accurate forecasts up to 7 days.",
    technologies: ["Python", "PyTorch", "Pandas", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1532178910-7815d6919875?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Campus Connect Mobile App",
    category: "Mobile Apps",
    description: "A cross-platform mobile application that helps university students connect, share resources, and organize study groups.",
    technologies: ["React Native", "Firebase", "Redux", "Express"],
    image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Sentiment Analysis Tool",
    category: "Machine Learning",
    description: "A sentiment analysis tool that evaluates customer feedback and reviews to provide insights for businesses.",
    technologies: ["Python", "NLTK", "scikit-learn", "Flask"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Algorithm Visualizer",
    category: "Other",
    description: "An interactive tool that visualizes various algorithms like sorting, pathfinding, and tree traversals to aid in learning computer science concepts.",
    technologies: ["JavaScript", "D3.js", "HTML Canvas", "CSS"],
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: ProjectCategory[] = ["All", "Web Development", "Mobile Apps", "Machine Learning", "Other"];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Animate animation="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-indigo-100 text-indigo-800 rounded-full mb-6">
              MY WORK
            </span>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Featured Projects
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={400}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in various areas of computer science.
            </p>
          </Animate>
        </div>

        <Animate animation="fade-up" delay={300}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Animate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Animate
              key={project.id}
              animation="fade-up"
              delay={200 + index * 100}
            >
              <GlassCard className="h-full overflow-hidden group">
                <div className="relative h-48 mb-5 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
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

export default Projects;
