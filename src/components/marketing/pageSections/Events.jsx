/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Container from "../../elements/Container";
import Heading from "../../elements/DisplayTitles/Heading";
import AliceCarousel from "react-alice-carousel";
import "../../../css/carousel.css";
import Image01 from "../../../medias/images/events/dorian-hurst-d-igN2ptyC8-unsplash.jpg";
import Image02 from "../../../medias/images/products/OIG4.jpg";
import Image03 from "../../../medias/images/products/double-burger-02.jpg";

const Slide = ({ children, category, title, image }) => {
  return (
    <div className="grid md:grid-cols-2 p-3 md:p-6">
      <div className="p-5 md:p-10 md:mb-10">
        <Heading variant="h4">{category}</Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="tracking-wide text-lg leading-relaxed text-gray-800 font-light m-0 md:m-10">
          {children}
        </p>
      </div>
      <div className="relative w-full h-96 md:h-full">
        <img
          src={image}
          alt="Image d'un evenement à venir"
          className="bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0"
        />
      </div>
    </div>
  );
};
export default function Events() {
  const items = [
    <Slide
      image={Image01}
      category="événements à venir"
      title="vibrez sur place"
    >
      “Vivez l’adrénaline des grands matchs chez nous ! Rejoignez-nous pour des
      soirées sportives inoubliables, accompagnées de notre délicieux burger
      végétarien et de notre fameuse sauce maison.”
    </Slide>,
    <Slide
      image={Image02}
      category="Bientôt disponible"
      title="Nouveau Burger Sauce Maison"
    >
      Ce qui rend notre burger vraiment unique, c’est notre sauce maison.
      Élaborée avec soin par notre chef, cette sauce secrète apporte une
      explosion de saveurs à chaque bouchée. Un mélange parfait d’épices et
      d’herbes aromatiques, elle sublime chaque ingrédient et vous transporte
      dans un voyage gustatif exceptionnel.
    </Slide>,
    <Slide
      image={Image03}
      category="Pour tous les gôuts"
      title="Vous avez le choix"
    >
      Que vous soyez végétarien ou simplement à la recherche d’une alternative
      saine et délicieuse, nos burgers végétarien sont fait pour vous. Venez
      découvrir une nouvelle façon de savourer un burger, sans compromis sur le
      goût ou la qualité.
    </Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 border border-gray-100">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          disableButtonsControls
          infinite
          autoPlayInterval="4000"
          animationType="fadeout"
        />
      </div>
    </Container>
  );
}
