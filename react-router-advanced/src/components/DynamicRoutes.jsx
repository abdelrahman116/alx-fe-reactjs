// import {
//   Routes,
//   Route,
//   Link,
//   useParams,
//   BrowserRouter as Router,
// } from "react-router-dom";
// export default function DynamicRoutes() {
//   const ProfileID = () => {
//     // useParams hook is used to access route parameters
//     const { profileId } = useParams();
//     return <h3>Profile ID: {profileId}</h3>;
//   };
//   return (
//     <>
//       <Router>
//         <div>
//           <nav>
//             <Link to="/profile/1">Profile 1</Link>
//             <Link to="/profile/2">Profile 2</Link>
//           </nav>
//           <Routes>
//             {/* Dynamic route with a userId parameter */}
//             <Route path="/profile/:profileId" element={<ProfileID />} />
//             {/* Default route to Home component */}
//             <Route path="/">
//               <h2>Home</h2>
//             </Route>
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

import {
  Routes,
  Route,
  Link,
  useParams,
  BrowserRouter as Router,
} from "react-router-dom";

export default function DynamicRoutes() {
  const ProfileID = () => {
    const { profileId } = useParams();
    return <h3>Profile ID: {profileId}</h3>;
  };

  return (
    <Router>
      <div>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/profile/1">Profile 1</Link>
          <Link to="/profile/2">Profile 2</Link>
        </nav>

        <Routes>
          {/* Dynamic route with a userId parameter */}
          <Route path="/profile/:profileId" element={<ProfileID />} />

          {/* Default route to Home component */}
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
