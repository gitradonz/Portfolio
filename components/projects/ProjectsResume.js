import { useViewportScroll, motion, useTransform } from "framer-motion";

const ProjectsResume = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [400, 800], [0, 60]);

  return (
    <motion.div id="works" className="relative bg-yellow-50">
      <div className="flex flex-column align-items-center justify-content-center p-3 ">
        <motion.div className="text-6xl font-bold" style={{ y }}>
          Works
        </motion.div>
        <p
          className="mt-8 mb-4 line-height-3 text-center mx-auto "
          style={{ maxWidth: "500px" }}
        >
          Mainly developed with Java, C#, Kotlin and JavaScript.
        </p>
        <div className=" h-30rem " />
        <div className=" h-30rem " />
        <div className=" h-30rem " />
      </div>
    </motion.div>
  );
};

export default ProjectsResume;
