"use client";

import React from 'react';
import ContactCard from '@/components/ContactCard';

// Define the contact information
const contactInfo = {
  name: "Johina",
  title: "Master Muralist & Restoration Expert",
  email: "contact@johina.com",
  phone: "+34 123 456 789",
  website: "https://johina.com",
  location: "Madrid, Spain",
  avatarUrl: "", // Will use the first letter as placeholder
  tags: ["Muralist", "Restoration", "Heritage", "Art Consultant"]
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Get in touch with Johina for commissions, restoration projects, or consultations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact card */}
        <div>
          <ContactCard 
            contactInfo={contactInfo} 
            className="md:max-w-md mx-auto" 
          />
          
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300">
            <p className="mb-2">
              <span className="font-semibold">Note:</span> You can share this contact information using the share button on the card.
            </p>
            <p>Available for commissions worldwide. For urgent matters, please contact via phone.</p>
          </div>
        </div>
        
        {/* Contact form or additional information */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Send a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* Map or additional contact channels */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4">Visit Studio</h2>
        
        <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          {/* Placeholder for a map */}
          <p className="text-gray-500 dark:text-gray-400">Interactive Map Placeholder</p>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg">Studio Hours</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Monday - Friday: 10:00 AM - 6:00 PM</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Saturday: By appointment only</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Sunday: Closed</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Studio Address</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">123 Art Studio Street</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Madrid, Spain 28001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
