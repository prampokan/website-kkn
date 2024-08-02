import Hero from "./(pages)/hero"
import Navbar from "./(components)/navbar"
import Posts from "./(pages)/posts"
import Footer from "./(pages)/footer";
import Maps from "./(pages)/maps";
import Profile from "./(pages)/profile";
import Kkn from "./(pages)/kkn";
import Proker from "./(pages)/proker";
import Kegiatan from "./(pages)/kegiatan";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Profile />
      <Maps />
      <Kegiatan />
      <Kkn />
      <Proker />
      <Posts />
      <Footer />
    </main>
  );
}
