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

  const videos = [
    { title: "2-Pixel Auto Routine", url: "#" },
    { title: "Drone Launch Demonstration", url: "#" },
  ];

  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center py-16 mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Robot: Invictus</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invictus is the robot we built for the 2023–2024 Centerstage season, with a pixel intake, scoring arm, and endgame suspension.
          </p>
          <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
            2023–2024 Centerstage Season
          </Badge>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group overflow-hidden">
              <img
                src={robot1Image}
                alt="Center Stage Robot V2"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="group overflow-hidden">
              <img
                src={robot2Image}
                alt="Center Stage Robot Competition"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 border-t border-border pt-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Center Stage Performance</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Our 2023–2024 robot with advanced pixel handling and drone-launch capabilities
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-2">
            <Play className="h-6 w-6" />
            Robots in Action
          </h2>
          <p className="text-muted-foreground mb-6">
            Watch our autonomous routines, scoring, and endgame performances
          </p>
          <div className="divide-y divide-border">
            {videos.map((video, index) => (
              <div key={index} className="flex items-center justify-between py-4">
                <h3 className="font-semibold text-foreground">{video.title}</h3>
                <Button variant="hero" asChild>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Watch on YouTube
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary mb-2">Technical Achievements</h2>
          <p className="text-muted-foreground mb-10">
            Key milestones and capabilities of the Center Stage Robot
          </p>
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
          <p className="mt-10 text-sm text-muted-foreground italic">
            Last Updated: August 25, 2025
          </p>
        </section>
      </div>
      <Footer />
    </div>

  );
};

export default Robot;
