interface FoodCardProps {
  name: string;
  image: string;
  index: number;
}

const FoodCard = ({ name, image, index }: FoodCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg aspect-square opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        width={800}
        height={800}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/50">
        <h3 className="text-3xl font-black text-white drop-shadow-lg">{name}</h3>
      </div>
    </div>
  );
};

export default FoodCard;
