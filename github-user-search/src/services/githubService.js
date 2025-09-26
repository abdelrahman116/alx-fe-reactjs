import axios from "axios";

export async function fetchUserData(username, location = "", minRepos = 0) {
  try {
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    // API returns an array of users in response.data.items
    return response.data.items;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user data");
  }
}
