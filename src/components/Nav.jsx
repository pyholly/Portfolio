import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <nav className="bg-purple-400/50 sticky top-0 py-2 w-full">
      <div className="flex justify-between">
        <div className="px-10">
          <a href="#Home">Logo</a>
        </div>

        <div className="md:hidden flex flex-col justify-end">
          <button onClick={handleClick} className="px-5 h-6">
            <AiOutlineMenu />
          </button>

          <ul className={open === true ? "justify-end inline-block" : "hidden"}>
            <li key={"home"}>
              <a href="#Home" className="px-5 hover:text-gray-400">
                Home
              </a>
            </li>
            <li key={"about"}>
              <a href="#About" className="px-5 hover:text-gray-400">
                About
              </a>
            </li>
            <li key={"projects"}>
              <a href="#Projects" className="px-5 hover:text-gray-400">
                Projects
              </a>
            </li>
            <li key={"contact"}>
              <a href="#Contact" className="px-5 hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <ul className="hidden md:inline-flex">
          <li key={"home"}>
            <a href="#Home" className="px-5 hover:text-gray-400">
              Home
            </a>
          </li>
          <li key={"about"}>
            <a href="#About" className="px-5 hover:text-gray-400">
              About
            </a>
          </li>
          <li key={"projects"}>
            <a href="#Projects" className="px-5 hover:text-gray-400">
              Projects
            </a>
          </li>
          <li key={"contact"}>
            <a href="#Contact" className="px-5 hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
