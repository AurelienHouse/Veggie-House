import Container from "../../elements/Container";
import Heading from "../../elements/DisplayTitles/Heading";

import Assiette from "../../../medias/images/background/Assiette-burger-frites.png";
import Burger from "../../../medias/images/background/Burger.png";
import Sauce from "../../../medias/images/background/Sauce-pimente.png";

export default function Booking() {
  return (
    <div>
      <Container>
        <div className="relative mb-20">
          <img
            src={Burger}
            alt="un hamburger"
            className="absolute -top-20 -left-36 z-10 "
          />
          <img
            src={Sauce}
            alt="une bouteille de sauce pimenté"
            className="absolute bottom-0 left-0"
          />
          <img
            src={Assiette}
            alt="une assiette avec un burger et des frites vu de haut"
            className="absolute -bottom-52 -right-96"
          />
          <div className="max-w-3xl mx-auto px-10 py-20">
            <Heading variant="h3" alignement="center">
              Réservation
            </Heading>
            <Heading alignement="center" theme="secondary" className="mt-5">
              Réservez votre table
            </Heading>
            <form className="grid grid-cols-2 gap-x-7 gap-y-6 mt-20">
              <div>
                <label htmlFor="name" className="">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="John Doe"
                  className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="john.doe@courriel.com"
                  className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                />
              </div>
              <div>
                <label htmlFor="date" className="">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  autoComplete="off"
                  className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                />
              </div>
              <div>
                <label htmlFor="date" className="">
                  Heure
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                />
              </div>
              
              <div>
                <label htmlFor="customer" className="">
                  Nombre de personnes
                </label>
                <input
                  type="text"
                  name="customer"
                  id="customer"
                  placeholder="5"
                  className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                />
              </div>
              <div>
                <label htmlFor="sendBooking" className="invisible">
                  Réservez votre repas
                </label>
                <input
                  type="button"
                  name="sendBooking"
                  id="sendBooking"
                  className="bg-redPrice hover:bg-redPrice-hover w-full text-white font-secondary tracking-widest uppercase py-5 cursor-pointer rounded-md animate "
                  value="Reservez votre repas"
                />
              </div>
              
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
