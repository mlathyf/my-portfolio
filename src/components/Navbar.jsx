import { navLinks } from "../constants";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full z-10 p-6">
      <a href="#" className="font-bold text-xl">
        mlathyf
      </a>

      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-blue-500 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
