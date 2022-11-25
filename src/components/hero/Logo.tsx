const Logo = () => {
  return (
    <div className="backdrop-blur-md bg-white/30 rounded-xl py-2 px-4">
      <img src="/images/logo.png" alt="logo" width="175" />
      <h1 className="text-center text-5xl font-bold">
        tw:<span className="text-sky-900">mf</span>
      </h1>
    </div>
  );
};

export default Logo;
