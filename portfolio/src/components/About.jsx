import Container from "./Container";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="py-28">
      <Container>

        <SectionTitle
          subtitle="Who I Am"
          title="About Me"
        />

        <div className="max-w-3xl mx-auto text-center leading-9 text-slate-600">
          I'm a B.Tech Information Technology student
          passionate about Full Stack Development,
          Data Structures & Algorithms, and scalable
          software engineering.

          I enjoy solving challenging coding problems,
          building modern web applications, and learning
          new technologies every day.
        </div>

      </Container>
    </section>
  );
}

export default About;