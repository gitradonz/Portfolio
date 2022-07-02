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
} from "react-icons/si";

const HeroSocialsIcons = () => {
  return (
    <div className="m-6 grid">
      <div className="col-12 xl:col-4 mb-3">
        <div className="font-bold mb-3 text-2xl text-yellow-700">WEB</div>
        <div className="flex justify-content-evenly align-items-center mb-3">
          <SiJavascript className="text-2xl" />
          <SiCss3 className="text-2xl" />
          <SiHtml5 className="text-2xl" />
          <SiReact className="text-2xl" />
        </div>
        <div className="flex justify-content-evenly align-items-center">
          <SiNodedotjs className="text-2xl" />
          <SiNextdotjs className="text-2xl" />
          <SiJava className="text-2xl" />
          <SiFramer className="text-2xl" />
        </div>
      </div>
      <div className="col-12 xl:col-4 mb-3">
        <div className="font-bold mb-3 text-2xl text-yellow-700">MOBILE</div>
        <div className="flex justify-content-evenly align-items-center">
          <SiKotlin className="text-2xl" />
          <SiStyledcomponents className="text-2xl" />
          <SiExpress className="text-2xl" />
          <SiNextdotjs className="text-2xl" />
          <SiFirebase className="text-2xl" />
          <SiGithub className="text-2xl" />
          <SiReactrouter className="text-2xl" />
          <SiFramer className="text-2xl" />
        </div>
      </div>
      <div className="col-12 xl:col-4 mb-3">
        <div className="font-bold mb-3 text-2xl text-yellow-200">DESKTOP</div>
        <div className="flex justify-content-evenly align-items-center">
          <SiCsharp className="text-2xl" />
          <SiJava className="text-2xl" />
          <SiExpress className="text-2xl" />
          <SiNextdotjs className="text-2xl" />
          <SiFirebase className="text-2xl" />
          <SiGithub className="text-2xl" />
          <SiReactrouter className="text-2xl" />
          <SiFramer className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroSocialsIcons;
