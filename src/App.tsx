import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Team from "./pages/Team";
import ITDRobot from "./pages/2025Robot";
import CSRobot from "./pages/2024Robot";
import PPlayRobot from "./pages/2023Robot";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/GoToTop";
import TeamPortfolio from "./pages/Portfolio";
import Sponsors from "./pages/Sponsors";
import DecodeRobot from "./pages/2026Robot";
import teamHero from "@/assets/TeamPhotos/team-hero.webp";
import teamPhoto1 from "@/assets/TeamPhotos/team-photo-1.webp";
import teamPhoto2 from "@/assets/TeamPhotos/team-photo-2.webp";
import worldsTeam from "@/assets/TeamPhotos/worlds-team.webp";
import hunter from "@/assets/TeamMembers/hunter.webp";
import aiden from "@/assets/TeamMembers/aiden.webp";
import tucker from "@/assets/TeamMembers/tucker.webp";
import william from "@/assets/TeamMembers/william.webp";
import powerPlay1 from "@/assets/RobotPhotos/power-play-1.webp";
import powerPlay2 from "@/assets/RobotPhotos/power-play-2.webp";
import itd1 from "@/assets/RobotPhotos/ITDRobot-1.webp";
import itd2 from "@/assets/RobotPhotos/ITDRobot-2.webp";
import cs1 from "@/assets/RobotPhotos/centerstage-robot-1.webp";
import cs2 from "@/assets/RobotPhotos/centerstage-robot-2.webp";
import { Bot } from "lucide-react";

const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    preloadImages([
      teamHero,
      teamPhoto1,
      teamPhoto2,
      worldsTeam,
      hunter,
      aiden,
      tucker,
      william,
      powerPlay1,
      powerPlay2,
      itd1,
      itd2,
      cs1,
      cs2,
    ]);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/vcscteam" element={<Team />} />
            <Route path="/decode-robot" element={<DecodeRobot />} />
            <Route path="/into-the-deep-robot" element={<DecodeRobot />} />
            <Route path="/into-the-deep" element={<ITDRobot />} />
            <Route path="/center-stage-robot" element={<CSRobot />} />
            <Route path="/power-play-robot" element={<PPlayRobot />} />
            <Route path="/media" element={<Media />} />
            <Route path="/portfolio" element={<TeamPortfolio />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div
            style={{
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              zIndex: 50,
            }}
          >

          </div>
        </BrowserRouter>
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
