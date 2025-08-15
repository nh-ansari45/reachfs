import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "About REACH Fashion Studio", path: "/about" },
    { label: "Benefits of REACH Fashion Studio", path: "/benefits" },
    { label: "Learning Guides", path: "/learningguide" },
    { label: "Presentations", path: "/presentations" },
    { label: "Product Videos", path: "/productvids" },
    { label: "REACH Fashion Studio Images", path: "/rfsimages" },
    { label: "Articles", path: "/articles" },
    { label: "REACH Fashion Studio Books", path: "/rfsbooks" },
    { label: "Case Studies", path: "/casestudies" },
    { label: "About REACH Technologies", path: "/aboutreachtech" },
    
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block w-fit">
              <span className="text-primary">REACH</span> Fashion Studio
            </Link>
            <p className="text-gray-300 max-w-md">
              Create your Fashion Illustrations, Technical Drawings, Techpacks, and Textile Designs effortlessly!
            </p>
          </div>

          <div>
            <nav className="space-y-3">
              {footerLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 block"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 REACH Fashion Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
