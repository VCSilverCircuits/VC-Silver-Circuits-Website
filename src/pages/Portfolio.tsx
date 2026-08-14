import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

import img2021_1 from "@/assets/Gallery/2021/1.webp";
import img2021_2 from "@/assets/Gallery/2021/2.webp";
import img2021_3 from "@/assets/Gallery/2021/3.webp";
import img2021_4 from "@/assets/Gallery/2021/4.webp";

import img2022_1 from "@/assets/Gallery/2022/1.webp";
import img2022_2 from "@/assets/Gallery/2022/2.webp";
import img2022_3 from "@/assets/Gallery/2022/3.webp";
import img2022_4 from "@/assets/Gallery/2022/4.webp";

import img2023_1 from "@/assets/Gallery/2023/1.webp";
import img2023_2 from "@/assets/Gallery/2023/2.webp";
import img2023_3 from "@/assets/Gallery/2023/3.webp";
import img2023_4 from "@/assets/Gallery/2023/4.webp";

import img2024_1 from "@/assets/Gallery/2024/1.webp";
import img2024_2 from "@/assets/Gallery/2024/2.webp";
import img2024_3 from "@/assets/Gallery/2024/3.webp";
import img2024_4 from "@/assets/Gallery/2024/4.webp";

const seasons = [
    {
        title: "2024–2025 Season INTO THE DEEP",
        images: [img2024_1, img2024_2, img2024_3, img2024_4],
        achievements: [
            "FIRST World Championship – Jemison Division – 29th place (quals), Winning Alliance 2nd Pick",
            "Lobster Cup International – Division Winning Alliance Captain, Finalist Alliance Captain",
            "NV Northern League Tournament – 1st place (quals), Dean's List Semifinalist (Tucker Knight), Inspire Award Winner, Winning Alliance Captain",
            "Nevada Championship – 1st place (quals), Inspire Award Winner, Finalist Alliance Captain",
            "NV Northern League Meets 1N–6N – Multiple qualifications, eliminations, and placements; top performances in most events",
            "NV Northern Scrimmage – 1st place (quals), top scores in qualification matches",
        ],
        quickStats: {
            totalNP: "172.10",
            auto: "33.64",
            teleop: "138.46",
            endgame: "23.18",
            rankPercentile: {
                totalNP: "168th / 97.81%",
                auto: "384th / 94.99%",
                teleop: "150th / 98.05%",
                endgame: "146th / 98.10%",
            },
        },
    },
    {
        title: "2023–2024 Season CENTERSTAGE",
        images: [img2023_1, img2023_2, img2023_3, img2023_4],
        achievements: [
            "FIRST World Championship - Ochoa Division Qualified - 16th place (quals)",
            "NV Northern League Tournament: Inspire Award, Promote Award, Winning Alliance 1st pick, 2 Dean’s List Semi-Finalists",
            "Nevada Championship: Inspire Award, Semi-Final Alliance Captain, Dean’s List Finalist",
        ],
        quickStats: {
            totalNP: "113.96",
            auto: "42.11",
            teleop: "51.50",
            endgame: "24.72",
            rankPercentile: {
                totalNP: "319th / 95.23%",
                auto: "474th / 92.90%",
                teleop: "168th / 97.49%",
                endgame: "1924th / 71.14%",
            },
        },
    },
    {
        title: "2022–2023 Season POWER PLAY",
        images: [img2022_1, img2022_2, img2022_3, img2022_4],
        achievements: [
            "FIRST Championship – Houston – World Championship – Edison Division: Motivate Award",
            "Nevada Championship: Compass Award 2nd Place, Innovate Award sponsored by Raytheon Technologies 2nd Place, Inspire Award, Promote Award 2nd Place, Think Award 2nd Place, Winning Alliance – Captain",
            "NV Northern League Tournament: 2 Dean’s List Semi-Finalists, Inspire Award 2nd Place, Think Award, Winning Alliance – Captain",
        ],
        quickStats: {
            totalNP: "154.07",
            auto: "50.30",
            teleop: "77.53",
            endgame: "40.88",
            rankPercentile: {
                totalNP: "13th / 99.79%",
                auto: "4th / 99.95%",
                teleop: "28th / 99.52%",
                endgame: "87th / 98.48%",
            },
        },
    },
    {
        title: "2021–2022 Season FREIGHT FRENZY",
        images: [img2021_1, img2021_2, img2021_3, img2021_4],
        achievements: [
            "Nevada State Championship: Finalist Alliance – Captain, Inspire Award, Think Award 3rd Place",
            "NV Northern League Tournament: Inspire Award 2nd Place, Think Award, Winning Alliance – Captain",
        ],
        quickStats: {
            totalNP: "122.49",
            auto: "24.79",
            teleop: "48.50",
            endgame: "57.90",
            rankPercentile: {
                totalNP: "184th / 95.84%",
                auto: "1030th / 76.63%",
                teleop: "207th / 95.32%",
                endgame: "66th / 98.52%",
            },
        },
    },
];

const TeamPortfolio: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col tech-fade-in">
            <div className="container mx-auto px-4 pt-20 pb-12 flex-1">
                <div className="text-center mb-16 mt-10 py-16">
                    <h1 className="text-5xl font-bold">Team History</h1>
                    <p className="text-xl text-muted-foreground mt-4">Every season since we started, with the portfolios to match</p>
                </div>

                {seasons.map((season, index) => (
                    <motion.section
                        key={index}
                        className="mb-20 border-t border-border pt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-primary">{season.title}</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {season.images.map((img, idx) => (
                                <motion.img
                                    key={idx}
                                    src={img}
                                    alt={`${season.title} Image ${idx + 1}`}
                                    className="w-full h-48 object-cover cursor-pointer"
                                />
                            ))}
                        </div>

                        {season.quickStats && (
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-6 text-center text-primary">Quick Stats</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-foreground">
                                    {[
                                        { label: "Total", key: "totalNP" },
                                        { label: "Auto", key: "auto" },
                                        { label: "Teleop", key: "teleop" },
                                        { label: "Endgame", key: "endgame" },
                                    ].map(({ label, key }, idx) => {
                                        const value = season.quickStats[key];
                                        const rank = season.quickStats.rankPercentile[key]; // e.g., "384th / 94.99%"
                                        return (
                                            <div
                                                key={idx}
                                                className="flex flex-col items-center justify-center"
                                            >
                                                <p className="font-medium mb-1 text-center">{label}</p>
                                                <p className="text-lg font-bold mb-1 text-center">{value}</p>
                                                {rank && <p className="text-sm text-muted-foreground text-center">{rank}</p>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}


                        <div>
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full text-left font-medium text-lg mb-2 py-2 text-primary underline-offset-4 hover:underline transition-all duration-200"
                            >
                                {openIndex === index ? "Hide Achievements" : "View Achievements"}
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.ul
                                        key="achievements"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground overflow-hidden"
                                    >
                                        {season.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.section>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default TeamPortfolio;
