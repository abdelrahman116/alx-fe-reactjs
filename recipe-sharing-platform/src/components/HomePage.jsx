import { useEffect, useState } from "react";
import myData from "../data.json";
import { Link } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(myData); // already parsed JSON, no .json()
  }, []);

  if (data.length === 0) {
    return <div>Loading data...</div>;
  } // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <nav className="top-0 h-7 text-center bg-green-300">
        <ul className="flex flex-row  justify-around gap-4 text-green-500 font-bold ">
          {/* <Link to="/Home"> */}
          <li className="hover:text-green-500 hover:cursor-pointer h-7 rounded-t-lg  bg-white hover:scale-110 px-2 ">
            Home
          </li>
          {/* </Link> */}
          <li className="hover:text-green-500 hover:cursor-pointer  bg-white hover:scale-110 px-2 ">
            Details
          </li>
          <li className="hover:text-green-500 hover:cursor-pointer  bg-white hover:scale-110 px-2 ">
            Create a Recipie
          </li>
        </ul>
      </nav>
      <img
        className="hover:animate-spin"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTMuNjE2di0zLjIzMmMtMS42NTEtLjU4Ny0yLjY5NC0uNzUyLTMuMjE5LTIuMDE5di0uMDAxYy0uNTI3LTEuMjcxLjEtMi4xMzQuODQ3LTMuNzA3bC0yLjI4NS0yLjI4NWMtMS41NjEuNzQyLTIuNDMzIDEuMzc1LTMuNzA3Ljg0N2gtLjAwMWMtMS4yNjktLjUyNi0xLjQzNS0xLjU3Ni0yLjAxOS0zLjIxOWgtMy4yMzJjLS41ODIgMS42MzUtLjc0OSAyLjY5Mi0yLjAxOSAzLjIxOWgtLjAwMWMtMS4yNzEuNTI4LTIuMTMyLS4wOTgtMy43MDctLjg0N2wtMi4yODUgMi4yODVjLjc0NSAxLjU2OCAxLjM3NSAyLjQzNC44NDcgMy43MDctLjUyNyAxLjI3MS0xLjU4NCAxLjQzOC0zLjIxOSAyLjAydjMuMjMyYzEuNjMyLjU4IDIuNjkyLjc0OSAzLjIxOSAyLjAxOS41MyAxLjI4Mi0uMTE0IDIuMTY2LS44NDcgMy43MDdsMi4yODUgMi4yODZjMS41NjItLjc0MyAyLjQzNC0xLjM3NSAzLjcwNy0uODQ3aC4wMDFjMS4yNy41MjYgMS40MzYgMS41NzkgMi4wMTkgMy4yMTloMy4yMzJjLjU4Mi0xLjYzNi43NS0yLjY5IDIuMDI3LTMuMjIyaC4wMDFjMS4yNjItLjUyNCAyLjEyLjEwMSAzLjY5OC44NTFsMi4yODUtMi4yODZjLS43NDQtMS41NjMtMS4zNzUtMi40MzMtLjg0OC0zLjcwNi41MjctMS4yNzEgMS41ODgtMS40NCAzLjIyMS0yLjAyMXptLTEyIDIuMzg0Yy0yLjIwOSAwLTQtMS43OTEtNC00czEuNzkxLTQgNC00IDQgMS43OTEgNCA0LTEuNzkxIDQtNCA0eiIvPjwvc3ZnPg=="
      ></img>
      <div>
        <ul className="grid md:grid-cols-3 gap-4 sm:grid-cols-2  place-items-center">
          {data.map((item) => (
            <div className="mt-5">
              <li key={item.id}>
                <div className="max-w-80 max-h-auto flex flex-col items-center text-center gap-1.5 rounded-2xl shadow-2xl bg-green-200 hover:scale-110 duration-200 ease-in ">
                  <h2>{item.title}</h2>

                  <p>{item.summary}</p>
                  <img
                    src={item.image}
                    alt=""
                    className="max-w-70 h-50 rounded-2xl"
                  />
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
