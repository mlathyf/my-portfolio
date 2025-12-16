import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
