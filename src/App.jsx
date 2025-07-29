import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RepoList from "./components/RepoList";
import ProfileCard from "./components/ProfileCard";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";
import Contact from "./components/Contact";
import { Toaster, toast } from "react-hot-toast";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔁 Restore from localStorage on initial mount
  useEffect(() => {
    const savedUser = localStorage.getItem("github_user");
    const savedRepos = localStorage.getItem("github_repos");

    if (savedUser && savedRepos) {
      setUser(JSON.parse(savedUser));
      setRepos(JSON.parse(savedRepos));
    }
  }, []);

  const handleSearch = async (username) => {
    const trimmedUsername = username.trim().toLowerCase();

    if (!trimmedUsername) {
      toast.error("Please enter a valid GitHub username");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const userResponse = await fetch(
        `https://api.github.com/users/${trimmedUsername}`,
        { headers }
      );

      if (!userResponse.ok) {
        throw new Error(
          userResponse.status === 403
            ? "GitHub API rate limit exceeded. Please try again later."
            : `User not found !`
        );
      }

      const userData = await userResponse.json();
      setUser(userData);
      localStorage.setItem("github_user", JSON.stringify(userData)); // 💾 Save user

      const reposResponse = await fetch(
        `https://api.github.com/users/${trimmedUsername}/repos`,
        { headers }
      );

      if (!reposResponse.ok) {
        throw new Error(
          reposResponse.status === 403
            ? "GitHub API rate limit exceeded. Please try again later."
            : `Failed to fetch repositories: ${reposResponse.statusText}`
        );
      }

      const reposData = await reposResponse.json();
      setRepos(reposData);
      localStorage.setItem("github_repos", JSON.stringify(reposData)); // 💾 Save repos
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setUser(null);
      setRepos([]);
      localStorage.removeItem("github_user"); // 🧼 Clear on error
      localStorage.removeItem("github_repos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <SearchBar onSearch={handleSearch} />
                  {loading ? (
                    <Loader />
                  ) : error ? (
                    <div className="text-center text-red-600">{error}</div>
                  ) : (
                    <>
                      {user && <ProfileCard user={user} />}
                      <RepoList repos={repos} />
                    </>
                  )}
                </div>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
