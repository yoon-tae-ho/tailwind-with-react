import Hero from "./hero/Hero";
import NavBar from "./navBar/NavBar";

const Header = () => {
  return (
    <header className="text-zinc-200">
      <NavBar />
      <Hero />
    </header>
  );
};

export default Header;
