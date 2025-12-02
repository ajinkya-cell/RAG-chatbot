import React from 'react';
import { Navigation } from './navigation';
import Square from './SquareWrapper';

export default function LandingPage() {
  return (
    <>  
    
      <div className="min-h-screen relative  flex flex-col items-center justify-center p-6">
       
               

      <div className="max-w-5xl rounded-2xl p-4 backdrop-blur-sm w-full">
        {/* Main Content */}
       
        <div className="text-center space-y-8">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 border border-white rounded-full text-white text-sm font-medium animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full shadow-lg shadow-emerald-500/50"></span>
            AI-Powered Document Assistant
          </div>

          {/* Hero Text */}
          <div className="space-y-6 rounded-2xl p-4 backdrop-blur-sm">
            <h1 className="text-6xl md:text-7xl   lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-white font-mono leading-tight tracking-tight drop-shadow-2xl">
              Bring Power to
              <br />
              Your Pages
            </h1>
            
            <p className="text-2xl md:text-3xl text-white font-light max-w-3xl mx-auto">
              Your expert guide through every page
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transform your documents into intelligent conversations. Upload, chat, and discover insights like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/upload"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/60 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Upload Documents
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="/chat"
              className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-emerald-500 text-emerald-400 font-semibold rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:bg-emerald-900/30 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Start Chatting
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-emerald-500/50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Get instant answers from your documents with AI-powered search</p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-emerald-500/50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Secure & Private</h3>
              <p className="text-gray-400 text-sm">Your documents are encrypted and processed with enterprise-grade security</p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-emerald-500/50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Smart Insights</h3>
              <p className="text-gray-400 text-sm">Discover connections and insights you never knew existed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}