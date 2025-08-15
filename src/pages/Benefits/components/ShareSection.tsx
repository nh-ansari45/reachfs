import { FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const ShareSection = () => {
  return (
    <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Heading */}
      <h2 className="text-base sm:text-lg md:text-xl lg:text-4xl font-semibold text-primary mb-4 tracking-widest">
        SHARE
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base md:text-lg lg:text-2xl text-primary font-semibold mb-4">
        <span>apparel cad software  </span>
        <span>garment cad software  </span>
        <span>clothing cad software</span>
      </div>

      {/* Hashtags */}
      <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base md:text-xl text-gray-500 mb-6">
        <span>#reachcad</span>
        <span>#apparelcadsoftware</span>
        <span>#garmentcadsoftware</span>
        <span>#clothingcadsoftware</span>
      </div>

      {/* Icons */}
      <div className="flex justify-center flex-wrap gap-6 text-2xl sm:text-3xl md:text-4xl text-primary">
        <FaEnvelope className="hover:text-yellow-500 transition" />
        <FaFacebook className="hover:text-blue-600 transition" />
        <FaTwitter className="hover:text-sky-500 transition" />
        <FaWhatsapp className="hover:text-green-500 transition" />
        <FaLinkedin className="hover:text-blue-800 transition" />
      </div>
    </section>

  );
};

export default ShareSection;
