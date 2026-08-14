interface TeamMemberCardProps {
  name: string;
  image: string;
  bio: string;
  role?: string;
}

const TeamMemberCard = ({ name, image, bio, role }: TeamMemberCardProps) => {
  return (
    <div className="group tech-fade-in">
      <div className="overflow-hidden mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-bold text-primary">{name}</h3>
        {role && (
          <p className="text-sm font-medium text-accent uppercase tracking-wide">
            {role}
          </p>
        )}
        <p className="text-muted-foreground leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
