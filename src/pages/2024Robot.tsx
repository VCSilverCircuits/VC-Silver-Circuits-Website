import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import Footer from "@/components/Footer";
import robot1Image from "@/assets/RobotPhotos/centerstage-robot-1.webp";
import robot2Image from "@/assets/RobotPhotos/centerstage-robot-2.webp";

const Robot = () => {
  const stats = [
    { label: "Overall OPR", value: "113.96", description: "" },
    { label: "TeleOP OPR", value: "51.50", description: "" },
    { label: "Auto OPR", value: "42.11", description: "" },
    { label: "Endgame", value: "24.72", description: "" },
    { label: "Intake Capacity", value: "2 Pixels", description: "Can ingest 2 pixels at a time" },
    { label: "Slide Extension", value: "1.2 m", description: "Horizontal linear slide reach" },
    { label: "Drone Launch Height", value: "1.22 m", description: "Vertical drone launch capability" },
    { label: "Drone Launch Distance", value: "3.35 m", description: "Horizontal launch distance" },
    { label: "Landing Success Rate", value: "65%", description: "Drone landing in Zone 1" },
    { label: "Hang Level", value: "Custom", description: "Ratcheting suspension mechanism" }
  ];



  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 circuit-bg p-12 rounded-2xl">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Our Robot: Invictus</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for the 2023–2024 Centerstage season, this robot showcases advanced intake, scoring, and endgame suspension capabilities.
          </p>
          <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
            2023–2024 Centerstage Season
          </Badge>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
              <img
                src={robot1Image}
                alt="Center Stage Robot V2"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
              <img
                src={robot2Image}
                alt="Center Stage Robot Competition"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Center Stage Performance</CardTitle>
              <CardDescription className="text-lg">
                Our 2023–2024 robot with advanced pixel handling and drone-launch capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card/50 rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>



        <section className="mb-16">
          <Card className="bg-gradient-tech border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Play className="h-6 w-6" />
                Robots in Action
              </CardTitle>
              <CardDescription>
                Watch our autonomous routines, scoring, and endgame performances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
                  <div>
                    <h3 className="font-semibold text-foreground">2-Pixel Auto Routine</h3>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
                  <div>
                    <h3 className="font-semibold text-foreground">Drone Launch Demonstration</h3>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-tech border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Technical Achievements</CardTitle>
              <CardDescription>
                Key milestones and capabilities of the Center Stage Robot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Autonomous Performance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Handles 2 pixels simultaneously</li>
                    <li>• Precise horizontal slide intake (1.2 m reach)</li>
                    <li>• Reliable and consistent autonomous execution</li>
                    <li>• Optimized for scoring efficiency</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Competition Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ratcheting suspension for endgame hang</li>
                    <li>• Drone-launch system with 65% landing rate</li>
                    <li>• Robust mechanical design for competition</li>
                    <li>• Proven performance in Centerstage tournaments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20">
            <p className="text-sm text-muted-foreground italic">
              Last Updated: August 25, 2025
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>

  );
};

export default Robot;
