import { useState } from "react";
import useGithubStore from "../services/githubService";
export default function Search() {
  const [input, setInput] = useState("");
  const { user, loading, error, getUser } = useGithubStore();
  const handleSearch = () => {
    if (input.trim()) {
      getUser(input);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} alt={user.login} width="100" />
        </div>
      )}
    </div>
  );
}
