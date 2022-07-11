import { CgArrowLongRight } from "react-icons/cg";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const ContactResume = () => {
	return (
		<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
			<div className="text-6xl font-bold text-center mb-4 xl:mb-8">Get in touch</div>
			<div className="grid">
				<div className="col-12 md:col-6">
					<div className="p-fluid pr-0 md:pr-6">
						<div className="field">
							<label htmlFor="name" className="font-medium">
								Name
							</label>
							<InputText id="name" className="py-3 px-2 text-lg" />
						</div>
						<div className="field">
							<label htmlFor="email1" className="font-medium">
								Email
							</label>
							<InputText id="email1" className="py-3 px-2 text-lg" />
						</div>
						<div className="field">
							<label htmlFor="company" className="font-medium">
								Company
							</label>
							<InputText id="company" className="py-3 px-2 text-lg" />
						</div>
						<div className="field">
							<label htmlFor="message" className="font-medium">
								Message
							</label>
							<InputTextarea id="message" rows={6} autoResize className="py-3 px-2 text-lg" />
						</div>
						<button className="bg-yellow-200 flex justify-content-center align-items-center text-xl hover:bg-yellow-300 transition-duration-300 cursor-pointer shadow-8 border-none border-round-xl py-2 px-4">
							<i className="pi pi-send mr-2" />
							Send Message
						</button>
					</div>
				</div>
				<div
					className="col-12 md:col-6 bg-no-repeat bg-right-bottom"
					style={{ backgroundImage: "url('assets/images/blocks/contact/contact-1.png')" }}
				>
					<div className="text-700 line-height-3 mb-6">
						I'm open for new opportunities. If you have a project in mind, or if you just
						want to say hello, feel free to contact me.
					</div>
					<a className="inline-flex align-items-center text-yellow-600 font-bold no-underline cursor-pointer">
						<a href="mailto:pabloriosrdn@gmail.com" className="mr-3">
							Or send me directly a mail
						</a>
						<i className="pi pi-arrow-right"></i>
					</a>
					<ul className="list-none p-0 m-0 mt-6 text-700">
						<li className="flex align-items-center hover:text-blue-700 transition-duration-150">
							<i className="pi pi-linkedin mr-2"></i>
							<a
								href="https://www.linkedin.com/in/pabloriosmartinez"
								target={"_blank"}
								rel="noreferrer"
							>
								pabloriosmartinez
							</a>
						</li>
						<li className="flex align-items-center hover:text-gray-800 transition-duration-150">
							<i className="pi pi-github mr-2"></i>
							<a href="https://www.github.com/gitradonz" target={"_blank"} rel="noreferrer">
								gitradonz
							</a>
						</li>
						<li className="flex align-items-center hover:text-blue-400 transition-duration-150">
							<i className="pi pi-twitter mr-2"></i>
							<a href="https://twitter.com/radonzStudio" target={"_blank"} rel="noreferrer">
								radonzStudio
							</a>
						</li>
						<li className="flex align-items-center hover:text-yellow-500 transition-duration-150">
							<i className="pi pi-inbox mr-2"></i>
							<a href="mailto:pabloriosrdn@gmail.com">pabloriosrdn@gmail.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ContactResume;
