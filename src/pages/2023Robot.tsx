import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import Footer from "@/components/Footer";
import powerPlayImage1 from "@/assets/RobotPhotos/power-play-1.webp";
import powerPlayImage2 from "@/assets/RobotPhotos/power-play-2.webp";

const PowerPlayRobot = () => {
  const stats = [
    { label: "Overall OPR", value: "154.07", description: "" },
    { label: "TeleOP OPR", value: "77.53", description: "" },
    { label: "Auto OPR", value: "50.30", description: "" },
    { label: "Endgame", value: "40.88", description: "" },
    { label: "High Score (No Penalties)", value: "262", description: "Achieved during Power Play season" },
    { label: "High Score (Solo)", value: "221", description: "Achieved during Power Play season" },
    { label: "Autonomous", value: "5+1 Cones + Park", description: "High autonomous score of 80 points solo" },
    { label: "Teleop", value: "18 Cones", description: "Capable of scoring all 18 cones during teleop" },
    { label: "Endgame", value: "Beacon Scoring", description: "Simultaneous beacon and cone scoring" }
  ];

  const videos = [
    { title: "Robot Reveal", url: "https://www.youtube.com/watch?v=8Fio1rOuCQY" },
    { title: "Nevada State Championship", url: "https://www.youtube.com/watch?v=bgVEpjuJn5c" },
    { title: "Nevada State High Score 2023", url: "https://www.youtube.com/watch?v=KVGMkMSexqs" },
  ];

  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center py-16 mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Robot: EVE</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EVE is the robot we built for the 2022–2023 Power Play season, our first year competing.
          </p>
          <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
            2022–2023 Power Play Season
          </Badge>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[powerPlayImage1, powerPlayImage2].map((img, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  src={img}
                  alt={`EVE Robot ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-border pt-12">
          <h2 className="text-3xl font-bold text-primary mb-2">EVE's Performance Highlights</h2>
          <p className="text-lg text-muted-foreground mb-10">
            EVE on the field during the Power Play season
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
            EVE in Action
          </h2>
          <p className="text-muted-foreground mb-6">
            Watch EVE's autonomous routine and competition performances
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
            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="font-semibold text-foreground">Team YouTube Channel</h3>
                <p className="text-sm text-muted-foreground">More videos and robot demonstrations</p>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://www.youtube.com/channel/UCDCrf8ckC8DoCEa3QeOZgQw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Subscribe
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="pb-16 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary mb-2">Technical Achievements</h2>
          <p className="text-muted-foreground mb-10">
            Key milestones and capabilities of EVE's design
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent">Autonomous Performance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 5+1 cone autonomous routine with parking</li>
                <li>• High autonomous score of 80 points solo</li>
                <li>• Reliable and repeatable autonomous execution</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent">Competition Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Capable of scoring all 18 cones during teleop</li>
                <li>• Quick scoring on high, medium, or low junctions</li>
                <li>• Ability to pick up tipped-over cones during matches</li>
                <li>• Beacon scoring on any pole during endgame</li>
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

export default PowerPlayRobot;
