import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const ProductVids: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          Product Videos
        </h1>
      </div>

      <Footer />
    </>
  );
};

export default ProductVids;
