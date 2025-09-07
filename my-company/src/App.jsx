import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Home from "./components/Home";
import Contact from "./components/Contact";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Pages will render here */}
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // layout wraps all routes
      children: [
        { path: "/", element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
