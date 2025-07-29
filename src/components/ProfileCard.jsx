// src/components/ProfileCard.jsx
import React from "react";

const ProfileCard = ({ user }) => {
  if (!user) return "User Not Found!";

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto md:max-w-lg">
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-24 h-24 rounded-full mb-4 border-3 border-[#fbb040]"
        />
        {/* Name and Login */}
        <h2 className="text-2xl font-bold text-gray-800">
          {user.name || user.login}
        </h2>
        <p className="text-gray-600">@{user.login}</p>
        {/* Bio */}
        {user.bio && (
          <p className="text-gray-600 text-center mt-2">{user.bio}</p>
        )}
        {/* Stats */}
        <div className="flex space-x-6 mt-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">
              {user.followers}
            </p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">
              {user.following}
            </p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">
              {user.public_repos}
            </p>
            <p className="text-sm text-gray-500">Repos</p>
          </div>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#607f83] text-white px-4 py-2 rounded-md hover:bg-[#fbb040]"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
