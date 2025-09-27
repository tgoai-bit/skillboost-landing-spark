import { Card, CardContent } from "@/components/ui/card";
import { Code, PenTool, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Master SEO, social media marketing, Google Ads, and conversion optimization. Build campaigns that drive real results."
    },
    {
      icon: Code,
      title: "Coding & Development", 
      description: "Learn modern programming languages, web development, and software engineering practices from industry experts."
    },
    {
      icon: PenTool,
      title: "Design & UX",
      description: "Create stunning visuals and user experiences with design thinking, UI/UX principles, and industry-standard tools."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Master In-Demand Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our most popular learning paths designed to boost your career in today's digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border/30 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;