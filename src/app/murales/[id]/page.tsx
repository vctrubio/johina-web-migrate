"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowLeft, HiLocationMarker, HiTag, HiCalendar, HiPhotograph, HiInformationCircle } from 'react-icons/hi';
import { useParams } from 'next/navigation';

// Sample detailed mural data - in a real app, this would come from an API
const muralsData = {
  1: {
    id: 1,
    title: "Urban Dreams",
    description: "A vibrant exploration of urban life through color and form. This mural represents the dynamic energy of city life, with abstract elements that symbolize the movement and diversity found in modern urban environments. Created using a mix of spray paint and acrylics to achieve depth and texture.",
    category: "Urban Art",
    location: "Downtown Arts District",
    address: "123 Main St, Art City",
    date: "March 2023",
    client: "City Arts Commission",
    size: "12m x 8m",
    materials: "Acrylic paint, spray paint, weather-resistant coating",
    tags: ["Urban", "Contemporary", "Colorful"],
    photos: [
      { id: 1, url: "/placeholder-mural-1.jpg", caption: "Full view of the mural" },
      { id: 2, url: "/placeholder-detail-1.jpg", caption: "Detail of central motif" },
      { id: 3, url: "/placeholder-process-1.jpg", caption: "Work in progress" },
      { id: 4, url: "/placeholder-context-1.jpg", caption: "Mural in context" },
    ]
  },
  2: {
    id: 2,
    title: "Nature's Embrace",
    description: "Integration of natural elements within city structures. This mural was designed to bring elements of the natural world into an urban setting, creating a dialogue between human-made structures and organic forms. Botanical imagery and wildlife are rendered in rich detail against a backdrop that mimics the surrounding architecture.",
    category: "Environmental",
    location: "Riverside Park",
    address: "45 River Walk, Green City",
    date: "July 2023",
    client: "Environmental Protection Agency",
    size: "15m x 6m",
    materials: "Mineral pigments, eco-friendly paints",
    tags: ["Nature", "Environmental", "Public Space"],
    photos: [
      { id: 1, url: "/placeholder-mural-2.jpg", caption: "Complete mural" },
      { id: 2, url: "/placeholder-detail-2.jpg", caption: "Detail of flora elements" },
      { id: 3, url: "/placeholder-process-2.jpg", caption: "Sketching phase" },
      { id: 4, url: "/placeholder-aerial-2.jpg", caption: "Aerial view" },
    ]
  },
  // Additional murals would be added here in the same format
};

// Placeholder for missing images
const ImageWithFallback = ({ src, alt, ...props }) => {
  return (
    <div className="relative w-full h-full">
      <div 
        className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400"
        style={{
          backgroundImage: `url('${src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <span className="sr-only">{alt}</span>
        <HiPhotograph className="w-10 h-10 opacity-50" />
      </div>
    </div>
  );
};

export default function MuralDetail() {
  const params = useParams();
  const muralId = params.id;
  
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  
  // In a real app, you'd fetch this data from an API based on the ID
  // For now, we'll use our sample data
  const mural = muralsData[muralId] || {
    id: 0,
    title: "Mural Not Found",
    description: "This mural information is not available.",
    category: "Unknown",
    location: "Unknown",
    address: "",
    date: "",
    client: "",
    size: "",
    materials: "",
    tags: [],
    photos: []
  };
  
  return (
    <div className="flex flex-col">
      {/* Back navigation */}
      <Link 
        href="/murales" 
        className="flex items-center text-blue-500 hover:text-blue-700 transition-colors mb-4"
      >
        <HiArrowLeft className="mr-2" /> Back to Murales
      </Link>
      
      {/* Mural title */}
      <h1 className="text-3xl font-bold mb-2">{mural.title}</h1>
      
      {/* Location and date info */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center">
          <HiLocationMarker className="mr-1 text-red-500" />
          <span>{mural.location}</span>
          {mural.address && <span className="ml-1">({mural.address})</span>}
        </div>
        <div className="flex items-center">
          <HiCalendar className="mr-1 text-blue-500" />
          <span>{mural.date}</span>
        </div>
        <div className="flex items-center">
          <HiTag className="mr-1 text-green-500" />
          <span>{mural.category}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Photo gallery section */}
        <div className="lg:col-span-2">
          {/* Main large photo */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4 h-96 relative">
            {mural.photos && mural.photos.length > 0 ? (
              <ImageWithFallback 
                src={mural.photos[activePhotoIndex].url} 
                alt={mural.photos[activePhotoIndex].caption || mural.title} 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-500 dark:text-gray-400 flex flex-col items-center">
                  <HiPhotograph className="w-16 h-16 mb-2 opacity-50" />
                  No photos available
                </span>
              </div>
            )}
          </div>
          
          {/* Photo caption */}
          {mural.photos && mural.photos.length > 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {mural.photos[activePhotoIndex].caption}
            </p>
          )}
          
          {/* Photo thumbnails */}
          {mural.photos && mural.photos.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mb-6">
              {mural.photos.map((photo, index) => (
                <button 
                  key={photo.id}
                  className={`h-24 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden transition-all ${
                    activePhotoIndex === index 
                      ? 'ring-2 ring-blue-500' 
                      : 'hover:opacity-80'
                  }`}
                  onClick={() => setActivePhotoIndex(index)}
                >
                  <ImageWithFallback src={photo.url} alt={photo.caption || `Photo ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
          
          {/* Description */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
            <h2 className="text-xl font-bold mb-3">Description</h2>
            <p className="text-gray-700 dark:text-gray-300">{mural.description}</p>
          </div>
        </div>
        
        {/* Details section */}
        <div className="lg:col-span-1">
          {/* Mural details */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <HiInformationCircle className="mr-2 text-blue-500" />
              Details
            </h2>
            
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {mural.client && (
                <div className="py-3">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">{mural.client}</dd>
                </div>
              )}
              
              {mural.size && (
                <div className="py-3">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Dimensions</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">{mural.size}</dd>
                </div>
              )}
              
              {mural.materials && (
                <div className="py-3">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Materials</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">{mural.materials}</dd>
                </div>
              )}
            </div>
          </div>
          
          {/* Tags */}
          {mural.tags && mural.tags.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {mural.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full flex items-center"
                  >
                    <HiTag className="mr-1 text-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
