import Logo from "./Logo";
import SubscribeForm from "./SubscribeForm";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/images/hero.jpg)",
      }}
      className="h-[calc(100vh-200px)] min-h-[400px] bg-cover bg-center bg-fixed flex flex-col justify-center items-center"
    >
      <Logo />
      <p className="mt-2 text-sm font-bold">
        Keep me updated with news and promotions
      </p>
      <SubscribeForm />
    </section>
  );
};

export default Hero;
