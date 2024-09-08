/* eslint-disable react/no-unescaped-entities */
import Icone from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import BurgerLogo from "../../elements/BurgerLogo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const letters = "Veggie House".split("");

  return (
    <div className="relative z-10 flex items-center justify-between py-10">
      <div className="w-full relative flex items-center">
        <BurgerLogo />
        <h1 className="text-3xl">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>

      <div className=" w-full text-secondary ">
        <div className="items-center justify-end hidden md:flex">
          <img src={Icone} alt="" className="w-5 h-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="md:mt-5 flex items-center justify-end">
          <Link to="/Signup">
            <Button className="tracking-widest mr-3">Inscription</Button>
          </Link>
          <Link to="/Signup">
            <Button className="tracking-widest" color="secondary">
              Connexion
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
