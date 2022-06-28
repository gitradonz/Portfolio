import Link from "next/link";

export default function FourOhFour() {
	return (
		<div className="bg-gray-100 px-4 py-8 md:px-6 lg:px-8 h-100 pnf404">
			<div className="shadow-2 border-round bg-yellow-100 px-4 md:px-6 py-6">
				<div className="border-left-2 border-yellow-500">
					<span className="text-yellow-500 font-bold text-2xl inline-block px-3">
						404
					</span>
				</div>
				<div className="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
				<p className="text-700 text-3xl mt-0 mb-6">This page doesn't exist.</p>

				<ul className="list-none px-0 pb-0 pt-4 m-0 border-top-1 surface-border">
					<li className="py-2">
						<Link href="/">
							<a className="cursor-pointer flex align-items-center border-round border-1 hover:bg-yellow-300 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
								<span
									className="inline-flex align-items-center justify-content-center border-round flex-shrink-0"
									style={{ height: "52px", width: "52px" }}
								>
									<i className="pi pi-home text-3xl"></i>
								</span>
								<div className="ml-3">
									<span className="text-900 font-medium text-2xl mb-3">Home</span>
									<p className="text-600 m-0 line-height-3">Back to the mainpage.</p>
								</div>
								<i className="text-600 pi pi-chevron-right ml-auto"></i>
							</a>
						</Link>
					</li>
					<li className="py-2">
						<Link href="/projects">
							<a
								href="/projects"
								className="cursor-pointer flex align-items-center border-round border-1 hover:bg-yellow-300 border-transparent hover:border-300 p-3 transition-colors transition-duration-150"
							>
								<span
									className="inline-flex align-items-center justify-content-center border-round flex-shrink-0"
									style={{ height: "52px", width: "52px" }}
								>
									<i className="pi pi-briefcase text-3xl"></i>
								</span>
								<div className="ml-3">
									<span className="text-900 font-medium text-2xl mb-3">Projects</span>
									<p className="text-600 m-0 line-height-3">Watch my projects</p>
								</div>
								<i className="text-600 pi pi-chevron-right ml-auto"></i>
							</a>
						</Link>
					</li>
					<li className="pt-2">
						<Link href="/contact">
							<a className="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 hover:bg-yellow-300 p-3 transition-colors transition-duration-150">
								<span
									className="inline-flex align-items-center justify-content-center border-round flex-shrink-0"
									style={{ height: "52px", width: "52px" }}
								>
									<i className="pi pi-cog text-3xl"></i>
								</span>
								<div className="ml-3">
									<span className="text-900 font-medium text-2xl mb-3">Contact</span>
									<p className="text-600 m-0 line-height-3">Get in touch with me!</p>
								</div>
								<i className="text-600 pi pi-chevron-right ml-auto"></i>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
