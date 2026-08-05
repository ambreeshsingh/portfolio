import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "../utils/projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <Container>

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;