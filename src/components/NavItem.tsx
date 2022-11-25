import { ReactElement, useState } from "react";

interface IProps {
  text: string;
  children?: ReactElement | ReactElement[];
}

const NavItem = ({ text, children }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      onClick={onClick}
      className={`group relative h-full flex flex-col justify-center cursor-pointer hover:bg-white/10 transition-colors ${
        isOpen ? "open" : ""
      }`}
    >
      <span className="w-full p-4 text-center font-bold">{text}</span>
      {children}
    </div>
  );
};

export default NavItem;
