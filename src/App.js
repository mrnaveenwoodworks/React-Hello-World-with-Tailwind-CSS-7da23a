import React from "react";
import HelloMessage from "./components/HelloMessage";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-300">
            React + Tailwind Demo
          </h2>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">About</a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        
        <HelloMessage />
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Hello World React App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;