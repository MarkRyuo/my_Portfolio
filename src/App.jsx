import "./App.css";
import LeftHero from "./components/leftHeroCompts";
import NavCompts from "./components/navCompts";
import RightHero from "./components/rightHeroCompts";
import SocialCompts from "./components/socialCompts";

function App() {
  return (
    <>
      <main className="bg-[#FFFFFC]">
        <nav className="mx-auto w-auto max-w-7xl">
          <NavCompts largeText="Always Building," smallText="Always Learning" />
        </nav>
        <div className="hero-container">
          <section>
            <LeftHero />
          </section>
          <section>
            <RightHero />
          </section>
        </div>
        <footer className="md:hidden">
          <SocialCompts />
        </footer>
      </main>
    </>
  );
}

export default App;
