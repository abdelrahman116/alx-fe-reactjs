import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import DynamicRoutes from "./components/DynamicRoutes";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <div>
      {" "}
      <Router>
        <div>
          <h2>Dashboard</h2>
          <ul>
            <li>
              <Link to="/profileDetails">Profile-Details</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<h3>Please select an option.</h3>} />
            <Route path="/profileDetails" element={<ProfileDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
