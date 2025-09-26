import { useState } from "react";
import { fetchUserData } from "../services/githubService"; //

export default function Search() {
  const [username, setName] = useState("");
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);
  const [repo, setRepo] = useState(0);
  const [locData, setLocData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOn, setIsOn] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsOn(event.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ stop reload
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username); // ✅ direct call
      setUser(data);
    } catch {
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <label className="inline-flex items-center mb-4">
          <input
            type="checkbox"
            checked={isOn}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Start Advanced Search</span>
        </label>

        {isOn && (
          <div className="mb-4 space-y-3">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="number"
              placeholder="Minimum Repositories"
              value={repo}
              onChange={(e) => setRepo(Number(e.target.value))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && (
        <p style={{ color: "red" }}>Looks like we cant find the user</p>
      )}

      {user && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.map((user) => (
            <div key={user.id} className="bg-white shadow rounded p-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-center text-lg font-semibold mt-2">
                {user.login}
              </h3>
              {user.location && (
                <p className="text-center">Location: {user.location}</p>
              )}
              {user.public_repos !== undefined && (
                <p className="text-center">Repositories: {user.public_repos}</p>
              )}
              <div className="text-center mt-2">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
