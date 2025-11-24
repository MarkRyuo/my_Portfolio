import "./App.css";
import LeftHero from "./components/leftHeroCompts";
import NavCompts from "./components/navCompts";
import RightHero from "./components/rightHeroCompts";
import SocialCompts from "./components/socialCompts";

function App() {
  return (
    <>
      <main className="bg-[#FFFFFC] h-screen grid grid-rows-[100px, 1fr, 100px] md:grid-rows[1fr, 2fr]">
        <nav className="">
          <NavCompts largeText="Always Building," smallText="Always Learning" />
        </nav>
        <div className="mx-auto w-auto max-w-7xl grid grid-row-2 lg:grid-cols-2 lg:gap-4">
          <section className="">
            <LeftHero />
          </section>
          <section className="flex items-center">
            <RightHero />
          </section>
        </div>
        <footer className="md:hidden flex items-center">
          <SocialCompts />
        </footer>
      </main>
    </>
  );
}

export default App;
