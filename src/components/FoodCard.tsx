interface FoodCardProps {
  name: string;
  germanName: string;
  description: string;
  image: string;
  index: number;
}

const FoodCard = ({ name, germanName, description, image, index }: FoodCardProps) => {
  return (
    <div
      className="group overflow-hidden rounded-lg bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="text-sm font-medium text-primary italic mb-2">{germanName}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FoodCard;
