import Footer from "@/components/parts/Footer";
import HomePage from "@/components/sections/HomePage";
import BusinessNews from "@/components/sections/HomePage/BusinessNews";
import UpdateNews from "@/components/sections/HomePage/UpdateNews";

export default function Home() {
  return (
    <>
      <HomePage />
      <UpdateNews />
      <BusinessNews />
      <Footer />
    </>
  );
}
