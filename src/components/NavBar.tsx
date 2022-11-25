import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import NavItem from "./NavItem";
import NavSubItem from "./NavSubItem";

const gradientClass = "bg-gradient-to-r from-rose-500 to-pink-500";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 left-0 w-full flex justify-between ${gradientClass}`}
    >
      <div className="flex items-center p-2">
        <img src="/images/logo-inverted.png" alt="logo-inverted" width="50" />
        <h1 className="text-2xl ml-2 font-bold">
          tw:<span className="text-sky-900">mf</span>
        </h1>
      </div>
      {/* NavItems on Mobile */}
      <div className="relative flex md:hidden">
        <MobileMenuButton
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        {isMobileMenuOpen && (
          <div
            className={`absolute top-[calc(100%-1px)] right-0 w-[100vw] ${gradientClass}`}
          >
            <NavItem text="Home" />
            <NavItem text="Lineup" />
            <NavItem text="Tickets">
              <div className="hidden group-open:block">
                <NavSubItem text="Single Day Ticket" />
                <NavSubItem text="7 Day Ticket" />
              </div>
            </NavItem>
            <NavItem text="Support" />
          </div>
        )}
      </div>
      {/* NavItems not on Mobile */}
      <div className="hidden md:flex">
        <NavItem text="Home" />
        <NavItem text="Lineup" />
        <NavItem text="Tickets">
          <div className="absolute top-full right-0 hidden group-hover:block bg-pink-500">
            <NavSubItem text="Single Day Ticket" />
            <NavSubItem text="7 Day Ticket" />
          </div>
        </NavItem>
        <NavItem text="Support" />
      </div>
    </nav>
  );
};

export default NavBar;
