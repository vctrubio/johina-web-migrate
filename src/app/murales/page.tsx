"use client";

import React, { useState, useMemo } from "react";
import { HiLocationMarker, HiTag, HiCalendar, HiHeart, HiShare, HiSearch } from "react-icons/hi";

// Sample mural data
const murals = [
  {
    id: 1,
    title: "Urban Dreams",
    image: "/placeholder-mural-1.jpg", // Replace with actual images
    description: "A vibrant exploration of urban life through color and form.",
    location: "Downtown Arts District",
    date: "March 2023",
    tags: ["Urban", "Contemporary", "Colorful"]
  },
  {
    id: 2,
    title: "Nature's Embrace",
    image: "/placeholder-mural-2.jpg",
    description: "Integration of natural elements within city structures.",
    location: "Riverside Park",
    date: "July 2023",
    tags: ["Nature", "Environmental", "Public Space"]
  },
  {
    id: 3,
    title: "Cultural Heritage",
    image: "/placeholder-mural-3.jpg",
    description: "Celebrating the diverse cultural influences of our community.",
    location: "Heritage Square",
    date: "November 2023",
    tags: ["Culture", "Heritage", "Diversity"]
  },
  {
    id: 4,
    title: "Future Visions",
    image: "/placeholder-mural-4.jpg",
    description: "A glimpse into a potential future through abstract shapes.",
    location: "Technology Park",
    date: "January 2024",
    tags: ["Futuristic", "Abstract", "Technology"]
  },
  {
    id: 5,
    title: "Ocean Memories",
    image: "/placeholder-mural-5.jpg",
    description: "Reflecting on our connection to the sea and marine life.",
    location: "Harbor View",
    date: "April 2024",
    tags: ["Ocean", "Environmental", "Blue"]
  },
  {
    id: 6,
    title: "Community Voices",
    image: "/placeholder-mural-6.jpg",
    description: "A collaborative mural created with local community members.",
    location: "Community Center",
    date: "May 2024",
    tags: ["Community", "Collaborative", "Social"]
  }
];

// Mural card component
const MuralCard = ({ mural }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with overlay on hover */}
      <div className="relative h-56 overflow-hidden">
        <div 
          className="h-full w-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
          style={{
            backgroundImage: `url('${mural.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span className="text-gray-500 dark:text-gray-400">
            {/* This text only shows if the image fails to load */}
            Mural Image
          </span>
        </div>
        
        {/* Hover overlay with additional info */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end text-white transform transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-sm font-light flex items-center gap-1">
            <HiCalendar className="inline" />
            <span>{mural.date}</span>
          </div>
          <p className="text-sm mt-1">{mural.description}</p>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{mural.title}</h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
          <HiLocationMarker className="mr-1 text-red-500" />
          <span className="text-sm">{mural.location}</span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {mural.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full flex items-center"
            >
              <HiTag className="mr-1 text-blue-500" />
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
          <button 
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <HiHeart className={`${isLiked ? 'fill-current' : 'stroke-current'}`} />
            <span>{isLiked ? 'Liked' : 'Like'}</span>
          </button>
          
          <button className="flex items-center gap-1 px-3 py-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
            <HiShare className="stroke-current" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Murales() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter murals based on search query
  const filteredMurals = useMemo(() => {
    if (!searchQuery.trim()) {
      return murals;
    }
    
    const query = searchQuery.toLowerCase().trim();
    
    return murals.filter(mural => 
      // Search by title
      mural.title.toLowerCase().includes(query) || 
      // Search by location
      mural.location.toLowerCase().includes(query) || 
      // Search by description
      mural.description.toLowerCase().includes(query) ||
      // Search by tags
      mural.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Further filter based on active filter button
  const displayMurals = useMemo(() => {
    if (activeFilter === "all") return filteredMurals;
    
    if (activeFilter === "recent") {
      // Sort by date (newest first)
      return [...filteredMurals].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }
    
    if (activeFilter === "popular") {
      // This would ideally be based on likes or views
      // For now, just a different sort as an example
      return [...filteredMurals].sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return filteredMurals;
  }, [filteredMurals, activeFilter]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Murales</h1>
        
        <div className="flex gap-2">
          <button 
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeFilter === "all" 
                ? "bg-blue-500 text-white" 
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeFilter === "recent" 
                ? "bg-blue-500 text-white" 
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveFilter("recent")}
          >
            Recent
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeFilter === "popular" 
                ? "bg-blue-500 text-white" 
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveFilter("popular")}
          >
            Popular
          </button>
        </div>
      </div>
      
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Explore our collection of murals from around the world. Each piece tells a unique story and transforms public spaces.
      </p>
      
      {/* Search bar */}
      <div className="relative mt-2 mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <HiSearch className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search murals by title, location, or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            className="absolute right-2.5 bottom-2.5 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
            onClick={() => setSearchQuery("")}
          >
            Clear
          </button>
        )}
      </div>
      
      {/* Search results count */}
      {searchQuery && (
        <p className="text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-2">
          Found {displayMurals.length} {displayMurals.length === 1 ? 'mural' : 'murals'} matching your search
        </p>
      )}
      
      {/* Empty state */}
      {displayMurals.length === 0 && (
        <div className="text-center py-10 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">No murals found</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("all");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
      
      {/* Mural card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
        {displayMurals.map((mural) => (
          <MuralCard key={mural.id} mural={mural} />
        ))}
      </div>
    </div>
  );
}
