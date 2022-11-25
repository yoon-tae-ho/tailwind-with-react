interface IProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: IProps) => {
  return (
    <button
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      className="flex flex-col gap-1 justify-center pr-4"
    >
      <div
        className={`relative top-0 w-8 h-1 bg-white rounded-full transition-all ${
          isMobileMenuOpen ? "rotate-45 top-2" : ""
        }`}
      ></div>
      <div
        className={`w-8 h-1 bg-white rounded-full transition-all ${
          isMobileMenuOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`relative -top-0 w-8 h-1 bg-white rounded-full transition-all ${
          isMobileMenuOpen ? "-rotate-45 -top-2" : ""
        }`}
      ></div>
    </button>
  );
};

export default MobileMenuButton;
