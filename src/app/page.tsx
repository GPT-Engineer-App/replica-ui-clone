"use client";

import Image from "next/image";
import logo from "../../public/logo.png"; // Adjusted the path to the logo image
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">For Business</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Developers</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Research</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Company</a>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-md">Try Now</button>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-pink-300 text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">The Leading Enterprise AI Platform</h1>
        <h2 className="text-xl md:text-2xl mb-4">Built on the language of business</h2>
        <p className="text-lg md:text-xl mb-8">
          Optimized for enterprise generative AI, search and discovery, and advanced retrieval.
        </p>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-md">Contact Sales</button>
          <button className="bg-white text-black border border-black px-6 py-3 rounded-md">Try the Playground</button>
        </div>
      </main>
    </div>
  );
}