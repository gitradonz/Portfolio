import {
  SiJavascript,
  SiReact,
  SiKotlin,
  SiJava,
  SiNodedotjs,
  SiCsharp,
  SiCss3,
  SiBootstrap,
  SiStyledcomponents,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiGithub,
  SiReactrouter,
  SiFramer,
  SiHtml5,
  SiXamarin,
  SiExpo,
  SiAndroidstudio,
  SiMongodb,
  SiUnity,
  SiBitbucket,
  SiSlack,
  SiNotion,
  SiGraphql,
} from "react-icons/si";
import { BsLaptop, BsPhone, BsApple } from "react-icons/bs";
import { IoIosDesktop } from "react-icons/io";
import { DiAndroid } from "react-icons/di";
import { motion } from "framer-motion";

const HeroSocialsIcons = () => {
  return (
    <div className="m-6 grid">
      {/* WEB */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="col-12 md:col mt-3 border-round-xl md:m-3 p-3 border-1 border-yellow-200 align-items-center"
      >
        <div className="flex flex-column justify-content-center">
          <div className="font-bold mb-3 text-2xl text-yellow-800">
            <div>
              <BsLaptop className="text-6xl" />
            </div>
            <div>WEB</div>
          </div>
          <div className="flex justify-content-evenly align-items-center mb-3">
            <SiJavascript className="text-2xl" />
            <SiCss3 className="text-2xl" />
            <SiHtml5 className="text-2xl" />
            <SiReact className="text-2xl" />
          </div>
          <div className="flex justify-content-evenly align-items-center mb-3">
            <SiNodedotjs className="text-2xl" />
            <SiNextdotjs className="text-2xl" />
            <SiJava className="text-2xl" />
            <SiReactrouter className="text-2xl" />
          </div>
          <div className="flex justify-content-evenly align-items-center">
            <SiExpress className="text-2xl" />
            <SiBootstrap className="text-2xl" />
            <SiStyledcomponents className="text-2xl" />
            <SiFramer className="text-2xl" />
          </div>
        </div>
      </motion.div>
      {/* MOBILE */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="col-12 md:col mt-3 md:m-3 border-round-xl p-3 border-1 border-yellow-200 align-items-center"
      >
        <div className="font-bold mb-3 text-2xl text-yellow-800">
          <div>
            <BsPhone className="text-6xl" />
          </div>
          <div>MOBILE</div>
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <BsApple className="text-2xl" />
          <DiAndroid className="text-2xl" />
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <SiJavascript className="text-2xl" />
          <SiReact className="text-2xl" />
          <SiExpo className="text-2xl" />
          <SiCss3 className="text-2xl" />
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <SiCsharp className="text-2xl" />
          <SiXamarin className="text-2xl" />
          <SiAndroidstudio className="text-2xl" />
          <SiKotlin className="text-2xl" />
        </div>
      </motion.div>
      {/* DESKTOP */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="col-12 md:col mt-3 md:m-3 border-round-xl p-3 border-1 border-yellow-200 align-items-center"
      >
        <div className="font-bold mb-3 text-2xl text-yellow-800">
          <div>
            <IoIosDesktop className="text-6xl" />
          </div>
          <div>DESKTOP / OTHERS</div>
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <SiFirebase className="text-2xl" />
          <SiMongodb className="text-2xl" />
          <SiGraphql className="text-2xl" />
          <SiUnity className="text-2xl" />
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <SiGithub className="text-2xl" />
          <SiBitbucket className="text-2xl" />
          <SiSlack className="text-2xl" />
          <SiNotion className="text-2xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSocialsIcons;
