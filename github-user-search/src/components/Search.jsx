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

      <form onSubmit={handleSubmit}>
        <input
          className=" rounded-lg border-black-700"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Search</button>
        <label>
          <input
            type="checkbox"
            checked={isOn} // Bind the checkbox's checked state to the React state
            onChange={handleCheckboxChange} // Attach the change handler
          />
          Start Advanced Search
        </label>
        {isOn ? (
          <div className="flex flex-col">
            <input
              className="border-1 rounded-lg border-black-700"
              type="text"
              placeholder="Enter GitHub user's Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="number"
              className="border-1 rounded-lg border-black-700 m-2"
              placeholder="Least Repossitories Count"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
      </form>

      {loading && <p>Loading...</p>}
      {error && (
        <p style={{ color: "red" }}>Looks like we cant find the user</p>
      )}

      {user && (
        <div style={{ marginTop: "1rem" }}>
          <h3>{user.login}</h3>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          {user.location ? <p>Location: {user.location}</p> : <></>}
          <p>Total Count: {user.total_count}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
