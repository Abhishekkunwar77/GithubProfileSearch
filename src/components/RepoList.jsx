import React from "react";
import { FaStar, FaCodeBranch, FaCode } from "react-icons/fa";

const RepoList = ({ repos }) => {
  if (!Array.isArray(repos) || repos.length === 0) {
    return (
      <p className="text-center text-gray-600 px-4 mt-10">
        Search to fetch data!
      </p>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12 max-w-7xl">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#607f83] mb-6">
        List of Repositories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white border border-[#607f83] rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fbb040] break-words"
              >
                {repo.name}
              </a>
            </h3>

            {repo.description && (
              <p className="text-sm text-gray-600 mt-2 break-words">
                {repo.description}
              </p>
            )}

            <div className="flex flex-wrap gap-x-4 mt-3 text-xs sm:text-sm text-gray-500 items-center">
              <span className="flex items-center gap-1">
                <FaStar className="text-[#fbb040]" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeBranch className="text-green-500" /> {repo.forks_count}
              </span>
              {repo.language && (
                <span className="flex items-center gap-1">
                  <FaCode className="text-[#607f83]" /> {repo.language}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
