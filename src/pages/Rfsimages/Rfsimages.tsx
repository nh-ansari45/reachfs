import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const imageItems = [
  { file: "/gallery/image1.png" },
  { file: "/gallery/image2.png" },
  { file: "/gallery/image3.png" },
  { file: "/gallery/image4.png" },
  { file: "/gallery/image5.png" },
  { file: "/gallery/image6.png" },
  { file: "/gallery/image7.png" },
  { file: "/gallery/image8.png" },
  { file: "/gallery/image9.png" },
  { file: "/gallery/image10.png" },
  { file: "/gallery/image11.png" },
  { file: "/gallery/image12.png" },
  { file: "/gallery/image13.png" },
  { file: "/gallery/image14.png" },
  { file: "/gallery/image15.png" },
  { file: "/gallery/image16.png" },
  { file: "/gallery/image17.png" },
  { file: "/gallery/image18.png" },
  { file: "/gallery/image19.png" },
  { file: "/gallery/image20.png" },
  { file: "/gallery/image21.png" },
  { file: "/gallery/image22.png" },
  { file: "/gallery/image23.png" },


];

const imageItems2 = [
  { file: "/gallery/image24.png" },
  { file: "/gallery/image25.png" },
  { file: "/gallery/image26.png" },
  { file: "/gallery/image27.png" },
  { file: "/gallery/image28.png" },
  { file: "/gallery/image29.png" },
  { file: "/gallery/image30.png" },
  { file: "/gallery/image31.png" },
  { file: "/gallery/image32.png" },
  { file: "/gallery/image33.png" },
  { file: "/gallery/image34.png" },
  { file: "/gallery/image35.png" },
  { file: "/gallery/image36.png" },
  { file: "/gallery/image37.png" },
  { file: "/gallery/image38.png" },
  { file: "/gallery/image39.png" },
  { file: "/gallery/image40.png" },
  { file: "/gallery/image41.png" },
  { file: "/gallery/image42.png" },
  { file: "/gallery/image43.png" },
  { file: "/gallery/image44.png" },
  { file: "/gallery/image45.png" },
  { file: "/gallery/image46.png" },
  { file: "/gallery/image47.png" },
  { file: "/gallery/image48.png" },
  { file: "/gallery/image49.png" },
  { file: "/gallery/image50.png" },
  { file: "/gallery/image51.png" },
  { file: "/gallery/image52.png" },
  { file: "/gallery/image53.png" },

]

const videoItems = [
  { file: "/gallery/video1.mp4" }, 
];


const Rfsimages: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Page Title */}
      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          REACH Fashion Studio Images
        </h1>
      </div>

      {/* Square Image Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {imageItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded shadow aspect-square overflow-hidden"
            >
              <img
                src={item.file}
                alt={`RFS image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Rectangle Image Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> {imageItems2.map((item, index) => (
          <div key={index} className="bg-white rounded shadow flex items-center justify-center overflow-hidden" >
            <img src={item.file} alt={`RFS image ${index + 1}`} className="w-full h-auto rounded shadow cursor-pointer" />
          </div>))}
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded shadow flex items-center justify-center overflow-hidden"
            >
              <video
                src={item.file}
                controls
                className="w-full h-auto rounded shadow cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Rfsimages;
