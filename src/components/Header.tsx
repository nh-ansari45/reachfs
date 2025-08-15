import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <Link to="/" className="text-3xl sm:text-4xl font-bold leading-tight">
            <span className="text-red-700" style={{ color: "#a61042" }}>
              REACH
            </span>
            <span className="text-black"> Fashion Studio</span>
          </Link>

          <div className="text-sm sm:text-base text-gray-700 md:block w-full md:w-1/2 lg:w-1/3 text-left md:text-right">
            Create your Fashion Illustrations, Technical Drawings, Techpacks, and Textile Designs effortlessly!
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
