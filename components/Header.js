// JUNGLE
import { useRef } from "react";
import Link from "next/link";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { motion } from "framer-motion";
import Char360 from "./char360";

const Header = () => {
	const btnBars = useRef(null);

	return (
		<div className="sticky py-3 px-3 shadow-2 flex align-items-center justify-content-between sticky top-0 h-3rem bg-yellow-200 headerBlur z-5">
			{/* BUTTON MENU */}
			<motion.div
				whileHover={{ scale: 1.3 }}
				whileTap={{ scale: 0.9 }}
				className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row mr-6"
			>
				<Link href="/">
					<a className="p-ripple flex border-round px-4 cursor-pointer transition-duration-300 align-items-center">
						<i className="pi pi-code mt-1 mr-2" />
						<Char360 char="r" />
						<Char360 char="a" />
						<Char360 char="d" />
						<Char360 char="o" />
						<Char360 char="n" />
						<Char360 char="z" />
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
			<div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 z-1 shadow-2 lg:shadow-none h-3rem">
				<ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
					<li>
						<Link href="/about">
							<a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full bg-yellow-200">
								<i className="pi pi-user mr-2"></i>
								<span>About</span>
								<Ripple />
							</a>
						</Link>
					</li>

					<li>
						<Link href="/projects">
							<a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full bg-yellow-200">
								<i className="pi pi-briefcase mr-2"></i>
								<span>Projects</span>
								<Ripple />
							</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full bg-yellow-200">
								<i className="pi pi-envelope mr-2"></i>
								<span>Contact</span>
								<Ripple />
							</a>
						</Link>
					</li>
				</ul>
				<ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
					<li className="border-top-1 border-yellow-400 lg:border-top-none">
						<a
							href="https://www.github.com/gitradonz"
							target={"_blank"}
							className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 bg-yellow-200 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
							rel="noreferrer"
						>
							<i className="pi pi-github"></i>
							<Ripple />
						</a>
					</li>
					<li className="border-top-1 border-yellow-400 lg:border-top-none">
						<a
							href="https://www.linkedin.com/in/pabloriosmartinez"
							target={"_blank"}
							className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-yellow-300 bg-yellow-200 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
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
