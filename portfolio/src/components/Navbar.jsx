import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
      <Container>
        <nav className="h-20 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-blue-600">&lt;</span>

            <span className="text-xl font-bold">
              Ambreesh
            </span>

            <span className="text-blue-600"> /&gt;</span>
          </a>

          {/* Desktop */}

          <ul className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    text-slate-600
                    font-medium
                    hover:text-blue-600
                    transition
                    duration-300
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <HiOutlineX />
            ) : (
              <HiOutlineMenu />
            )}
          </button>

        </nav>
      </Container>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-md">

          <ul className="flex flex-col py-4">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    px-6
                    py-4
                    hover:bg-slate-100
                    transition
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

        </div>
      )}
    </header>
  );
}

export default Navbar;