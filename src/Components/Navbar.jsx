import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo (2).png";

const Navbar = () => {
  return (
    <nav className="bg-[#E4F1F6] shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="GLB.Connect Logo" className="h-12" />
        </Link>
        
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-gray-700 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link to="/qna" className="text-gray-700 hover:text-blue-600">Q&A Threads</Link>
        <Link to="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
        <Link to="/resource-sharing" className="text-gray-700 hover:text-blue-600">Resource Sharing</Link>
        <Link to="/sessions" className="text-gray-700 hover:text-blue-600">Sessions</Link>
        <Link to="/alumni-network" className="text-gray-700 hover:text-blue-600">Alumni Network</Link>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
