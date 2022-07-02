// JUNGLE
import { useRef } from "react";
import Link from "next/link";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { motion } from "framer-motion";

const Header = () => {
  const btnBars = useRef(null);

  return (
    <div className="sticky py-3 px-3 shadow-2 flex align-items-center justify-content-between top-0 h-3rem headerGlobal z-5">
      {/* BUTTON MENU */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row mr-6"
      >
        <Link href="/">
          <a className="p-ripple flex border-round px-4 py-2 cursor-pointer transition-duration-300 align-items-center">
            <i className="pi pi-code mt-1 mr-2" />

            <span className={"font-bold font-italic"}>radonz</span>
            <Ripple />
          </a>
        </Link>
      </motion.div>
      <StyleClass
        nodeRef={btnBars}
        selector="@next"
        enterClassName="hidden"
        leaveToClassName="hidden"
        hideOnOutsideClick
      >
        <a ref={btnBars} className="p-ripple cursor-pointer block lg:hidden">
          <i className="pi pi-bars text-4xl"></i>
          <Ripple />
        </a>
      </StyleClass>
      {/* NAVBAR CONTENT */}
      <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full right-0 top-100 z-1 h-3rem">
        <ul className="list-none p-0 m-0 flex  select-none flex-column lg:flex-row headerButtonsBlur z-4 border-round-xl">
          <li>
            <Link href="/about">
              <motion.a
                whileTap={{ scale: 0.9 }}
                className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full justify-content-end"
              >
                <i className="pi pi-user mr-2"></i>
                <span>About</span>
                <Ripple />
              </motion.a>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <motion.a
                whileTap={{ scale: 0.9 }}
                className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full justify-content-end"
              >
                <i className="pi pi-briefcase mr-2"></i>
                <span>Projects</span>
                <Ripple />
              </motion.a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <motion.a
                whileTap={{ scale: 0.9 }}
                className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full justify-content-end"
              >
                <i className="pi pi-envelope mr-2"></i>
                <span>Contact</span>
                <Ripple />
              </motion.a>
            </Link>
          </li>
        </ul>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row headerButtonsBlur">
          <li className="hidden border-yellow-400 lg:block">
            <a
              href="https://www.github.com/gitradonz"
              target={"_blank"}
              className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              rel="noreferrer"
            >
              <i className="pi pi-github"></i>
              <Ripple />
            </a>
          </li>
          <li className="hidden border-yellow-400 lg:block">
            <a
              href="https://www.linkedin.com/in/pabloriosmartinez"
              target={"_blank"}
              className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              rel="noreferrer"
            >
              <i className="pi pi-linkedin"></i>
              <Ripple />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
