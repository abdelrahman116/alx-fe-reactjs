import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "./ProfileDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Profile() {
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
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h3>Please select an option.</h3>} />
          <Route path="/profileDetails" element={<ProfileDetails />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}
