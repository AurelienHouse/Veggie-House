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
      category="evenement à venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
      temporibus sapiente enim molestiae, perspiciatis cum amet, eius
      consectetur voluptate dicta odit officia fugit atque consequatur a
      cupiditate labore repudiandae quae?
    </Slide>,
    <Slide
      image={Image02}
      category="Bientôt disponible"
      title="Nouveau Burger Sauce Maison"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
      temporibus sapiente enim molestiae, perspiciatis cum amet, eius
      consectetur voluptate dicta odit officia fugit atque consequatur a
      cupiditate labore repudiandae quae?
    </Slide>,
    <Slide
      image={Image03}
      category="Bientôt disponible"
      title="Nouveau Double Steak"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
      temporibus sapiente enim molestiae, perspiciatis cum amet, eius
      consectetur voluptate dicta odit officia fugit atque consequatur a
      cupiditate labore repudiandae quae?
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
