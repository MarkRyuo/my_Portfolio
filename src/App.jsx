import "./App.css";
import LeftHero from "./components/leftHeroCompts";
import NavCompts from "./components/navCompts";
import RightHero from "./components/rightHeroCompts";
import SocialCompts from "./components/socialCompts";

function App() {
  return (
    <>
      <main className="relative bg-[#FFFFFC] relative h-screen grid grid-rows-[100px, 1fr, 100px] md:grid-rows[1fr, 2fr] ">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
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
