import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ExternalLink, Heart, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    const subject = encodeURIComponent(`Message from ${firstName} ${lastName}`);
    const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`);
    const mailtoLink = `mailto:vcscrobotics@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toast({
      title: "Email Draft Opened!",
      description: "Your email client should open shortly.",
    });

    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const supportLinks = [
    { name: "Venmo", url: "https://venmo.com/u/SilverCircuits16158", description: "Support us via Venmo", color: "text-blue-400" },
    { name: "GoFundMe", url: "https://www.gofundme.com/f/support-vc-silver-circuits-get-to-the-michiana-premier?attribution_id=sl:11f04d9a-8249-4815-9081-9b559382c6bc&lang=en_US&ts=1773361208&utm_campaign=fp_sharesheet&utm_content=amp17_ta-amp20_control&utm_medium=customer&utm_source=copy_link", description: "Contribute to our team goals", color: "text-green-400" },
    { name: "PayPal", url: "https://www.paypal.com/US/fundraiser/charity/4735879", description: "Donate via PayPal", color: "text-blue-500" }
  ];

  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center py-16 mb-16 circuit-bg">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our team? Want to support our robotics journey? Need help or advice on FTC or FLL? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground mb-8">We'll get back to you as soon as possible</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="bg-input border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="bg-input border-border focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-input border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="bg-input border-border focus:border-primary resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
            </form>
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:vcscrobotics@gmail.com" className="text-primary hover:text-primary-glow transition-colors">
                      vcscrobotics@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Social Media</h3>
                    <p className="text-muted-foreground">
                      <a href="https://www.youtube.com/@VCSilverCircuitsFTC16158" target="_blank" className="hover:text-primary-glow transition-colors">
                        YouTube - @VCSilverCircuitsFTC16158
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="https://www.facebook.com/VCSilverCircuits" target="_blank" className="hover:text-primary-glow transition-colors">
                        Facebook - VC Silver Circuits
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="https://www.instagram.com/vcsilvercircuits" target="_blank" className="hover:text-primary-glow transition-colors">
                        Instagram - VC Silver Circuits
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-border pt-10">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-2">
                <Heart className="h-6 w-6 text-accent" />
                Support Our Team
              </h2>
              <p className="text-muted-foreground mb-6">Help us continue our robotics journey and reach new heights</p>
              <div className="divide-y divide-border">
                {supportLinks.map((link, index) => (
                  <div key={index} className="flex items-center justify-between py-4">
                    <div>
                      <h3 className={`font-semibold ${link.color}`}>{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Donate
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-border pt-10">
              <h2 className="text-2xl font-bold text-primary mb-4">About FIRST Tech Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FIRST Tech Challenge is an extracurricular program for students in grades 7–12 to learn about STEM through hands-on robotics.
              </p>
              <Button variant="outline" asChild>
                <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Learn More About FIRST
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
