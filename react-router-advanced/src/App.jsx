import ProfileSettings from "./components/ProfileSettings";
import ProfileDetails from "./components/ProfileDetails";
import ProtectedRoute from "./components/ProtectedRoute";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function App() {
  // Component to handle dynamic blog posts
  const BlogPost = () => {
    const { id } = useParams();
    return <h3>Blog ID: #{id}</h3>;
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/profileDetails">Profile Details</Link>
          <Link to="/profileSettings">Profile Settings</Link>
          <Link to="/blog/1">Blog Post 1</Link>
          <Link to="/blog/2">Blog Post 2</Link>
          <Link to="/protectedRoute">Protected</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h3>Please select an option.</h3>} />
          <Route path="/profileDetails" element={<ProfileDetails />} />
          <Route
            path="/protectedRoute"
            element={
              <PrivateRoute>
                <ProtectedRoute />
              </PrivateRoute>
            }
          />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}
