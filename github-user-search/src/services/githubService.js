import axios from "axios";

export async function fetchUserData(username, location = "", minRepos = 0) {
  let query = "";
  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
    {}
  );

  return response.data;
}
