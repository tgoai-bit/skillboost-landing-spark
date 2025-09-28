import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Boost Your{" "}
                <span className="text-primary">Digital Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Master digital marketing, coding, and design with expert-led courses. 
                Unlock new opportunities and accelerate your career growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-6">
                    Book a free 15-min call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[600px] p-0">
                  <div style={{width:"100%",height:"100%",overflow:"scroll"}} id="my-cal-inline-15min"></div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Courses
              </Button>
            </div>

            {/* Widget Placeholders */}
            <div className="mt-12 space-y-4">
              <div id="retell-chat" className="min-h-[50px] p-4 border border-border/30 rounded-lg bg-card/50">
                <p className="text-sm text-muted-foreground">💬 Retell AI chat widget active - look for the chat button</p>
              </div>
              <div id="cal-booking" className="min-h-[50px] p-4 border border-border/30 rounded-lg bg-card/50">
                <p className="text-sm text-muted-foreground">📅 Booking widget placeholder</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional learning online with laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;