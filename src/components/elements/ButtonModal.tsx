"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

import { motion } from "framer-motion";
import Button from "./Button";

export function ButtonModal() {
  const images = [
    "https://aurelienmaison.book.fr/files/1/112482/g_20_T9uoTAOnrEp9.jpg",
    "https://aurelienmaison.book.fr/files/1/112482/g_20_lngG8kunWJ4l.jpg",
    "https://aurelienmaison.book.fr/files/1/112482/g_20_mPGHfur930ci.jpg",
    "https://aurelienmaison.book.fr/files/1/112482/g_20_SPLQz0Om1lMr.jpg",
    "https://aurelienmaison.book.fr/files/1/112482/g_20_73VQwlPRtLcM.jpg",
  ];
  return (
    <div className="  flex items-center justify-center">
      <Button
        className="font-secondary mb-10 lg:mb-0"
        color="danger"
        theme={undefined}
      >
        <Modal>
          <ModalTrigger className=" flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              COMMANDEZ
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 text-4xl flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              🍔
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4
                className="font-secondary text-black dark:text-white mb-10 lg:mb-0"
                color="danger"
              >
                Votre Commande est bien prise en compte.{" "}
              </h4>
              <h4
                className="font-secondary text-black dark:text-white mb-10 uppercase lg:mb-0"
                color="danger"
              >
                Pensez à la completer.{" "}
              </h4>
              <div className="flex py-5 justify-center items-center">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-green-700 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={image}
                      alt="aliments images"
                      className="rounded-lg object-cover flex-shrink-0 w-full md:w-40 h-full md:h-40"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto"></div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </Button>
    </div>
  );
}
