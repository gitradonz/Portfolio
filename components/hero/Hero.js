import { motion } from "framer-motion";
import HeroSocialsIcons from "./HeroSocialsIcons";

const Hero = () => {
  return (
    <div className="relative overflow-hidden p-3 heroBgGradient">
      <div className="text-center my-3 md:my-5 relative">
        <motion.div animate={{ y: 30 }} transition={{ delay: 6, duration: 2 }}>
          <div className="text-6xl font-bold ">Pablo Ríos</div>
          <motion.div
            animate={{ scale: 1.2 }}
            transition={{ delay: 6, duration: 2 }}
            className="text-7xl font-bold mb-4 heroTitleGradiend"
          >
            Developer
          </motion.div>
          <p
            className="mt-0 mb-4 line-height-3 text-center mx-auto "
            style={{ maxWidth: "500px" }}
          >
            I develop web and mobile applications. I have a passion for coding
            and I&apos;m always looking for new technologies to learn.
          </p>

          <div className="p-3">
            <a
              className="p-3 bg-yellow-200 border-round m-5 transition-duration-200 hover:bg-yellow-300"
              href="cv.pdf"
              title="cv"
              download
            >
              <span className="font-bold">Download CV</span>
              <i className="pi pi-download ml-2"></i>
            </a>
          </div>
          <p className="text-sm mt-4 md:mb-8 line-height-3 ">
            Actually working at{" "}
            <a
              href="https://www.lobocom.es"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 cursor-pointer text-yellow-700"
            >
              Lobocom.es
            </a>
          </p>
        </motion.div>
        <HeroSocialsIcons />
      </div>
    </div>
  );
};

export default Hero;
