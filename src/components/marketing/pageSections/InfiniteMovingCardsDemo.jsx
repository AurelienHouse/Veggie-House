import Container from "../../elements/Container";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";



export function InfiniteMovingCardsDemo() {
  return (
    
      <Container>
        <div className="h-[24rem] rounded-md flex flex-col  bg-white  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
        <div className="h-[24rem] rounded-md flex flex-col bg-white  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </Container>
    
  );
}

const testimonials = [
  {
    note: "Note: ⭐⭐⭐⭐⭐",
    quote:
      "En tant que quadragénaire actif, j’ai trouvé chez Veggie House une cuisine végétarienne savoureuse et équilibrée. Les plats sont non seulement délicieux mais aussi nourrissants, parfaits pour maintenir mon énergie tout au long de la journée. Une adresse incontournable !",
    name: "Raymond D.",
    title: "Photographe",
    image:
      "https://aurelienmaison.book.fr/files/1/112482/g_20_624hw8dJGqSE.jpg",
  },
  {
    note: "Note: ⭐⭐⭐⭐⭐",
    quote:
      "À 70 ans, j'ai découvert le plaisir de manger végétarien chez Veggie House. Les plats sont délicieux et me font me sentir en pleine forme. Une expérience à renouveler !",
    name: "Brigitte M.",
    title: "Enseignante retraitée",
    image:
      "https://aurelienmaison.book.fr/files/1/112482/g_20_Dv8mZSFoE0Iv.jpg",
  },
  {
    note: "Note: ⭐⭐⭐⭐⭐",
    quote:
      "Normalement c'est ma mère qui me force à manger des légumes, mais chez Veggie Burger, c'est moi qui lui demande pour y aller",
    name: "Gabriel A.",
    title: "Petit écolier",
    image:
      "https://aurelienmaison.book.fr/files/1/112482/g_20_IevgzHrFJAtS.jpg",
  },
  {
    note: "Note: ⭐⭐⭐⭐⭐",
    quote:
      "J'aime tellement les animaux que je veux manger la même chose qu'eux",
    name: "Sandrine R.",
    title: "Vétérinaire",
    image:
      "https://aurelienmaison.book.fr/files/1/112482/g_20_URdAQjxOQgyX.jpg",
  },
  {
    note: "Note: ⭐⭐⭐⭐⭐",
    quote:
      "Quand je mange Veggie Burger, j'ai la sensation de monter l'Everest",
    name: "Inox T.",
    title: "Créateur de contenu",
    image:
      "https://aurelienmaison.book.fr/files/1/112482/g_20_UyV16PxFqPO3.jpg",
  },
];
