import React from "react";

const HelloMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-white mb-4 tracking-wide animate-pulse">
        Hello World!
      </h1>
      <p className="text-xl text-gray-100 mb-6 italic">
        Welcome to React with Tailwind CSS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h2 className="text-white font-semibold text-center">Responsive</h2>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h2 className="text-white font-semibold text-center">Interactive</h2>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h2 className="text-white font-semibold text-center">Modern</h2>
        </div>
      </div>
      <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-6 rounded-full transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300">
        Click Me!
      </button>
    </div>
  );
};

export default HelloMessage;