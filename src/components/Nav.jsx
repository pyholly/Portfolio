import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Nav = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="bg-purple-400/50 sticky top-0 py-2 w-full">
      <div className="md:flex justify-between">
        <div className="px-10">
          <a href="#Home">Logo</a>
        </div>
        <div className="md:hidden ">
          <AiOutlineMenu />
        </div>
        <div>
          <a href="#Home" className="px-5 hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="px-5 hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="px-5 hover:text-gray-400">
            Projects
          </a>
          <a href="#Contact" className="px-5 hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
