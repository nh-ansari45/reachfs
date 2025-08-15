import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const pdfItems = [
  {
    title: "Article 1",
    file: "/pdfs/rfsa1.pdf",
    thumbnail: "/thumbnails/rfsa1pic.png",
  },
  {
    title: "Article 2",
    file: "/pdfs/rfsa2.pdf",
    thumbnail: "/thumbnails/rfsa2pic.png",
  },
  {
    title: "Article 3",
    file: "/pdfs/rfsa3.pdf",
    thumbnail: "/thumbnails/rfsa3pic.png",
  },
  {
    title: "Article 4",
    file: "/pdfs/rfsa4.pdf",
    thumbnail: "/thumbnails/rfsa4pic.png",
  },
  {
    title: "Article 5",
    file: "/pdfs/rfsa5.pdf",
    thumbnail: "/thumbnails/rfsa5pic.png",
  },
  {
    title: "Article 6",
    file: "/pdfs/rfsa6.pdf",
    thumbnail: "/thumbnails/rfsa6pic.png",
  },
  {
    title: "Article 7",
    file: "/pdfs/rfsa7.pdf",
    thumbnail: "/thumbnails/rfsa7pic.png",
  },
  {
    title: "Article 8",
    file: "/pdfs/rfsa8.pdf",
    thumbnail: "/thumbnails/rfsa8pic.png",
  },
  {
    title: "Article 9",
    file: "/pdfs/rfsa9.pdf",
    thumbnail: "/thumbnails/rfsa9pic.png",
  },
  {
    title: "Article 10",
    file: "/pdfs/rfsa10.pdf",
    thumbnail: "/thumbnails/rfsa10pic.png",
  },
  {
    title: "Article 11",
    file: "/pdfs/rfsa11.pdf",
    thumbnail: "/thumbnails/rfsa11pic.png",
  },
  {
    title: "Article 12",
    file: "/pdfs/rfsa12.pdf",
    thumbnail: "/thumbnails/rfsa12pic.png",
  },
  {
    title: "Article 13",
    file: "/pdfs/rfsa13.pdf",
    thumbnail: "/thumbnails/rfsa13pic.png",
  },
  {
    title: "Article 14",
    file: "/pdfs/rfsa14.pdf",
    thumbnail: "/thumbnails/rfsa14pic.png",
  },
  {
    title: "Article 15",
    file: "/pdfs/rfsa15.pdf",
    thumbnail: "/thumbnails/rfsa15pic.png",
  },
  {
    title: "Article 16",
    file: "/pdfs/rfsa16.pdf",
    thumbnail: "/thumbnails/rfsa16pic.png",
  },
  {
    title: "Article 17",
    file: "/pdfs/rfsa17.pdf",
    thumbnail: "/thumbnails/rfsa17pic.png",
  },
  {
    title: "Article 18",
    file: "/pdfs/rfsa18.pdf",
    thumbnail: "/thumbnails/rfsa18pic.png",
  },
  {
    title: "Article 19",
    file: "/pdfs/rfsa19.pdf",
    thumbnail: "/thumbnails/rfsa19pic.png",
  },
  {
    title: "Article 20",
    file: "/pdfs/rfsa20.pdf",
    thumbnail: "/thumbnails/rfsa20pic.png",
  },
  
  

];

const Articles: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          Articles
        </h1>
      </div>

      <section className="py-12 px-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pdfItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition"
          >
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-auto rounded shadow"
              />
            </a>

            <h3 className="text-lg font-semibold text-center mb-4">{item.title}</h3>

            <div className="flex justify-center gap-4">
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Open
              </a>
              <a
                href={item.file}
                download
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-black"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>

      <Footer />
    </>
  );
};

export default Articles;
