import Image from "next/image";

const WorksSection = ({ subtitle, title, description, projects }) => {
	return (
		<div className="px-4 py-8 md:px-6 lg:px-8">
			<div className="text-900 font-medium text-2xl text-center">{title}</div>
			<div className="text-600 font-medium text-xl text-center">{subtitle}</div>
			<div className="text-600 font-medium text-center mt-4">{description}</div>
			<div className="grid mt-3 -mr-3 -ml-3 mb-8">
				{projects.map((project, index) => {
					return (
						<div
							key={index}
							className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center"
						>
							<Image
								src={project.image}
								alt="product"
								width={200}
								height={140}
								layout="responsive"
								className="w-full h-full border-round"
							/>
							<div className="text-900 text-xl mt-4">{project.title}</div>
							<div className="text-600 mt-3 line-height-3">{project.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WorksSection;

{
	/* <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-4.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-5.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-6.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-7.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div> */
}
