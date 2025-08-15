import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/heroimage.png";

const HeroSection = () => {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "laptop">("laptop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setViewport("mobile");
      } else if (width <= 1024) {
        setViewport("tablet");
      } else {
        setViewport("laptop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: viewport === "mobile" ? "30vh" :
      viewport === "tablet" ? "50vh" : "100%",
  };

  const buttonStyle: React.CSSProperties = {
    padding:
      viewport === "mobile"
        ? "4vw 8vw"
        : viewport === "tablet"
          ? "3vw 6vw"
          : "2vw 4vw",
    borderRadius: viewport === "mobile" ? "4vw" : "1.6vw",
    fontSize:
      viewport === "mobile"
        ? "26px"
        : viewport === "tablet"
          ? "18px"
          : "20px",
    width: viewport === "mobile" ? "80vw" : "auto",
    height: viewport === "mobile" ? "15vw" : "auto",
    textAlign: "center",
  };

  const buttonContainerStyle: React.CSSProperties =
    viewport === "mobile"
      ? {
        position: "absolute",
        bottom: "0px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
      }
      : viewport === "tablet"
        ? {
          position: "absolute",
          bottom: "28px",
          right: "40px",
          zIndex: 10,
        }
        : {
          position: "absolute",
          bottom: "36px",
          right: "80px",
          zIndex: 10,
        };

  return (
    <section
      className="relative flex items-center bg-white"
      style={{ minHeight: viewport === "mobile" ? "350px" : "700px" }}
    >
      <div className="absolute inset-0" style={sectionStyle}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>      

      <div className="absolute top-1/2 right-6 sm:right-12 lg:right-24 transform -translate-y-1/2 z-20">
        <div className="bg-white/95 backdrop-blur-sm px-6 py-4 sm:px-10 sm:py-8 lg:px-16 lg:py-12 text-center max-w-[90vw] sm:max-w-xl">
          <h2
            className="font-bold text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            Welcome to <br className="hidden sm:block" />REACH Fashion Studio!
          </h2>
        </div>
      </div>

      <div style={buttonContainerStyle}>
        <Button
          variant="default"
          className="text-white font-semibold bg-rose-700 hover:bg-rose-800"
          style={buttonStyle}
        >
          Request a Demo
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
// absolute top-1/2 right-24 transform -translate-y-1/2 z-20
