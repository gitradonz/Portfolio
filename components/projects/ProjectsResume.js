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
        <div className="px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6 xl:w-3 p-5">
              <img
                src="https://i.ytimg.com/vi/uo_yV06qx54/maxresdefault.jpg"
                className="w-full"
              />
              <div className="mt-3 mb-2 font-medium text-900 text-xl">
                Fullstack
              </div>
              <span className="text-700 line-height-3">
                From scratch to production. Design, development, testing and
                continuous integration.
              </span>
            </div>
            <div className="w-full lg:w-6 xl:w-3 p-5">
              <img
                src="https://i.ytimg.com/vi/uo_yV06qx54/maxresdefault.jpg"
                alt="Image"
                className="w-full"
              />
              <div className="mt-3 mb-2 font-medium text-900 text-xl">
                Android & iOS
              </div>
              <span className="text-700 line-height-3">
                Created and distributed apps throught PlayStore and AppStore.
              </span>
            </div>
            <div className="w-full lg:w-6 xl:w-3 p-5">
              <img
                src="https://i.ytimg.com/vi/uo_yV06qx54/maxresdefault.jpg"
                alt="Image"
                className="w-full"
              />
              <div className="mt-3 mb-2 font-medium text-900 text-xl">
                Databases and APIs
              </div>
              <span className="text-700 line-height-3">
                Developed multiple projects with backend connections and API
                calls.
              </span>
            </div>
            <div className="w-full lg:w-6 xl:w-3 p-5">
              <img
                src="https://i.ytimg.com/vi/uo_yV06qx54/maxresdefault.jpg"
                alt="Image"
                className="w-full"
              />
              <div className="mt-3 mb-2 font-medium text-900 text-xl">Web</div>
              <span className="text-700 line-height-3">
                Specialized in web frameworks.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-30rem " />
      <div className=" h-30rem " />
      <div className=" h-30rem " />
    </motion.div>
  );
};

export default ProjectsResume;
