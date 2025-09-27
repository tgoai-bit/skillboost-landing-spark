import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long do the courses take to complete?",
      answer: "Course duration varies from 4-12 weeks depending on the track. Digital marketing is 8 weeks, coding bootcamp is 12 weeks, and design fundamentals is 6 weeks. All courses are self-paced with weekly live sessions."
    },
    {
      question: "Do I need prior experience to start?",
      answer: "No prior experience is required! Our courses are designed for beginners to intermediate levels. We provide foundational knowledge and build up to advanced concepts progressively."
    },
    {
      question: "What kind of support do I get during the course?",
      answer: "You'll have access to expert instructors, peer community forums, weekly office hours, project reviews, and career coaching. Our support team is available 24/7 for technical issues."
    },
    {
      question: "Are there job placement guarantees?",
      answer: "While we can't guarantee specific job placements, 87% of our graduates find relevant employment within 6 months. We provide career coaching, resume reviews, and interview preparation to maximize your success."
    },
    {
      question: "Can I access course materials after completion?",
      answer: "Yes! You get lifetime access to all course materials, updates, and our alumni network. Plus, you can retake any course for free within one year of completion."
    },
    {
      question: "What's included in the free 15-minute consultation?",
      answer: "During your consultation, we'll assess your goals, recommend the best learning path, discuss financing options, and answer any questions about our programs. No sales pressure - just helpful guidance."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about SkillBoost courses and programs.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border/30 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-card-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;