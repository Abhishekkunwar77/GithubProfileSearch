import React, { useState } from "react";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  const trimmed = username.trim();
  if (trimmed.length < 1) {
    toast.error("Please enter a username");
    return;
  }
  onSearch(trimmed);
  setUsername("");
};


  return (
    <div className="flex justify-center w-full px-4 mb-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row w-full max-w-lg gap-2 sm:gap-0 overflow-hidden"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-grow px-4 py-3 
            rounded-t-lg sm:rounded-t-none sm:rounded-l-[20px] 
            sm:border-r-0 border border-gray-300"
        />
        <button
          type="submit"
          className="search-bottom px-6 py-3 
            bg-[#607f83] hover:bg-[#fbb040] text-white font-medium 
            transition-colors duration-300 
            rounded-b-lg sm:rounded-b-none sm:rounded-r-[20px] hover:cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
