import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // ✅ import here

export default function Search() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ stop reload
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(input); // ✅ direct call
      setUser(data);
    } catch (err) {
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
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
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
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
