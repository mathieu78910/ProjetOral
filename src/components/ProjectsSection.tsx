import React, { useState } from "react";
import { ExternalLink, FileSpreadsheet } from "lucide-react";

interface Project {
  id: string;
  title: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  excelFile: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center title-gradient">
          Réalisations professionnelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="hover-card overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-400 mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div
                  className={`${
                    selectedProject === project.id ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-300 whitespace-pre-line mb-4">
                    {project.details}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.id ? null : project.id
                      )
                    }
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    {selectedProject === project.id
                      ? "Voir moins"
                      : "Voir plus"}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                  {project.excelFile && (
                    <a
                      href={project.excelFile}
                      download
                      className="button-style flex items-center px-4 py-2"
                    >
                      <FileSpreadsheet className="w-5 h-5 mr-2" />
                      Excel
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
