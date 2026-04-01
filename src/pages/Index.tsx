import heroImage from "@/assets/hero-world-food.jpg";
import marocImg from "@/assets/maroc.jpg";
import mexiqueImg from "@/assets/mexique.jpg";
import italieImg from "@/assets/italie.jpg";
import allemagneImg from "@/assets/allemagne.jpg";
import franceImg from "@/assets/france.jpg";
import algerieImg from "@/assets/algerie.jpg";
import FoodCard from "@/components/FoodCard";

const countries = [
  { name: "Maroc", image: marocImg },
  { name: "Mexique", image: mexiqueImg },
  { name: "Italie", image: italieImg },
  { name: "Allemagne", image: allemagneImg },
  { name: "France", image: franceImg },
  { name: "Algérie", image: algerieImg },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Credits Bar */}
      <div className="bg-primary py-4 text-center text-lg font-bold text-primary-foreground tracking-wide">
        🎉 Bienvenue aux parents ! 🎉
      </div>
      <div className="bg-primary/80 py-1.5 text-center text-xs font-medium text-primary-foreground">
        la classe de 3ac vous presente
      </div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Spécialités allemandes traditionnelles"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm opacity-0">
            {"\n"}
          </span>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-primary-foreground sm:text-7xl">
            Découvrez la cuisine
            <span className="block text-primary">du monde avec les 3ac</span>
          </h1>
        </div>
      </section>

      {/* Food Grid */}
      <section className="container py-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground sm:text-4xl">Pays présentés par notre classe</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, i) => (
            <FoodCard key={country.name} {...country} index={i} />
          ))}
        </div>
      </section>

      {/* Event Info */}
      <section className="border-t border-border bg-card">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {"\n"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {"\n"}
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            merci d'avoir lu se site
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Section Allemand — Portes Ouvertes 2026
      </footer>
    </div>
  );
};

export default Index;
