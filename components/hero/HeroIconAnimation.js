import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiKotlin,
  SiJava,
  SiNodedotjs,
  SiCsharp,
  SiCss3,
  SiBootstrap,
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
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';
import { BsLaptop, BsPhone, BsApple } from 'react-icons/bs';
import { IoIosDesktop } from 'react-icons/io';
import { DiAndroid } from 'react-icons/di';

const HeroIconAnimation = ({ icon, x, y, scale = 1, opacity = 0.1 }) => {
  return (
    <motion.div
      initial={{ x, y, scale, opacity }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 5 }}
    >
      {icons[icon]}
    </motion.div>
  );
};

export default HeroIconAnimation;

const icons = {
  javascript: <SiJavascript className="text-2xl" />,
  react: <SiReact className="text-2xl" />,
  kotlin: <SiKotlin className="text-2xl" />,
  java: <SiJava className="text-2xl" />,
  node: <SiNodedotjs className="text-2xl" />,
  csharp: <SiCsharp className="text-2xl" />,
  css3: <SiCss3 className="text-2xl" />,
  bootstrap: <SiBootstrap className="text-2xl" />,
  typescript: <SiTypescript className="text-2xl" />,
  express: <SiExpress className="text-2xl" />,
  next: <SiNextdotjs className="text-2xl" />,
  firebase: <SiFirebase className="text-2xl" />,
  github: <SiGithub className="text-2xl" />,
  reactrouter: <SiReactrouter className="text-2xl" />,
  framer: <SiFramer className="text-2xl" />,
  html5: <SiHtml5 className="text-2xl" />,
  xamarin: <SiXamarin className="text-2xl" />,
  expo: <SiExpo className="text-2xl" />,
  androidstudio: <SiAndroidstudio className="text-2xl" />,
  mongodb: <SiMongodb className="text-2xl" />,
  unity: <SiUnity className="text-2xl" />,
  bitbucket: <SiBitbucket className="text-2xl" />,
  slack: <SiSlack className="text-2xl" />,
  notion: <SiNotion className="text-2xl" />,
  graphql: <SiGraphql className="text-2xl" />,
  laptop: <BsLaptop className="text-2xl" />,
  phone: <BsPhone className="text-2xl" />,
  apple: <BsApple className="text-2xl" />,
  desktop: <IoIosDesktop className="text-2xl" />,
  android: <DiAndroid className="text-2xl" />,
  redux: <SiRedux className="text-2xl" />,
  postgresql: <SiPostgresql className="text-2xl" />,
  mysql: <SiMysql className="text-2xl" />,
  sqlite: <SiSqlite className="text-2xl" />,
};
