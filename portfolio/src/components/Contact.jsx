import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ContactCard from "./ContactCard";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-50"
    >
      <Container>

        <SectionTitle
          subtitle="Let's Connect"
          title="Contact Me"
        />

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Let's Build Something Amazing.
            </h3>

            <p className="text-slate-600 leading-8 mb-8">
              I'm currently looking for Software Engineering
              Internship opportunities and exciting projects.
              Feel free to reach out.
            </p>

            <div className="space-y-5">

              <ContactCard
                icon={MdEmail}
                title="Email"
                value="ambreeshsingh2003@gmail.com"
                link="mailto:ambreeshsingh2003@gmail.com"
              />

              <ContactCard
                icon={FaGithub}
                title="GitHub"
                value="github.com/ambreeshsingh"
                link="https://github.com/ambreeshsingh"
              />

              <ContactCard
                icon={FaLinkedin}
                title="LinkedIn"
                value="linkedin.com/in/..."
                link="https://linkedin.com/in/YOUR-LINK"
              />

            </div>

          </div>

          {/* Right Side */}

          <form className="bg-white p-8 rounded-3xl shadow-lg">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}

export default Contact;