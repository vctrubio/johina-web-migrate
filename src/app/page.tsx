"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [photoHovered, setPhotoHovered] = useState(false);
  const [descriptionHovered, setDescriptionHovered] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(null);

  // Career highlights data
  const highlights = [
    { id: 1, text: "Luxury Hotels", color: "bg-amber-500" },
    { id: 2, text: "Royal Palaces", color: "bg-purple-600" },
    { id: 3, text: "Embassies", color: "bg-blue-500" },
    { id: 4, text: "UNESCO Projects", color: "bg-teal-500" },
    { id: 5, text: "Featured in Architectural Digest", color: "bg-red-500" }
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Banner placeholder with artistic gradient */}
      <div className="w-full h-48 sm:h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg flex items-center justify-center text-white shadow-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/texture-overlay.png')] opacity-20"></div>
        <div className="z-10 text-center p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Johina</h1>
          <p className="text-lg sm:text-xl">Transforming Spaces Through Art Since 1987</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Photo component with hover effect */}
        <div 
          className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
            photoHovered ? "scale-105 shadow-2xl" : ""
          }`}
          onMouseEnter={() => setPhotoHovered(true)}
          onMouseLeave={() => setPhotoHovered(false)}
        >
          <div className="h-80 bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
            {/* Replace with actual artist image when available */}
            <span className="text-gray-500 dark:text-gray-400">
              {photoHovered ? "Artist at Work" : "Featured Work"}
            </span>
            {photoHovered && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm">Explore Johina's extensive portfolio of murals and artistic projects</p>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">Artistic Journey</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              From historic restorations to contemporary murals, explore the artistry that spans continents.
            </p>
            <Link 
              href="/murales" 
              className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Description component with enhanced hover effect */}
        <div 
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 ${
            descriptionHovered ? "border-2 border-indigo-500 shadow-xl" : "border border-transparent"
          }`}
          onMouseEnter={() => setDescriptionHovered(true)}
          onMouseLeave={() => setDescriptionHovered(false)}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-2">About Johina</span>
            <div className="h-1 flex-grow bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </h2>
          
          <p className="mb-4 text-gray-800 dark:text-gray-200 leading-relaxed">
            Johina, a muralist since <span className="font-bold text-indigo-600 dark:text-indigo-400">1987</span>, has painted for luxury hotels, royal palaces, embassies, and private estates across 
            <span className="font-bold text-purple-600 dark:text-purple-400"> England, France, and Spain</span>.
          </p>
          
          <p className="mb-4 text-gray-800 dark:text-gray-200 leading-relaxed">
            She has led restoration projects in heritage sites worldwide, working with 
            <span className="font-bold text-teal-600 dark:text-teal-400"> UNESCO, AECID</span>, and ministries of culture. Her designs appear in 
            <span className="font-bold text-pink-600 dark:text-pink-400"> Architectural Digest, Elle Deco</span>, and Zara packaging.
          </p>
          
          <p className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
            With a <span className="font-bold text-amber-600 dark:text-amber-400">Master's from Christie's</span> and a degree in restoration, she brings history to life through murals, fabric patterns, and stage backgrounds.
          </p>
          
          {/* Career highlights pills */}
          <div className="mt-6">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Career Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {highlights.map(highlight => (
                <span 
                  key={highlight.id}
                  className={`px-3 py-1 rounded-full text-white text-sm cursor-pointer transition-transform ${highlight.color} ${
                    activeHighlight === highlight.id ? 'scale-110 shadow-md' : ''
                  }`}
                  onMouseEnter={() => setActiveHighlight(highlight.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                >
                  {highlight.text}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <Link 
              href="/about" 
              className="text-indigo-500 hover:text-indigo-600 transition-colors font-medium flex items-center"
            >
              Read full bio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <div className={`text-green-600 dark:text-green-400 transition-opacity duration-300 flex items-center text-sm ${
              descriptionHovered ? "opacity-100" : "opacity-0"
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Internationally recognized artist
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured projects section */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map(index => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
              <div className="p-4">
                <h3 className="font-medium">Project {index}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location • Year</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link 
            href="/murales" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg"
          >
            Explore All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
