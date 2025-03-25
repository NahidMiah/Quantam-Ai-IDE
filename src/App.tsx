import React, { useState, useCallback } from 'react';
import { Download, Terminal, Cpu, Boxes, AppWindow as Windows, Apple, Link as Linux } from 'lucide-react';

function App() {
  const [downloadUrl, setDownloadUrl] = useState('');

  const detectOS = useCallback(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const macPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i;
    const windowsPlatforms = /(win32|win64|windows|wince)/i;
    const iosPlatforms = /(iphone|ipad|ipod)/i;
    
    let os = 'unknown';
    
    if (macPlatforms.test(userAgent) || iosPlatforms.test(userAgent)) {
      os = 'mac';
      setDownloadUrl('https://example.com/downloads/quantum-ide-mac.dmg');
    } else if (windowsPlatforms.test(userAgent)) {
      os = 'windows';
      setDownloadUrl('https://example.com/downloads/quantum-ide-windows.exe');
    } else if (userAgent.indexOf('linux') !== -1) {
      os = 'linux';
      setDownloadUrl('https://example.com/downloads/quantum-ide-linux.AppImage');
    }
    
    return os;
  }, []);

  const handleDownload = useCallback(() => {
    const os = detectOS();
    if (downloadUrl) {
      window.location.href = downloadUrl;
    } else {
      // If OS detection fails, scroll to download section
      document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [detectOS, downloadUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute h-full w-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.1
              }}
            >
              <Boxes className="w-8 h-8 text-purple-500" />
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 py-32 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <Cpu className="w-24 h-24 text-purple-500 animate-pulse" />
              <div className="absolute -inset-4 bg-purple-500/20 blur-xl rounded-full" />
            </div>
            
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Quantum AI IDE
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              The next generation integrated development environment for quantum computing and artificial intelligence. Harness the power of quantum algorithms with an intuitive interface.
            </p>
            
            <div className="flex gap-4 mt-8">
              <button 
                onClick={handleDownload}
                className="group relative px-8 py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Now
                <span className="absolute -inset-0.5 bg-purple-600 blur opacity-0 group-hover:opacity-30 transition-opacity duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-200">
            <Terminal className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Quantum Circuit Designer</h3>
            <p className="text-gray-400">Visual quantum circuit design with real-time simulation and optimization suggestions.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-200">
            <Cpu className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">AI Assistant</h3>
            <p className="text-gray-400">Built-in AI that helps debug, optimize, and explain quantum algorithms.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-200">
            <Boxes className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Cloud Integration</h3>
            <p className="text-gray-400">Seamlessly connect to quantum hardware providers and run your circuits in the cloud.</p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download-section" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Download for Your Platform</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a 
            href="https://example.com/downloads/quantum-ide-windows.exe" 
            className="flex flex-col items-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-200"
          >
            <Windows className="w-16 h-16 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Windows</h3>
            <p className="text-sm text-gray-400">Windows 10/11</p>
          </a>
          
          <a 
            href="https://example.com/downloads/quantum-ide-mac.dmg" 
            className="flex flex-col items-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-200"
          >
            <Apple className="w-16 h-16 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">macOS</h3>
            <p className="text-sm text-gray-400">Intel & Apple Silicon</p>
          </a>
          
          <a 
            href="https://example.com/downloads/quantum-ide-linux.AppImage" 
            className="flex flex-col items-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-200"
          >
            <Linux className="w-16 h-16 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Linux</h3>
            <p className="text-sm text-gray-400">Ubuntu, Fedora & more</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;