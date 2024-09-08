import { useRef } from "react";
import Booking from "../components/marketing/pageSections/Booking";
import Events from "../components/marketing/pageSections/Events";
import Footer from "../components/marketing/pageSections/Footer";
import HeroTop from "../components/marketing/pageSections/HeroTop";
import LastProducts from "../components/marketing/pageSections/LastProducts";
import Products from "../components/marketing/pageSections/Products";
import { motion } from "framer-motion";
import { InfiniteMovingCardsDemo } from "../components/marketing/pageSections/InfiniteMovingCardsDemo";

export default function HomePage() {
  const lastProductsRef = useRef(null);
  const productsRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <HeroTop />
      <InfiniteMovingCardsDemo />
      <motion.div
        ref={lastProductsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={variants}
      >
        <LastProducts />
      </motion.div>
      <motion.div
        ref={productsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <Products />
      </motion.div>
      <Events />
      <Booking />
      <Footer />
    </>
  );
}
