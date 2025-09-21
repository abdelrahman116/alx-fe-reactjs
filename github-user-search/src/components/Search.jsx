import { useState } from "react";
import useGithubStore from "../store/githubStore";

export default function Search() {
  const [input, setInput] = useState("");
  const { user, loading, error, getUser } = useGithubStore();

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevents page reload
    if (input.trim()) {
      getUser(input);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>

      {/* ✅ Use a form with onSubmit */}
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
