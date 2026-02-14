
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Trophy, Users, Zap, ExternalLink, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import teamHeroImage from "@/assets/TeamPhotos/team-hero.webp";
import teamPhoto1 from "@/assets/TeamPhotos/team-photo-1.webp";
import teamPhoto2 from "@/assets/TeamPhotos/team-photo-2.webp";

const Index = () => {
  const [showIntro, setShowIntro] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const seenIntro = sessionStorage.getItem("seenIntro");
    if (!seenIntro) {
      setShowIntro(true);
      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("seenIntro", "true");
      }, isMobile ? 1500 : 2500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "World Championship",
      description: "1st Place in Jemison Division",
      highlight: "2025 INTO THE DEEP",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Robot Performance",
      description: "401 Point High Score",
      highlight: "Team Record",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Spirit",
      description: "13 Strong and Dedicated Team Members",
      highlight: "Strong",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: isMobile ? 0.6 : 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold gradient-text"
            >
              VC Silver Circuits
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="spinner"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-white mt-4"
            >
              Loading your experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="min-h-screen">
          <motion.section
            className="relative min-h-[80dvh] sm:min-h-[100dvh] flex items-center justify-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            <div className="absolute inset-0">
              <img
                src={teamHeroImage}
                alt="VC Silver Circuits Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeUp}
              >
                <Badge variant="secondary" className="mb-4 sm:mb-6 text-sm sm:text-lg px-4 sm:px-6 py-1 sm:py-2">
                  We are FTC Team #16158
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                VC Silver Circuits
              </motion.h1>
              <motion.p
                className="text-lg sm:text-2xl font-medium italic text-accent mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.25, duration: 0.8 }}
                viewport={{ once: true }}
              >
                "Prospecting for potential, mining for innovation."
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Virginia City, Nevada
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                We are the VC Silver Circuits, a team participating in the FIRST
                Tech Challenge program. Our team consists of ten team members,
                two coaches, and two mentors, dedicated to pursuing knowledge in
                robotics and engineering. We come from a small town in rural
                Nevada called Virginia City in Storey County, Nevada, but our passion for robotics is big.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/team">Meet Our Team</Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/into-the-deep-robot">See Our Current Robot</Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="py-20 circuit-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-primary">
                  Our Mission
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground mb-12">
                  Our mission is to <span className="text-primary font-semibold">raise the level of robotics in Nevada</span> by sharing our knowledge and passion, helping others grow in STEM.
                  Through collaboration and mentorship, we aim to strengthen our community first.
                  As a result of this dedication, we strive to <span className="text-accent font-semibold">excel at the Nevada State Championship</span> and earn the opportunity to compete at the <span className="text-accent font-semibold">Worldwide Championship</span>,
                  showcasing the talent and commitment of our team.
                </p>
              </div>
            </div>
          </motion.section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 text-primary"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Our Achievements
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech group">
                      <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                          {achievement.icon}
                        </div>
                        <Badge variant="secondary" className="mb-4">
                          {achievement.highlight}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <motion.section
            className="py-20 bg-gradient-tech"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-primary">
                Our Team in Action
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[teamPhoto2, teamPhoto1].map((photo, i) => (
                  <motion.div
                    key={i}
                    className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={photo}
                      alt="VC Silver Circuits Team"
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Heart className="h-16 w-16 text-accent mx-auto mb-8" />
                <h2 className="text-4xl font-bold mb-8 text-primary">
                  Support Our Journey or Ask us Anything!
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  Help us continue our robotics journey and reach new heights.
                  Your support helps us compete, learn, and inspire the next
                  generation of STEM leaders. Have questions? We're here to
                  connect!
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
          </motion.section>

          <motion.section
            className="py-20 circuit-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-primary">
                  About FIRST Tech Challenge
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  FIRST Tech Challenge is an extracurricular program for
                  students in grades 7–12 to learn about the fields of science,
                  technology, engineering, and math (STEM) through hands-on
                  learning in the field of robotics.
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
          </motion.section>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
