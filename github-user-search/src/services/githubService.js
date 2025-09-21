import axios from "axios";

export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_KEY}`,
    },
  });
  return response.data;
}
