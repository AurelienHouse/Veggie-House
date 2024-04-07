import Booking from "../components/marketing/pageSections/Booking";
import Events from "../components/marketing/pageSections/Events";
import Footer from "../components/marketing/pageSections/Footer";
import HeroTop from "../components/marketing/pageSections/HeroTop";
import LastProducts from "../components/marketing/pageSections/LastProducts";
import Products from "../components/marketing/pageSections/Products";
// import SignupFormDemo from "../components/marketing/pageSections/SignupFormDemo";

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProducts />
      <Products />
      <Events />
      {/* <SignupFormDemo /> */}
      <Booking />
      <Footer />
    </>
  );
}
