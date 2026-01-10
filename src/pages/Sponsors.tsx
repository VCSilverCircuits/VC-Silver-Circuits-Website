import { FC } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

import sponsor1 from "@/assets/Sponsors/1.webp"; // Tract
import sponsor2 from "@/assets/Sponsors/2.webp"; // Gene Haas
import sponsor3 from "@/assets/Sponsors/3.webp"; // Rev Robotics
import sponsor4 from "@/assets/Sponsors/4.webp"; // FIRST Nevada
import sponsor5 from "@/assets/Sponsors/5.webp"; // Kimmie Candy
import sponsor6 from "@/assets/Sponsors/6.webp"; // Tesla
import sponsor7 from "@/assets/Sponsors/7.webp"; // Comstock
import sponsor8 from "@/assets/Sponsors/8.webp"; // Dolan Auto
import sponsor9 from "@/assets/Sponsors/9.webp"; // IBEW
import sponsor10 from "@/assets/Sponsors/10.webp"; // 

const sponsorsByCategory = {
  major: [
    { logo: sponsor1, website: "https://www.tract.com/", name: "Tract" },
    { logo: sponsor9, website: "https://www.ibew.org/", name: "IBEW" },
    { logo: sponsor2, website: "https://ghaasfoundation.org/content/ghf/en/home.html", name: "Gene Haas" },
    { logo: sponsor10, website: "https://www.sendcutsend.com/", name: "SendCutSend" },
    { logo: sponsor3, website: "https://www.revrobotics.com/", name: "REV Robotics" },
  ],
  current: [
    { logo: sponsor5, website: "https://kimmiecandy.com/", name: "Kimmie Candy" },
    { logo: sponsor6, website: "https://tesla.com", name: "Tesla" },
    { logo: sponsor7, website: "https://comstock.inc/", name: "Comstock" },
    { logo: sponsor8, website: "https://www.dolanautogroup.com/", name: "Dolan Auto" },
  ],
};

const supporters = [
  { logo: sponsor4, website: "https://firstnevada.org/", name: "FIRST Nevada" },
];

const SponsorCard: FC<{ sponsor: { logo: string; website: string; name: string }; size: string; index: number }> = ({ sponsor, size, index }) => (
  <motion.a
    href={sponsor.website}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center p-4 rounded-xl bg-white hover:scale-105 transition-transform duration-300 shadow-md tech-fade-in"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
  >
    <figure className={`${size} flex items-center justify-center p-2`}>
      <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="max-w-full max-h-full object-contain" />
    </figure>
  </motion.a>
);

const SponsorSection: FC<{ title: string; sponsors: typeof sponsorsByCategory[keyof typeof sponsorsByCategory] | typeof supporters; size: string }> = ({ title, sponsors, size }) => (
  <section className="flex flex-col items-center mb-12 w-full">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">{title}</h2>
    <motion.div className="flex flex-wrap justify-center gap-8">
      {sponsors.map((sponsor, index) => (
        <SponsorCard key={index} sponsor={sponsor} size={size} index={index} />
      ))}
    </motion.div>
  </section>
);
const ThankYouSponsors: FC = () => (
  <div className="min-h-screen flex flex-col bg-black text-white">
    <div className="container mx-auto px-4 pt-32 pb-12 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">Thank You to Our Sponsors and Donors!</h1>
      <p className="text-center text-gray-300 mb-6 max-w-3xl font-bold">
        Our team wouldn’t be possible without the generous support of our sponsors. We sincerely appreciate your contribution to our success!
      </p>

      {/* Heartfelt Note */}
      <p className="text-center text-gray-400 mb-12 max-w-3xl italic font-bold">
        A heartfelt thank you to all of our donors—big and small—your support makes everything we do possible.
      </p>

      <SponsorSection title="Major Sponsors" sponsors={sponsorsByCategory.major} size="w-44 h-44" />

      <SponsorSection title="Supported By" sponsors={supporters} size="w-44 h-44" />

      <SponsorSection title="Past Sponsors" sponsors={sponsorsByCategory.current} size="w-32 h-32" />
    </div>

    <Footer />
  </div>
);


export default ThankYouSponsors;
