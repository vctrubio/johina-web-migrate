"use client";

import React, { useState } from 'react';
import { 
  HiMail, 
  HiPhone, 
  HiGlobeAlt, 
  HiLocationMarker,
  HiShare, 
  HiDocumentDuplicate,
  HiCheckCircle,
  HiBriefcase,
  HiX,
} from 'react-icons/hi';
import Image from 'next/image';

type ContactInfo = {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  avatarUrl: string;
  tags: string[];
}

type ContactCardProps = {
  contactInfo: ContactInfo;
  className?: string;
}

export default function ContactCard({ contactInfo, className = '' }: ContactCardProps) {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const {
    name,
    title,
    email,
    phone,
    website,
    location,
    avatarUrl,
    tags
  } = contactInfo;

  const handleCopyToClipboard = () => {
    const contactText = `
Name: ${name}
Title: ${title}
Email: ${email}
Phone: ${phone}
Website: ${website}
Location: ${location}
    `;
    
    navigator.clipboard.writeText(contactText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShareViaEmail = () => {
    const subject = `Contact Information for ${name}`;
    const body = `
Name: ${name}
Title: ${title}
Email: ${email}
Phone: ${phone}
Website: ${website}
Location: ${location}
    `;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleShareViaWhatsApp = () => {
    const text = `
Contact Information for ${name}:
${title}
Email: ${email}
Phone: ${phone}
Website: ${website}
Location: ${location}
    `;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden relative ${className}`}>
      {/* Card Header with Avatar and Name */}
      <div className="relative h-32 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-600">
        <div className="absolute -bottom-12 left-6 h-24 w-24 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-700">
          {avatarUrl ? (
            <Image 
              src={avatarUrl} 
              alt={`${name}'s avatar`} 
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-2xl font-bold text-gray-400">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      {/* Card Body */}
      <div className="pt-14 p-6">
        <h2 className="text-xl font-bold text-gray-700 dark:text-white">{name}</h2>
        <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium mb-4">{title}</p>
        
        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          <a 
            href={`mailto:${email}`} 
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <HiMail className="mr-2 text-indigo-400 dark:text-indigo-500" />
            <span className="text-sm">{email}</span>
          </a>
          
          <a 
            href={`tel:${phone}`} 
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <HiPhone className="mr-2 text-indigo-500" />
            <span className="text-sm">{phone}</span>
          </a>
          
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <HiGlobeAlt className="mr-2 text-indigo-500" />
            <span className="text-sm">{website.replace(/^https?:\/\//i, '')}</span>
          </a>
          
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <HiLocationMarker className="mr-2 text-indigo-500" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2 py-1 bg-neutral-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300"
                >
                  <HiBriefcase className="mr-1 text-gray-500 dark:text-gray-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Share button */}
        <div className="flex mt-4 justify-end">
          <button 
            onClick={() => setShowShareOptions(!showShareOptions)} 
            className="flex items-center text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300"
          >
            <HiShare className="mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>
      
      {/* Share options drawer */}
      {showShareOptions && (
        <div className="absolute inset-0 bg-white dark:bg-gray-800 z-10 flex flex-col p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Share Contact</h3>
            <button 
              onClick={() => setShowShareOptions(false)} 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4 flex-grow">
            <button 
              onClick={handleCopyToClipboard} 
              className="w-full flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-3">
                  <HiDocumentDuplicate className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
                <span className="font-medium">Copy to clipboard</span>
              </div>
              {copied && <HiCheckCircle className="w-5 h-5 text-green-500" />}
            </button>
            
            <button 
              onClick={handleShareViaEmail} 
              className="w-full flex items-center bg-blue-500 p-3 rounded-lg hover:bg-blue-600 text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                <HiMail className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">Share via Email</span>
            </button>
            
            <button 
              onClick={handleShareViaWhatsApp} 
              className="w-full flex items-center bg-green-500 p-3 rounded-lg hover:bg-green-600 text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="font-medium">Share via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
