import Container from "./Container";
import SectionTitle from "./SectionTitle";
import TimelineItem from "./TimelineItem";

import { education } from "../utils/educationData";

function Education() {
  return (
    <section id="education" className="py-28">
      <Container>

        <SectionTitle
          subtitle="Academic Journey"
          title="Education"
        />

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Education;