import React from "react";

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">About</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-1">
          <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Profile Photo</span>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold">Biography</h2>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Contact</h3>
          <ul className="list-disc list-inside">
            <li>Email: contact@johina.com</li>
            <li>Instagram: @johina_art</li>
            <li>Location: City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
