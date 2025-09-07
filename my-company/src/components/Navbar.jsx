import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // ✅ added return
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
