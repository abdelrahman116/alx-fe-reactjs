import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="top-0 h-12 text-center bg-green-300">
      <ul className="flex flex-row  justify-around gap-4 text-green-500 font-bold ">
        <Link to="/">
          {" "}
          <li className="text-3xl hover:text-green-500 hover:cursor-pointer h-12 rounded-t-lg  bg-white hover:scale-110 duration-200 ease-in px-2 ">
            Home
          </li>
        </Link>

        <li className="text-3xl hover:text-green-500 hover:cursor-pointer rounded-t-lg bg-white hover:scale-110 duration-200 ease-in px-2 ">
          Create a Recipie
        </li>
      </ul>
    </nav>
  );
}
