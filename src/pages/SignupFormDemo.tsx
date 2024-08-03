"use client";
import React from "react";
import Illustration from "../medias/images/background/bg-food.jpg";
import { motion } from "framer-motion";

import Logo from "../medias/svg/picto-burger-house.svg";
import { Link } from "react-router-dom";

import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
  const letters = "Veggie House".split("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div
      className="flex bg-repeat w-full min-h-screen"
      style={{
        backgroundImage: `url(${Illustration})`,
        backgroundSize: "justify",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full mx-auto mt-12 mb-12 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border border-green-800 backdrop-blur-2xl">
        <div className="absolute top-0 left-0 -z-10"></div>
        <Link to="/">
          <div className="relative z-10 flex items-center justify-between py-10">
            <img
              src={Logo}
              alt="logo Burger House App"
              className="w-24 mb-7 hover:bg-primary animate"
            />
            <h1 className="text-4xl">
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
        </Link>
        <h2 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">
          Bienvenue chez Veggie House
        </h2>

        <p className="text-neutral-800 text-lg max-w-sm mt-2 ">
          Créez un compte pour réserver plus facilement.
        </p>

        <form className="my-auto mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Nom</Label>
              <Input id="firstname" placeholder="Doe" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Prénom</Label>
              <Input id="lastname" placeholder="John" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Courriel</Label>
            <Input
              id="email"
              placeholder="mon.mail@courriel.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Instagram
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandX className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                X (Twitter)
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandWhatsapp className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Whatsapp
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-1 w-full -bottom-1 inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-md block transition duration-500 opacity-0 absolute h-1 w-3/4 mx-auto -bottom-1 inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
