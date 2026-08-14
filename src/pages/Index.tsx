import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, Users, Zap, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import teamHeroImage from "@/assets/TeamPhotos/team-hero.webp";
import teamPhoto1 from "@/assets/TeamPhotos/team-photo-1.webp";
import teamPhoto2 from "@/assets/TeamPhotos/team-photo-2.webp";

const Index = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "World Championship",
      description: "1st Place in Jemison Division",
      highlight: "2025 INTO THE DEEP",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "401 Point High Score",
      description: "Our highest match score to date",
      highlight: "Team Record",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "13 Team Members",
      description: "Plus two coaches and two mentors",
      highlight: "Team #16158",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <section className="relative min-h-[80dvh] sm:min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={teamHeroImage}
              alt="VC Silver Circuits Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
            <p className="mb-4 sm:mb-6 text-sm sm:text-lg font-medium text-muted-foreground">
              FTC Team #16158
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-foreground">
              VC Silver Circuits
            </h1>
            <p className="text-lg sm:text-2xl font-medium italic text-accent mb-4">
              "Prospecting for potential, mining for innovation."
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto">
              Virginia City, Nevada
            </p>

            <p className="text-base sm:text-lg text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              We're a FIRST Tech Challenge team from Virginia City, a small
              town in Storey County, Nevada. The team is ten students, two
              coaches, and two mentors who build and compete with a robot
              every season.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/team">Meet Our Team</Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/into-the-deep-robot">See Our Current Robot</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-primary">
                Our Mission
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-12">
                We want to raise the level of robotics in Nevada by sharing
                what we learn and helping other teams get started. Closer to
                home, that means mentoring FLL teams and running outreach in
                our community. On the field, our goal is to win the Nevada
                State Championship and get back to Worlds.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="text-center px-4">
                  <div className="flex justify-center mb-6 text-accent">
                    {achievement.icon}
                  </div>
                  <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                    {achievement.highlight}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">
              Our Team in Action
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[teamPhoto2, teamPhoto1].map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt="VC Silver Circuits Team"
                  className="w-full h-80 object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-primary">
                Support the Team
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Donations go toward registration fees, robot parts, and travel
                to competitions. If you have a question for the team, send us
                a message.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://gofund.me/cb49a9f8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Support on GoFundMe
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-primary">
                About FIRST Tech Challenge
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                FIRST Tech Challenge is a robotics program for students in
                grades 7 through 12. Teams design, build, and program a robot
                to compete in a new game each season.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.firstinspires.org/robotics/ftc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Learn More About FIRST Tech Challenge
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
