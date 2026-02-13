import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import Footer from "@/components/Footer";
import robot1Image from "@/assets/RobotPhotos/DecodeRobot2.webp";
import robot2Image from "@/assets/RobotPhotos/DecodeRobot3.webp";
import robotV11Image from "@/assets/RobotPhotos/ITDRobot-V1-1.webp";
import robotV12Image from "@/assets/RobotPhotos/ITDRobot-V1-2.webp";
const Robot = () => {
  const stats = [
    { label: "Overall OPR", value: "101.99", description: "" },
    { label: "TeleOP OPR", value: "69.48", description: "" },
    { label: "Auto OPR", value: "38.46", description: "" },
    { label: "Endgame", value: "8.15", description: "" },
    { label: "High Score", value: "190", description: "League Tournament" },
    { label: "Close Auto", value: "12+0", description: "Close Auto Performance" },
    { label: "Far Auto", value: "N/A", description: "Far Auto Performance" },
    { label: "Avg ", value: "N/A", description: "During Tele-OP Practice" },
  ];

  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 circuit-bg p-12 rounded-2xl">
            <h1 className="text-5xl font-bold mb-4 gradient-text leading-tight">Our Robot: Vestige</h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for the 2025-2026 Decode season, Vestige represents all of the knowledge and expertise we have gained over the years into one robot.
          </p>
          <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
            2025-2026 DECODE Season
          </Badge>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
              <img
                src={robot1Image}
                alt="Undertow Robot V2"
                className="w-full h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
              <img
                src={robot2Image}
                alt="Undertow Robot Competition"
                className="w-full h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Vestige V1</CardTitle>
              <CardDescription className="text-lg">
                Latest iteration with enhanced capabilities and record-breaking performance
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

        {/* <section className="mb-16">
          <Card className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Legacy Undertow</CardTitle>
              <CardDescription className="text-lg">
                Previous iteration that laid the foundation for our current success. We built 2 versions of Undertow this year.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
                  <img
                    src={robotV11Image}
                    alt="Undertow V1 Robot Prototype"
                    className="w-full h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
                  <img
                    src={robotV12Image}
                    alt="Undertow V1 Competition Match"
                    className="w-full h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>


              <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
                Undertow V1 was our first Into The Deep competition robot. It established our
                reliable drive base, intake, and specimen systems, which set a <span className="font-semibold">Nevada State High Score Record</span>.
                Many of the lessons learned from V1's autonomous paths and endgame hang system
                directly influenced the enhancements in Undertow V2.
              </p>
            </CardContent>
          </Card>
        </section> */}
{/* 
        <section className="mb-16">
          <Card className="bg-gradient-tech border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Play className="h-6 w-6" />
                Robots in Action
              </CardTitle>
              <CardDescription>
                Watch our autonomous routine and competition performances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
                  <div>
                    <h3 className="font-semibold text-foreground">5+0 Specimen Auto</h3>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="https://www.youtube.com/watch?v=Ug-gPDnumV8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
                  <div>
                    <h3 className="font-semibold text-foreground">0+6 Sample Auto</h3>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="https://www.youtube.com/watch?v=lNuZh8ZRyjM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
                  <div>
                    <h3 className="font-semibold text-foreground">Nevada State Record with Legacy Undertow</h3>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="https://www.youtube.com/watch?v=Ug-gPDnumV8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
                  <div>
                    <h3 className="font-semibold text-foreground">Undertow V2 High Score</h3>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="https://www.youtube.com/watch?v=Mhzd73riopc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
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
            </CardContent>
          </Card>
        </section> */}

        <section>
          <Card className="bg-gradient-tech border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Technical Achievements</CardTitle>
              <CardDescription>
                Key milestones and capabilities of our robot design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Autonomous Performance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Advanced 12 Artafact autonomous routine</li>
                    <li>• Alliance partner compatible autonomous execution</li>
                    <li>• Smart Turret tracking implementation for consistent performance</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Competition Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Robot tilt feature for reliable parking</li>
                    <li>• High-capacity Artafact Storage</li>
                    <li>• Robust and reliable mechanical design</li>
                    <li>• League Tournament proven performance</li>
                    <li>• April Tag Tracking for consistent aiming</li>
                    <li>• Variable distance shooting</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <p className="text-sm text-muted-foreground italic">
                  Last Updated: February 12, 2026
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Robot;
