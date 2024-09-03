import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Stats />
      <Start />
      <Footer />
    </>
  );
}
