import Image from "next/image";
import { motion } from "framer-motion";

const WorksSection = ({
  subtitle,
  title,
  description,
  projects,
  totalProjects,
}) => {
  return (
    <div className="px-4 py-8 md:px-6 lg:px-8">
      <div className="text-900 font-medium text-6xl text-center">{title}</div>
      <div className="text-600 font-medium text-xl text-center">{subtitle}</div>
      <div className="text-600 font-medium text-center mt-4 mb-6">
        {description}
      </div>
      <div className="grid mt-3 -mr-3 -ml-3 mb-8 ">
        {projects.map((project) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={project.id}
              className={`xs:col-12 sm:col-6 lg:col-3 ${
                totalProjects === 3 && "lg:col-offset-1"
              } p-4 flex flex-column text-center cursor-pointer`}
            >
              <Image
                src={project.image}
                alt="product"
                width={300}
                height={250}
                layout="intrinsic"
                className="w-full h-full border-round-xl"
              />
              <div className="text-900 text-xl mt-4">{project.title}</div>
              <div className="text-600 mt-3 line-height-3">
                {project.description}
              </div>
            </motion.div>
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
