import React from "react";

const projects = [
  {
    id: 1,
    name: "The Mellow Coder",
    imageSrc:
      "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
    used: "MongoDB, ReactJs",
    description: "A restaurant website.",
  },

  {
    id: 2,
    name: "React Portfolio",
    imageSrc:
      "https://fastly.picsum.photos/id/366/4000/3000.jpg?hmac=zphhHOH9ofToN2jNHd8z-nc98NrBd8y2okWXEXetLDg",
    used: "ThreeJS, TailwindCSS",
    description: "A personal portfolio website.",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <div className="mx-auto text-center max-w-2xl px-6 py-12">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-md p-4">
              <img
                src={project.imageSrc}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold">
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p className="text-sm mt-2">{project.description}</p>
              <p className="text-xs mt-1">Tech used: {project.used}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
