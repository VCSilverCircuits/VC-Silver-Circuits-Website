import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import robot1Image from "@/assets/RobotPhotos/DecodeRobot2.webp";
import robot2Image from "@/assets/RobotPhotos/DecodeRobot3.webp";

const TEAM_NUMBER = 16158;
const SEASON = 2025;
const QUICK_STATS_URL = `https://scores.vcsilvercircuits.com/rest/v1/teams/${TEAM_NUMBER}/quick-stats?season=${SEASON}`;

// Fallback values shown if the FTCScout API is unreachable
const fallbackOprStats = [
  { label: "Overall OPR", value: "101.99", description: "" },
  { label: "TeleOP OPR", value: "69.48", description: "" },
  { label: "Auto OPR", value: "38.46", description: "" },
  { label: "Endgame OPR", value: "8.15", description: "" },
];

const Robot = () => {
  const [oprStats, setOprStats] = useState(fallbackOprStats);

  useEffect(() => {
    const fetchQuickStats = async () => {
      try {
        const res = await fetch(QUICK_STATS_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const rankOf = (s: { rank: number }) => `Rank ${s.rank} of ${data.count} teams`;
        setOprStats([
          { label: "Overall OPR", value: data.tot.value.toFixed(2), description: rankOf(data.tot) },
          { label: "TeleOP OPR", value: data.dc.value.toFixed(2), description: rankOf(data.dc) },
          { label: "Auto OPR", value: data.auto.value.toFixed(2), description: rankOf(data.auto) },
          { label: "Endgame OPR", value: data.eg.value.toFixed(2), description: rankOf(data.eg) },
        ]);
      } catch (err) {
        console.error("Failed to load FTCScout quick stats:", err);
      }
    };

    fetchQuickStats();
  }, []);

  const stats = [
    ...oprStats,
    { label: "High Score", value: "190", description: "League Tournament" },
    { label: "Close Auto", value: "12+0", description: "Close Auto Performance" },
    { label: "Far Auto", value: "N/A", description: "Far Auto Performance" },
    { label: "Avg ", value: "N/A", description: "During Tele-OP Practice" },
  ];

  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center py-16 mb-16 circuit-bg">
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
            <div className="group overflow-hidden">
              <img
                src={robot1Image}
                alt="Undertow Robot V2"
                className="w-full h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden">
              <img
                src={robot2Image}
                alt="Undertow Robot Competition"
                className="w-full h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 border-t border-border pt-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Vestige V1</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Latest iteration with enhanced capabilities and record-breaking performance
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

        <section className="pb-16 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary mb-2">Technical Achievements</h2>
          <p className="text-muted-foreground mb-10">
            Key milestones and capabilities of our robot design
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent">Autonomous Performance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced 12 Artifact autonomous routine</li>
                <li>• Alliance partner compatible autonomous execution</li>
                <li>• Smart Turret tracking implementation for consistent performance</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent">Competition Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Robot tilt feature for reliable parking</li>
                <li>• High-capacity Artifact Storage</li>
                <li>• Robust and reliable mechanical design</li>
                <li>• League Tournament proven performance</li>
                <li>• April Tag Tracking for consistent aiming</li>
                <li>• Variable distance shooting</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-sm text-muted-foreground italic">
            Last Updated: February 12, 2026
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Robot;
