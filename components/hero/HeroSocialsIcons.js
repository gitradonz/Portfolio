import {
  SiJavascript,
  SiReact,
  SiKotlin,
  SiCsharp,
  SiCss3,
  SiFirebase,
  SiGithub,
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
import HeroIconAnimation from "./HeroIconAnimation";

const HeroSocialsIcons = () => {
  return (
    <div className="m-6 grid">
      {/* WEB */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="col-12 md:col mt-3 md:m-3 p-3 align-items-center"
      >
        <div className="flex flex-column justify-content-center">
          <div className="font-bold mb-3 text-2xl text-yellow-800">
            <motion.div
              initial={{ scale: 5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 5 }}
            >
              <BsLaptop className="text-6xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 5 }}
            >
              WEB
            </motion.div>
          </div>
          <div className="flex justify-content-evenly align-items-center mb-3">
            <HeroIconAnimation icon="javascript" x={150} y={-390} scale={6} />
            <HeroIconAnimation icon="css3" x={100} y={180} scale={3} />
            <HeroIconAnimation icon="html5" x={160} y={-480} scale={2} />
            <HeroIconAnimation icon="react" x={100} y={-270} scale={8} />
          </div>
          <div className="flex justify-content-evenly align-items-center mb-3">
            <HeroIconAnimation icon="node" x={280} y={-430} scale={2} />
            <HeroIconAnimation icon="next" x={-170} y={-450} scale={3} />
            <HeroIconAnimation icon="java" x={-30} y={-590} scale={4} />
            <HeroIconAnimation icon="reactrouter" x={-230} y={-310} scale={2} />
          </div>
          <div className="flex justify-content-evenly align-items-center mb-3">
            <HeroIconAnimation icon="express" x={-50} y={-250} scale={2} />
            <HeroIconAnimation icon="bootstrap" x={-160} y={-90} scale={3} />
            <HeroIconAnimation icon="styled" x={-240} y={30} scale={3} />
            <HeroIconAnimation icon="framer" x={-60} y={-290} scale={3} />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 1 }}
            className="border-bottom-2 border-yellow-700 flex w-100 pt-4"
          ></motion.div>{" "}
        </div>
      </motion.div>
      {/* MOBILE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="col-12 md:col mt-3 md:m-3 p-3 align-items-center"
      >
        <div className="font-bold mb-3 text-2xl text-yellow-800">
          <motion.div
            initial={{ scale: 5, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <BsPhone className="text-6xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            MOBILE
          </motion.div>
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <HeroIconAnimation icon="apple" x={-50} y={-190} scale={3} />
          <HeroIconAnimation icon="android" x={50} y={-190} scale={3} />
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <HeroIconAnimation
            icon="javascript"
            x={-100}
            y={100}
            scale={3}
            opacity={0}
          />
          <HeroIconAnimation icon="react" x={50} y={90} scale={3} opacity={0} />
          <HeroIconAnimation icon="expo" x={280} y={-490} scale={5} />
          <HeroIconAnimation
            icon="css3"
            x={50}
            y={-190}
            scale={3}
            opacity={0}
          />
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <HeroIconAnimation icon="csharp" x={-200} y={-80} scale={3} />
          <HeroIconAnimation icon="xamarin" x={-170} y={90} scale={2} />
          <HeroIconAnimation icon="androidstudio" x={280} y={60} scale={2} />
          <HeroIconAnimation icon="kotlin" x={0} y={100} scale={3} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="border-bottom-2 border-yellow-700 flex w-100 pt-4"
        ></motion.div>{" "}
      </motion.div>
      {/* DESKTOP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="col-12 md:col mt-3 md:m-3  p-3  align-items-center"
      >
        <div className="font-bold mb-3 text-2xl text-yellow-800">
          <motion.div
            initial={{ scale: 5, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <IoIosDesktop className="text-6xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            DESKTOP
          </motion.div>
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <HeroIconAnimation icon="firebase" x={-50} y={0} scale={4} />
          <HeroIconAnimation icon="mongodb" x={250} y={-170} scale={3} />
          <HeroIconAnimation icon="mysql" x={-200} y={-210} scale={3} />
          <HeroIconAnimation icon="graphql" x={130} y={-350} scale={3} />
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <HeroIconAnimation icon="github" x={150} y={-460} scale={4} />
          <HeroIconAnimation icon="bitbucket" x={-200} y={-210} scale={3} />
          <HeroIconAnimation icon="slack" x={200} y={-490} scale={3} />
          <HeroIconAnimation icon="notion" x={-200} y={-210} scale={3} />
        </div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <HeroIconAnimation icon="unity" x={270} y={-390} scale={4} />
          <HeroIconAnimation icon="redux" x={50} y={90} scale={3} />
          <HeroIconAnimation icon="sqlite" x={120} y={-100} scale={3} />
          <HeroIconAnimation icon="postgresql" x={50} y={90} scale={3} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="border-bottom-2 border-yellow-700 flex w-100 pt-4"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSocialsIcons;
