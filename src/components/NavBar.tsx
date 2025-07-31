import { navLinks } from "../utilities/utilitiy-arrays";

export default function NavBar() {
  return (
    <nav>
      <ul>
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a href="#"> {nav.link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
