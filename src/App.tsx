import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Marketing from './components/Marketing';
import Advertising from './components/Advertising';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Marketing />
      <Advertising />
    </div>
  );
}

export default App;