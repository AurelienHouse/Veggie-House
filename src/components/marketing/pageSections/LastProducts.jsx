import Container from "../../elements/Container";
import Image1 from "../../../medias/images/products/LastProducts-1.jpg";
import Image2 from "../../../medias/images/products/LastProducts-2.jpg";
import Image3 from "../../../medias/images/products/LastProducts-3.jpg";

export default function LastProducts() {
  return (
    <Container>
      <div className="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 gap-3 lg:gap-9 w-full h-96 md:h-full lg:h-96 lg:px-11 my-20 text-white uppercase">
        <div className="relative bg-primary lg:row-span-2 h-full rounded-md p-5 md:p-10 lg:p-7">
          <img
            src={Image1}
            alt="un delicieux hamburger exposé sur une planche en bois"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-0"
          />
          <div className="z-10 relative">
            <span className="block font-bold text-lg">No Killer Burger</span>
            <span className="text-xl lg:text-2xl font-black">
              Burger le plus populaire
            </span>
          </div>
        </div>
        <div className="relative bg-yellow-primary h-full rounded-md p-5 md:p-10 lg:p-7">
          <img
            src={Image2}
            alt="deux delicieux hamburgers exposés sur une planche en bois"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-0"
          />
          <div className="z-10 relative">
            <span className="block font-bold text-lg">Double Végétarien</span>
            <span className="block text-xl lg:text-2xl font-black">
              plus de plaisir
            </span>
            <span className="text-xl lg:text-2xl font-black">plus de goût</span>
          </div>
        </div>
        <div className="relative bg-yellow-primary h-full rounded-md p-5 md:p-10 lg:p-7">
          <img
            src={Image3}
            alt="deux delicieux hamburger exposés sur une planche en bois vu de haut"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-0"
          />
          <div className="z-10 relative">
            <span className="block font-bold text-lg">Island Burger</span>
            <span className="text-xl lg:text-2xl font-black">
              frais & pimenté
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
