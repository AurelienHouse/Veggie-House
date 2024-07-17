import Container from "../../elements/Container";
import Heading from "../../elements/DisplayTitles/Heading";
import HeadingTitle from "../../elements/DisplayTitles/HeadingTitle";
import Button from "../../elements/Button";
import Product01 from "../../../medias/images/products/Product-1.jpg";
import Product02 from "../../../medias/images/products/Product-2.jpg";
import Product03 from "../../../medias/images/products/Product-3.jpg";

export default function Products() {
  return (
    <Container>
      <HeadingTitle variant="h3">Toujours de délicieux Burgers</HeadingTitle>

      <Heading
        theme="secondary"
        alignement="center"
        className="my-5 text-center"
      >
        Choisissez et savourez
      </Heading>

      <p className="text-center">
        Les burgers végétariens, préparés avec des ingrédients comme le tofu,
        les haricots noirs et le quinoa, sont riches en fibres, protéines
        végétales et micronutriments! Par exemple, un burger végétarien à base
        de soja contient environ 11 grammes de protéines et 3 grammes de fibres.
      </p>

      <div className="grid lg:grid-cols-3 gap-x-1 mb-20 mt-10">
        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto ">
          <div className="relative w-full h-72">
            <img
              src={Product01}
              alt="image d'un burger avec une viande bien epaise"
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Le spécial K
            </Heading>
            <p className="text-center">
              Les légumes-feuilles fournissent du fer et de la vitamine K,
              tandis que les légumes orange (carottes, patates douces) sont
              riches en vitamine.
            </p>
            <Button className="font-secondary mb-10 lg:mb-0" color="danger">
              Commandez
            </Button>
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto ">
          <div className="relative w-full h-72">
            <img
              src={Product02}
              alt="image d'un burger avec une viande bien epaise"
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Le Double Soja
            </Heading>
            <p className="text-center">
              Les Double Soja sont légèrement moins caloriques que leurs
              homologues à base de viande. Ils contribuent à réduire
              l’empreinte carbone en utilisant moins de ressources naturelles!
            </p>
            <Button className="font-secondary mb-10 lg:mb-0" color="danger">
              Commandez
            </Button>
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto ">
          <div className="relative w-full h-72">
            <img
              src={Product03}
              alt="image d'un burger avec une viande bien epaise"
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Le vert de Terre
            </Heading>
            <p className="text-center">
              Les burgers végétariens sont une alternative savoureuse et
              polyvalente à la viande, offrant des bienfaits pour la santé et
              l’environnement. 🌱🍔{" "}
            </p>
            <Button className="font-secondary lg:mb-0" color="danger">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
