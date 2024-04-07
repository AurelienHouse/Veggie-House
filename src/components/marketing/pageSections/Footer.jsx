import Container from "../../elements/Container";
import BackgroundImage from "../../../medias/images/background/bg-footer.jpg";
import Logo from "../../../medias/svg/Logo-burger-house-white.svg";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import IconInsta from "../../../medias/svg/instagram.svg";
import IconFacebook from "../../../medias/svg/facebook-f.svg";
import IconX from "../../../medias/svg/x-twitter.svg";
import IconWhatsapp from "../../../medias/svg/whatsapp.svg";

export default function Footer() {
  return (
    <div>
      <Container>
        <div className="relative lg:mb-20 p-5 text-white">
          <img
            src={BackgroundImage}
            alt="une planche en bois avec differents ingredients d'un burger"
            className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="relative  grid md:grid-cols-2 z-10">
            <div className=" w-full p-5 md:mt-20 mt-10 md:mb-28">
              <img src={Logo} alt="Logo Burger House" className="w-2/3" />
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam cumque sapiente dolore quo? Nobis eligendi, illo similique
                consectetur quia quo fugiat maiores sed.
              </p>
            </div>
            <div className=" md:h-full w-full flex flex-col items-start md:items-center justify-center mb-10 md:mb-0 p-5 md:p-0">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />

                <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">
                  15 rue jean jaures, 94800 Villejuif
                </span>
              </div>
              <div className="flex items-center mt-5">
                <EnvelopeIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
                <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">
                  info@burgerhouse.com
                </span>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="uppercase font-extrabold tracking-tighter text-sm">
              © burger house 2024. All rights reserved.
            </div>
            <div className=" flex ">
              <div className="">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={IconInsta}
                    alt="icon"
                    className="w-7 h-7 mr-2 bg-white hover:bg-primary animate rounded-full p-1"
                  />
                </a>
              </div>
              <div className="">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img
                    src={IconFacebook}
                    alt="icon"
                    className="w-7 h-7 mr-2 bg-white hover:bg-primary animate rounded-full p-1"
                  />
                </a>
              </div>
              <div className="">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img
                    src={IconX}
                    alt="icon"
                    className="w-7 h-7 mr-2 bg-white hover:bg-primary animate rounded-full p-1"
                  />
                </a>
              </div>
              <div className="">
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                  <img
                    src={IconWhatsapp}
                    alt="icon"
                    className="w-7 h-7  bg-white hover:bg-primary animate rounded-full p-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
