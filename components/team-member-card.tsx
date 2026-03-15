interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function TeamMemberCard({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/3">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-background-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-semibold text-text-primary mb-1">
          {name}
        </h3>
        <p className="text-accent-blue font-medium mb-4">
          {role}
        </p>
        <p className="text-text-secondary leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}
