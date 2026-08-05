import Container from "./Container";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

import { skills } from "../utils/skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-50"
    >
      <Container>

        <SectionTitle
          subtitle="My Stack"
          title="Skills"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Skills;