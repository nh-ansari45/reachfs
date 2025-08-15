import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Effortless Fashion Illustrations",
      description: "Bring your vision to life in minutes. Sketch, refine, and render dazzling fashion illustrations using tools designed for absolute ease and creative freedom. Express your unique style with every stroke, transforming raw inspiration into stunning illustrations that capture the essence of your designs."
    },
    {
      icon: Users,
      title: "Precision in Technical Drawings",
      description: "Achieve unmatched accuracy in your technical drawings without the struggle. Intuitive features help ensure every seam, stitch, and silhouette is captured to perfection. Communicate your craftsmanship clearly, paving the path for flawless production and elevating your brand's professional standard."
    },
    {
      icon: TrendingUp,
      title: "Streamlined Techpack Development",
      description: "Turn complexity into confidence by building detailed, error-free techpacks in a fraction of the time. Focus on innovation rather than paperwork, knowing every technical detail is organized, clear, and production-ready."
    },
    {
      icon: Star,
      title: "Effortless Textile Design Exploration",
      description: "Immerse yourself in limitless creativity as you craft textile designs with innovative, user-friendly tools. Experiment, iterate, and perfect your textile patterns, ensuring originality and excellence in every collection."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Benefits of REACH Fashion Studio
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          REACH Fashion Studio isn't just another design tool; it's a game-changer for the fashion industry.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;