import Illustration from "../../../medias/images/background/bg-food.jpg";
import Container from "../../elements/Container";
import Header from "./Header";
import Products from "../../../medias/images/heroTop/burger-hero-top.png";
import Button from "../../elements/Button";
import { Link } from "react-router-dom";

export default function HeroTop() {
  return (
    <div className="bg-primary w-full">
      <div
        className="bg-repeat w-full h-full pb-20 md:pb-40"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Container>
          <Header />
          <div className="relative mt-10 md:mt-28 w-full">
            <img
              src={Products}
              alt="image d'un menu Hamburger frites et soda"
              className="hidden lg:block absolute z-0 lg:-top-64 right-0"
              style={{ width: "568px" }}
            />
            <div className="hidden lg:block absolute rounded-full right-80 top-40 bg-redPrice w-40 h-40 p-3">
              <div className="w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center ">
                <div className="text-center ">
                  <span className="block font-extrabold">
                    <span className="text-5xl">8</span>.49€
                  </span>
                  <span className="tracking-widest uppercase text-sm">
                    seulement
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-secondary uppercase text-left md:text-center lg:text-left">
              <h1 className="mb-4 font-semibold">
                Le moment de goûter au bon goût végétarien.
              </h1>
              <h2 className="font-secondary shadowTitleSecondary">
                <span className="text-7xl md:text-8xl block">Veggie</span>
                <span className="text-5xl md:text-6xl block sm:inline-block">
                  House
                </span>
                <span className="text-4xl ml-0 sm:ml-3">
                  Click
                  <span className="text-redPrice">&</span>
                  Collect
                </span>
              </h2>
            </div>
          </div>
          <Link to="/Signup">
            <Button
              className="mt-5 w-full lg:w-1/2"
              color="secondary"
              theme="big"
            >
              Créer mon compte
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  );
}
