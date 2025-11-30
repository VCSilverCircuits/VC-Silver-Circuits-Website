import "swiper/css";
import "swiper/css/navigation";

import TeamMemberCard from "@/components/TeamMemberCard";
import aaronImage from "@/assets/TeamMembers/aaron.png";
import aidenImage from "@/assets/TeamMembers/aiden.png";
import carterImage from "@/assets/TeamMembers/carter.png";
import coralImage from "@/assets/TeamMembers/coral.png";
import eliImage from "@/assets/TeamMembers/eli.png";
import hunterImage from "@/assets/TeamMembers/hunter.png";
import shayleeImage from "@/assets/TeamMembers/shaylee.png";
import tuckerImage from "@/assets/TeamMembers/tucker.png";
import wesleyImage from "@/assets/TeamMembers/wesley.png";
import williamImage from "@/assets/TeamMembers/william.png";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Tucker",
      image: tuckerImage,
      role: "Team Captain & Design/Builder",
      bio: "Howdy, I'm Tucker. I've been working with this team for 2 seasons now and am glad to be a member for one final year before I graduate! When I first joined as a designer in CAD, my focus was on perfecting a mechanism on the team robot. Since then, this competition has become so much more to me--- A way to connect with people all around who share my interests and knowledge, and who have a desire to create something incredible! As recently-nominated team captain, I'm learning how to lead, to work with all kinds of people, and how to help others gain the experiences I've come to treasure."
    },
    {
      name: "Aiden",
      image: aidenImage,
      role: "Software Developer",
      bio: "Hi! My name is Aiden and I'm the software lead for the VC Silver Circuits, I love programming and being able to see it put into action through robotics. This is my fourth year in FTC and my second year as Software Lead. I'm currently a Senior at Virginia City High School while getting my associates of Science from Western Nevada College. I'm very excited for this season and all the possibilities it has for me"
    },
    {
      name: "Hunter",
      image: hunterImage,
      role: "Designer & Driver & Builder",
      bio: "Hi, my name is Hunter, a homeschooled Junior in high school attending classes at Western Nevada College pursuing a degree in Machine Tool Technology. I specialize in organization, designing in Fusion 360, business, building, and a little programming. I go to all events that I can go to, and I help anywhere that I am needed. I love FIRST because it has taught me so much, especially about using Fusion 360 for designing robot parts and seeing them come to life with my 3D printer. The best part is the friendships I have made and the opportunity to interact with the other teams and compete with them. I would love to be a Designer or a Manufacturing Engineer someday."
    },
    {
      name: "Aaron",
      image: aaronImage,
      role: "IT & Hardware & Builder",
      bio: "Hey there! I'm Aaron, and I'm excited to be joining VC Silver Circuits this year (2025 Season DECODE). I specialize in Information Technology, computer repairs, building, software development, and networking. I've always loved working with technology even when it's fixing a computer, writing code, or building robots and computers from the ground up. Before joining VC Silver Circuits, I was part of URSA Major, where I gained a ton of experience in robotics and teamwork. I'm looking forward to bringing my skills to the team, learning even more about robotics, and challenging new challenges alongside my teammates. I'm excited to contribute wherever I can and grow this season!"
    },
    {
      name: "William",
      image: williamImage,
      role: "Builder & Designer",
      bio: "Hi! I'm William, I joined the team in 2023. I am a Junior at TMCC high school. I learned a lot from being one of the drivers on our team last year. This year I have been learning Java and I am looking forward to learning about more CAD and programming. I have learned a lot about 3D printing, building, driving, designing, and planning.  I enjoy learning about the process of designing a working robot. I am hoping we will design a cool robot this year!."
    },
    {
      name: "Shaylee",
      image: shayleeImage,
      role: "Backup Driver",
      bio: "Hello! My name is Shaylee, and this is my first year on the team. I am 11 years old, and I am very excited to learn CAD and make some friends! This is my fifth year doing FIRST. When i’m older, I want to become an interior designer, but to start with jobs I would like to become a baker at bakery. I do other sports like gymnastics, and I’m also on a different robotics team in FLL, the Mindstorm Masters. I go to a small private school. I am very excited for this season!When i’m older, I want to become an interior designer, but to start with jobs I would like to become a baker at bakery. I do other sports like gymnastics, and I’m also on a different robotics team in FLL, the Mindstorm Masters."
    },
    {
      name: "Carter",
      image: carterImage,
      role: "General Member",
      bio: "Hello! My name is Carter, I am a sophomore at Virginia City High School. This is my first year In the first robotics program so my goal is to learn about robotics so I can one day code,design and build one of these robots as part of this group."
    },
    {
      name: "Eli",
      image: eliImage,
      role: "CAD",
      bio: "I am new to the team this year and am learning CAD and other things. I am in 7th grade at Virginia City Middle School. My first year is going to be great! I have learned a lot so far. I can make cool QR codes. I moved here about 2 years ago."
    },
    {
      name: "Coral",
      image: coralImage,
      role: "Builder & CAD",
      bio: "Hi, my name is Coral. I’m in 8th grade, and this is my first season doing anything related to robotics. I’m really excited to learn and have a great year. I’ve already made so many new friends on the team. I've enjoyed learning how to use CAD software to design parts for our robot, and I can't wait to see how our designs come to life during the build season."
    },
    {
      name: "Wesley",
      image: wesleyImage,
      role: "CAD & Programming",
      bio: "Hello my name is Wesley, this is my first year on the team and in the FTC program. I am excited to learn more about robotics like how to use CAD and program in Java."
    }
  ];


  const coaches = [
    {
      name: "Coach Michelle",
      role: "Head Coach",
      bio: "Hello! My name is Michelle. This will be my sixth season coaching this team. Becoming a robotics coach was never on my bucket list, but over the years, it has become a way of life for my family and I. I cherish the friendships that I have made and enjoy seeing the \"ah-ha\" moments these kids have had over the years. I love the values the FIRST program teaches and the knowledge the kids have gained. When I am not coaching this team, I am running the office side of my husband's and my business or homeschooling our children. I enjoy all things outdoors: from hiking, paddleboarding, and snowmobiling to dirt bike riding. I am always game for an adventure."
    },
    {
      name: "Coach Lisanne",
      role: "Assistant Coach",
      bio: "Hello! my name is Lisanne. This will be my 3rd season with the VC Silver Circuits, and my first season in the capacity of an assistant coach. I have loved watching our team’s creativity and perseverance through all stages of every season. I have been in education as a teacher, a substitute and a parent since 2001. I have loved watching the team learn and try new things and take on different roles each season. In my spare time I love to garden, read, run and go on vacations."
    },
    {
      name: "Mentor Rogan",
      role: "International Mentor",
      bio: "Hello, my name is Rogan. This will be my 5th season with the VC Silver Circuits and my first season in the capacity of coach, prior to that I was a mentor for the team.  I really enjoy the technical aspects of FTC and sharing my knowledge with the team so they can tackle the challenges of the season. I have worked in STEM for about 25 years and really appreciate all the practical skills that are learned through the program. In my spare time I enjoy working on antique cars and electronics."
    },
    {
      name: "Mentor Coen",
      role: "Technical Mentor",
      bio: "Hello! I'm Coen, a mentor of the VC Silver Circuits. Having recently graduated high school and subsequently graduated from the team, I have shifted my focus to helping the new and existing team members succeed in the program. I am aiming for a degree in mechanical engineering at UNR and hope to find a carrier with 3D design. this will be my 8th year with the program having done a single year of First Lego League with the VC Silver Bricks and 6 years of FIRST Tech Challenge. I help team members with 3D Modeling in Autodesk Fusion and with robot design strategy. I'm excited to see how the team does this upcoming season."
    }
  ];

  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 circuit-bg p-12 rounded-2xl">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are the passionate individuals who make up the VC Silver Circuits, each bringing unique skills and dedication to our robotics journey.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                image={member.image}
                bio={member.bio}
                role={member.role}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Coaches & Mentors</h2>
          <div className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech tech-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className={`w-full border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-tech tech-fade-in ${index === 3 ? "lg:col-span-3" : ""
                  }`}
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{coach.name}</h3>
                <p className="text-accent font-medium uppercase tracking-wide text-sm mb-4">
                  {coach.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Team;