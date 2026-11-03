import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/pictures", label: "Pictures" },
];

export function Nav() {
  return (
    <nav className="mb-10 flex items-center justify-between border-b border-gray-200 pb-4">
      <NavLink to="/" className="text-lg text-gray-900 hover:text-purple-600">
        Shreya Kochar
      </NavLink>
      <ul className="flex gap-6">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 border-b-2 border-purple-400 pb-1"
                  : "text-gray-700 hover:text-purple-600"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
