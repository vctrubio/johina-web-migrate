"use client";

import React, { useState } from "react";
import { 
  HiOutlineBriefcase, 
  HiOutlineAcademicCap, 
  HiOutlineGlobe, 
  HiOutlineOfficeBuilding, 
  HiOutlinePhotograph,
  HiOutlineHome
} from "react-icons/hi";
import { 
  HiPaintBrush,  // Using HiPaintBrush instead of HiOutlinePaintBrush
} from "react-icons/hi2"; // Note the hi2 for newer icons

import Image from "next/image";

export default function About() {
  // State for hover effects
  const [activeSection, setActiveSection] = useState(null);
  const [expandedSection, setExpandedSection] = useState("career");

  // Summary phrases that capture Johina's essence
  const summaryPhrases = [
    "A master muralist with a legacy spanning three decades and three countries",
    "Bringing heritage to life through artistry, restoration, and vision",
    "Where royal palaces, luxury resorts, and cultural treasures meet artistic excellence"
  ];

  // Timeline events with corrected icon imports
  const careerTimeline = [
    { year: "1987", event: "Began career as a muralist in England", icon: <HiPaintBrush /> },
    { year: "1992-1996", event: "Degree in painting and wood restoration at CEROA Art School, Madrid", icon: <HiOutlineAcademicCap /> },
    { year: "2000s", event: "Restoration work at Royal Palace of Madrid (1738)", icon: <HiOutlineBriefcase /> },
    { year: "2010s", event: "Projects sponsored by UNESCO", icon: <HiOutlineGlobe /> },
    { year: "Present", event: "International collaborations and luxury commissions", icon: <HiOutlineBriefcase /> }
  ];
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Hero section with softer gradient background */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 h-64 md:h-80">
        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Johina</h1>
          
          {/* Animated phrases */}
          <div className="h-16 overflow-hidden relative">
            {summaryPhrases.map((phrase, index) => (
              <p 
                key={index} 
                className="text-lg md:text-xl text-white opacity-80 absolute transition-transform duration-1000 ease-in-out"
                style={{ 
                  transform: `translateY(${activeSection === 'summary' ? index * 100 : 0}%)`,
                  opacity: activeSection === 'summary' ? (index === 0 ? 1 : 0.3) : 0.8
                }}
              >
                {phrase}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content in columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile photo and credentials */}
        <div 
          className="md:col-span-1"
          onMouseEnter={() => setActiveSection('profile')}
          onMouseLeave={() => setActiveSection(null)}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow">
            <div className="relative h-80 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-gray-700 dark:to-gray-800">
              {/* Replace with actual photo when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  Johina
                </span>
              </div>
              
              {/* Overlay with animation on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  activeSection === 'profile' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-2">Johina</h3>
                  <p className="text-sm opacity-90">Master Muralist & Restoration Expert</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineAcademicCap className="text-indigo-400 dark:text-indigo-500 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-white">Master's Degree</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Christie's, London (Art History)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <HiOutlineAcademicCap className="text-indigo-500 text-xl" />
                <div>
                  <h3 className="font-semibold">Degree</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CEROA Art School, Madrid (1992-1996)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <HiOutlineGlobe className="text-indigo-500 text-xl" />
                <div>
                  <h3 className="font-semibold">Active In</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">England, France, Spain & Latin America</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact card */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-700 dark:text-white">
              <span>Contact</span>
              <div className="h-1 flex-grow bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 rounded-full ml-4"></div>
            </h3>
            
            <div className="space-y-4">
              <a href="mailto:contact@johina.com" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contact@johina.com</span>
              </a>
              
              <a href="https://instagram.com/johina_art" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <span>@johina_art</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Biography sections */}
        <div className="md:col-span-2 space-y-8">
          {/* Expandable biography sections */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            {/* Section tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-700">
              <button 
                onClick={() => toggleSection('career')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  expandedSection === 'career' 
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 dark:text-indigo-300' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                Career
              </button>
              <button 
                onClick={() => toggleSection('restoration')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  expandedSection === 'restoration' 
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Restoration
              </button>
              <button 
                onClick={() => toggleSection('collaborations')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  expandedSection === 'collaborations' 
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Collaborations
              </button>
            </div>
            
            {/* Career section */}
            <div className={`p-6 transition-all duration-300 ${expandedSection === 'career' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden p-0'}`}>
              <p className="mb-6 leading-relaxed">
                Johina began her career as a muralist in England in 1987. Since then, she has been painting murals mainly in England, France and Spain for private clients, international decorators, heritage buildings, luxury hotels, homes, and private palaces. Her prestigious commissions include work for the Royal Palace of Madrid (1738), Palace of El Pardo (1406), Royal Palace of La Granja Segovia (1721), and Palacio del Marqués de la Concordia.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Her expertise extends to diplomatic venues such as the Saudi Arabian Embassy and Swedish Embassy, as well as luxury resorts like Finca Cortesín in Marbella, restaurants, shops, and more.
              </p>
              
              {/* Timeline visualization */}
              <div className="relative border-l border-indigo-200 dark:border-indigo-900 ml-3 pl-8 py-4 mt-8">
                {careerTimeline.map((item, index) => (
                  <div key={index} className="mb-10 relative">
                    <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-500 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="mb-1 text-sm font-bold text-indigo-600 dark:text-indigo-400">{item.year}</div>
                    <div className="text-gray-700 dark:text-gray-300">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Restoration section */}
            <div className={`p-6 transition-all duration-300 ${expandedSection === 'restoration' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden p-0'}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                  <HiOutlinePhotograph className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Heritage Restoration</h3>
                  <p className="leading-relaxed">
                    Johina has directed restoration campaigns in heritage buildings and museums in Spain and Latin America. She works regularly for international agencies such as la AECID (Spanish Agency of International Cooperation for Development) providing courses of restoration techniques and mural painting for National Heritage institutions of Cuba, collaborating with the Ministry of Culture from El Salvador, as well as with the Spanish Ministry of Culture.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <HiOutlineGlobe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">UNESCO Projects</h3>
                  <p className="leading-relaxed">
                    She has developed various projects sponsored by UNESCO, bringing her expertise in restoration and mural techniques to preserve cultural heritage sites around the world. These projects showcase her commitment to preserving historical artistry for future generations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Collaborations section */}
            <div className={`p-6 transition-all duration-300 ${expandedSection === 'collaborations' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden p-0'}`}>
              <p className="mb-6 leading-relaxed">
                Johina regularly works for decorating magazines such as Architectural Digest, Elle Deco, and Home and Country, designing illustrations and backgrounds for stages. Her creative vision extends beyond murals to fabric design, where she has patterned fabric designs in collaboration with Spanish textile companies including KA and Lienzo de los Gazules.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Her commercial work includes creating packaging for Zara's perfumes and painting stands at IFEMA (Fair Stands for Art and Antique dealers).
              </p>
              
              {/* Collaboration showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <HiOutlinePhotograph className="mr-2 text-pink-500" />
                    Architectural Digest
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Illustrations and feature articles on her restoration work</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <HiOutlinePhotograph className="mr-2 text-pink-500" />
                    Elle Deco
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Design features and artistic collaborations</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <HiOutlineBriefcase className="mr-2 text-blue-500" />
                    Zara
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Artistic packaging designs for perfume collections</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <HiOutlineBriefcase className="mr-2 text-blue-500" />
                    Spanish Textile Companies
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fabric pattern designs for KA and Lienzo de los Gazules</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Prestigious clients section */}
          <div 
            className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-600 rounded-xl p-1"
            onMouseEnter={() => setActiveSection('clients')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-white">Prestigious Clients</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {[
                  "Royal Palace of Madrid",
                  "Palace of El Pardo",
                  "Royal Palace of La Granja",
                  "Chateau Laussanac",
                  "Saudi Arabian Embassy",
                  "Swedish Embassy",
                  "Finca Cortesín, Marbella",
                  "AECID",
                  "UNESCO"
                ].map((client, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-md text-center transition-all duration-300 ${
                      activeSection === 'clients' 
                        ? 'transform hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-900/20' 
                        : ''
                    }`}
                  >
                    <span className="text-sm font-medium">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
