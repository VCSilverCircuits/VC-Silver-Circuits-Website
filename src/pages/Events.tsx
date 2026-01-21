import { useEffect, useState } from "react";
import ICAL from "ical.js";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import Footer from "@/components/Footer";
import worldsTeamImage from "@/assets/TeamPhotos/worlds-team.webp";

const Events = () => {
  const [latestEvent, setLatestEvent] = useState<any>(null);

  const achievements = [
    { icon: <Trophy className="h-5 w-5" />, label: "3rd Place", description: "Jemison Division out of 65 teams" },
    { icon: <Trophy className="h-5 w-5" />, label: "29th Overall", description: "Entire World Championship event" },
    { icon: <Users className="h-5 w-5" />, label: "Team Growth", description: "Immense learning and development" }
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/calendar.ics"); 
        const icsText = await res.text();

        const jcalData = ICAL.parse(icsText);
        const comp = new ICAL.Component(jcalData);
        const events = comp.getAllSubcomponents("vevent").map(ev => {
          const e = new ICAL.Event(ev);
          return {
            summary: e.summary,
            start: e.startDate.toJSDate ? e.startDate.toJSDate() : new Date(e.startDate.toString()),
            end: e.endDate.toJSDate ? e.endDate.toJSDate() : new Date(e.endDate.toString()),
            location: e.location,
          };
        });

        const now = new Date();
        const upcomingNoNVEvents = events
          .filter(e => e.start > new Date() && e.summary.includes("NoNV"))
          .sort((a, b) => a.start.getTime() - b.start.getTime());

        setLatestEvent(upcomingNoNVEvents[0] || null);
      } catch (err) {
        console.error("Failed to load ICS:", err);
      }
    };

    fetchEvents();
  }, []);


  return (
    <>
      <div className="flex flex-col min-h-screen tech-fade-in">
        <main className="flex-grow pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 circuit-bg p-12 rounded-2xl">
              <h1 className="text-5xl font-bold mb-6 gradient-text">Our Events & Achievements</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Following our journey through competitions, from local qualifiers to the World Championship stage.
              </p>
            </div>
      {latestEvent && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Next FIRST Northern Nevada Event</h2>
          <Card className="bg-gradient-tech border-border hover:shadow-tech transition-all">
            <CardContent>
                <h3 className="text-xl font-semibold text-accent mb-2 mt-4">{latestEvent.summary}</h3>
              <p className="text-muted-foreground mb-1">
                <Calendar className="inline h-4 w-4 mr-2" />
                {latestEvent.start.toLocaleString()} – {latestEvent.end.toLocaleString()}
              </p>
              {latestEvent.description && <p className="text-muted-foreground">{latestEvent.description}</p>}
            </CardContent>
          </Card>
        </section>
      )}
            <section className="mb-16">
              <Card className="bg-gradient-hero border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech overflow-hidden">
                <div className="relative">
                  <img
                    src={worldsTeamImage}
                    alt="2024 FIRST World Championship Team"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <Badge variant="secondary" className="mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      April 16-19, 2025
                    </Badge>
                    <h2 className="text-4xl font-bold text-primary mb-2">2025 FIRST World Championship</h2>
                    <p className="text-lg text-muted-foreground flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Houston, Texas
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech tech-fade-in"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4 text-accent">
                        {achievement.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{achievement.label}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;
