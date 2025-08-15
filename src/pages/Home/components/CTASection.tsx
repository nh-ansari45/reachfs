import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Fashion Design Process?
        </h2>
        <p className="text-lrg mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of designers who trust REACH Fashion Studio to bring their ideas to life.
        </p>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white text-primary font-semibold hover:bg-gray-100 border-white text-lg px-8 py-4 hover:text-black"
        >
          Request a Demo
        </Button>
      </div>
    </section>
  );
};

export default CTASection;