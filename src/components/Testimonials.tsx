import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Marketing Manager",
      content: "SkillBoost transformed my career. The digital marketing course landed me a 40% salary increase within 6 months.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "Full-Stack Developer",
      content: "The coding bootcamp was intensive but incredibly rewarding. I went from zero to landing my dream job at a tech startup.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "UX Designer",
      content: "The design course gave me the skills and confidence to freelance successfully. I'm now booked months in advance.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with SkillBoost.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/30">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;