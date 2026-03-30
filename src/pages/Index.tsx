import heroImage from "@/assets/hero-german-food.jpg";
import brezelImg from "@/assets/brezel.jpg";
import bratwurstImg from "@/assets/bratwurst.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import kartoffelsalatImg from "@/assets/kartoffelsalat.jpg";
import apfelstrudelImg from "@/assets/apfelstrudel.jpg";
import sauerkrautImg from "@/assets/sauerkraut.jpg";
import FoodCard from "@/components/FoodCard";

const foods = [
  {
    name: "Brezel",
    germanName: "Die Brezel",
    description: "Le célèbre bretzel bavarois, doré et croustillant, saupoudré de gros sel. Un incontournable de la boulangerie allemande !",
    image: brezelImg,
  },
  {
    name: "Bratwurst",
    germanName: "Die Bratwurst",
    description: "La saucisse grillée emblématique d'Allemagne, servie avec de la moutarde. Chaque région a sa propre recette !",
    image: bratwurstImg,
  },
  {
    name: "Schnitzel",
    germanName: "Das Schnitzel",
    description: "Une escalope panée et dorée, croustillante à souhait, accompagnée d'un quartier de citron. Un classique germanique.",
    image: schnitzelImg,
  },
  {
    name: "Kartoffelsalat",
    germanName: "Der Kartoffelsalat",
    description: "La salade de pommes de terre à l'allemande, assaisonnée de vinaigre et d'herbes fraîches. Un accompagnement traditionnel.",
    image: kartoffelsalatImg,
  },
  {
    name: "Apfelstrudel",
    germanName: "Der Apfelstrudel",
    description: "Le strudel aux pommes, une pâtisserie feuilletée garnie de pommes, cannelle et raisins secs. Un dessert réconfortant.",
    image: apfelstrudelImg,
  },
  {
    name: "Sauerkraut",
    germanName: "Das Sauerkraut",
    description: "Le chou fermenté traditionnel, riche en saveurs et en probiotiques. L'accompagnement parfait des plats de viande.",
    image: sauerkrautImg,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Credits Bar */}
      <div className="bg-primary/90 py-2 text-center text-xs font-medium text-primary-foreground backdrop-blur-sm">
        Créé par <span className="font-bold">Jad</span> — Créateur du site &amp; autre · <span className="font-bold">Ali</span> — Présentateur &amp; grande partie du projet
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
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            🇩🇪 Portes Ouvertes — Section Allemand
          </span>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-primary-foreground sm:text-7xl">
            Découvrez la cuisine
            <span className="block text-primary"> allemande</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-primary-foreground/80">
            Venez goûter aux spécialités que nous avons préparées pour vous lors de nos portes ouvertes !
          </p>
        </div>
      </section>

      {/* Food Grid */}
      <section className="container py-20">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Nos spécialités
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Les plats traditionnels que vous pourrez déguster
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food, i) => (
            <FoodCard key={food.name} {...food} index={i} />
          ))}
        </div>
      </section>

      {/* Event Info */}
      <section className="border-t border-border bg-card">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            📍 Informations pratiques
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Retrouvez-nous lors des portes ouvertes de l'école pour découvrir et déguster
            ces spécialités allemandes préparées par les élèves de la section Allemand.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Willkommen! — Bienvenue !
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
