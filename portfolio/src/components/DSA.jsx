import Container from "./Container";
import SectionTitle from "./SectionTitle";
import AchievementCard from "./AchievementCard";

import { dsa } from "../utils/dsaData";

function DSA() {
  return (
    <section className="py-28 bg-slate-50">
      <Container>

        <SectionTitle
          subtitle="Problem Solving"
          title="Data Structures & Algorithms"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {dsa.map((item) => (
            <AchievementCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default DSA;