
import React, { useState } from "react";

export const useGitHubUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");
      const user = await userRes.json();
      setUserData(user);

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
      );
      const reposData = await repoRes.json();
      setRepos(reposData);
    } catch (err) {
      setUserData(null);
      setRepos([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    fetchUser,
    userData,
    repos,
    error,
    loading,
  };
};
