import { Link } from "react-router-dom";
import Slider from "react-slick";
import Header from "@/components/Header";
import { benefitPoints } from "../components/BenefitLinks";
import ReachWebinar from "../components/ReachWebinar";
import Testimonials from "../components/Testimonals";
import ShareSection from "../components/ShareSection";
import QuoteSection from "../components/QuoteSections";
import Footer from "@/components/Footer";

// 10 slide image there
import slide1 from "@/assets/image1.png";
import slide2 from "@/assets/image2.png";
import slide3 from "@/assets/image3.png";
import slide4 from "@/assets/image5.png";
import slide5 from "@/assets/image6.png";
import slide6 from "@/assets/image7.png";
import slide7 from "@/assets/image8.png";
import slide8 from "@/assets/image9.png";
import slide9 from "@/assets/image10.png";
import slide10 from "@/assets/image11.png";

import benefitImage from "@/assets/image4.png";

const carouselImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-black p-2 rounded-full cursor-pointer shadow hover:bg-gray-50"
  >
  &#9658;
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-black p-2 rounded-full cursor-pointer shadow hover:bg-gray-50"
  >
    &#9668;
  </div>
);

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};


const Link4 = () => {
  return (
    <>
      <Header />

      <div className="bg-white text-gray-800">
        {/* Hero / Yellow Section */}
        <section className="bg-yellow-400 px-4 py-10 text-black">
          <div className="max-w-4xl mx-auto pl-6 border-l-2 border-gray-800 text-xl leading-relaxed space-y-1">
            <div className="py-2">
            <p>Pattern CAD software for discerning customers.</p>
            <p>Pattern CAD that saves time and fabric.</p>
            <p>Pattern CAD software that enables consistent quality. Every time.</p>
            <p>Pattern CAD software that enables your team to collaborate seamlessly to deliver on time.</p>
            </div>
            <p className="py-4">Welcome to REACH CAD!</p>
            <p className="py-4">Best In Class Software.</p>
            <div className="py-2">
            <p>Create Apparel Patterns that Fit. Accurately. Always. Fast.</p>
            <p>Save Time. Save Fabric.</p>
            <p>Collaborate with Team Members.</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-700 mb-4">
            Read About REACH CAD Benefit Below
          </h2>
          <hr className="border-t border-gray-300 w-16 mx-auto mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
            <div className="max-w-lg w-full shadow-lg h-69">
              <Slider {...carouselSettings}>
                {carouselImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="rounded w-full h-69 object-cover"
                  />
                ))}
              </Slider>
            </div>

            <div className="text-left space-y-4 max-w-xl">
              <p>Add notches, darts, pleats etc. to patterns in a few clicks.</p>
              <p>
                REACH CAD enables you to do away with the tools required for
adding notches, darts, pleats etc. and automates the process.
              </p>
              <p>This ensures you save a lot of time and eliminate errors.</p>
              <Link
                to="/brochure"
                className="inline-block bg-red-700 text-white px-5 py-2 rounded shadow hover:bg-red-800 transition"
              >
                Brochure
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits List Section */}
        <section className="py-16 px-4 bg-white">
          <h3 className="text-center text-xl md:text-2xl text-red-700 font-semibold mb-6">
            Click the Links Below to Read About More Benefits of REACH CAD
          </h3>
          <hr className="border-t border-gray-300 w-16 mx-auto mb-10" />

          <div className="flex flex-col-reverse md:flex-row gap-8 max-w-7xl mx-auto">
            {/* Left: Bullet list */}
            <ul className="space-y-4 text-base md:text-lg list-disc list-outside pl-6 flex-1">
              {benefitPoints.map((point, index) => (
                <li key={index} className="text-gray-700">
                  {point}{" "}
                  <Link
                    to={`/benefits/detail/${index + 1}`}
                    className="text-primary hover:underline font-medium ml-1"
                  >Read more</Link>
                </li>
              ))}
            </ul>

            {/* Right: Image */}
            <div className="flex-1">
              <img
                src={benefitImage}
                alt="Benefits Clothing Display"
                className="rounded shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      <ReachWebinar />
      <Testimonials />
      <ShareSection />
      <QuoteSection />
      <Footer />
    </>
  );
};

export default Link4;
