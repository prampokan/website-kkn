import Hero from "./(pages)/hero"
import Navbar from "./(components)/navbar"
import Posts from "./(pages)/posts"
import Footer from "./(pages)/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Posts />
      <Footer />
    </main>
  );
}
