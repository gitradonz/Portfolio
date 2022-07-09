import { useViewportScroll, motion, useTransform } from "framer-motion";

const AboutResume = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [1200, 1400, 1800], [0, -950, -650]);

  console.log(scrollY);
  return (
    <motion.div style={{ y }}>
      <div className="flex flex-column align-items-center justify-content-center p-3">
        <motion.div className="text-6xl font-bold">About me</motion.div>
        <div className="flex w-full justify-content-evenly">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-4xl font-bold"
          >
            <div className="surface-section px-4  md:px-6 lg:px-8 overflow-hidden">
              <div className="font-bold text-900 text-3xl mb-3 text-center">
                26 y/o developer based in Alicante, Spain
              </div>
              <div className="text-700 text-center my-5 line-height-3">
                Libero justo laoreet sit amet cursus sit amet dictum. Auctor
                neque vitae tempus quam pellentesque nec nam.
              </div>
              <div className="flex lg:justify-content-center mb-5">
                <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
                  <img
                    src="assets/images/blocks/feature/feature-timeline-1.png"
                    alt="Image"
                    className="w-full mr-8"
                  />
                </div>
                <div className="flex flex-column align-items-center w-2rem">
                  <span
                    className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle"
                    style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
                  >
                    1
                  </span>
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: "2px", minHeight: "4rem" }}
                  ></div>
                </div>
                <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                  <div className="text-900 text-xl mb-2 font-medium">
                    Ornare Arcu Odio
                  </div>
                  <span className="block text-700 line-height-3 mb-3">
                    Quisque sagittis purus sit amet volutpat consequat mauris
                    nunc. Scelerisque eleifend.
                  </span>
                  <div className="pt-3 border-top-1 border-300">
                    <div className="mb-2 line-height-3">
                      <span className="text-900 font-medium">
                        Sed lectus vestibulum
                      </span>{" "}
                      mattis ullamcorper velit. Laoreet sit amet cursus sit.
                    </div>
                    <div className="line-height-3">
                      <span className="text-900 font-medium">
                        Fames ac turpis
                      </span>{" "}
                      egestas sed tempus urna et. Cursus turpis massa.
                    </div>
                  </div>
                  <img
                    src="assets/images/blocks/feature/feature-timeline-1.png"
                    alt="Image"
                    className="w-full mt-3 block lg:hidden"
                  />
                </div>
              </div>
              <div className="flex justify-content-center mb-5">
                <div className="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
                  <div className="text-900 text-xl mb-2 font-medium">
                    A diam maecenas
                  </div>
                  <span className="block text-700 line-height-3 mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                  <div className="pt-3 border-top-1 border-300">
                    <div className="mb-2 line-height-3">
                      <span className="text-900 font-medium">
                        Quis hendrerit dolor
                      </span>{" "}
                      magna eget est. Pellentesque pulvinar pellentesque.
                    </div>
                    <div className="line-height-3">
                      <span className="text-900 font-medium">
                        Lectus urna duis
                      </span>{" "}
                      convallis convallis tellus id interdum velit laoreet.
                    </div>
                  </div>
                  <img
                    src="assets/images/blocks/feature/feature-timeline-2.png"
                    alt="Image"
                    className="w-full mt-3 block lg:hidden"
                  />
                </div>
                <div className="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1">
                  <span
                    className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle"
                    style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
                  >
                    2
                  </span>
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: "2px", minHeight: "4rem" }}
                  ></div>
                </div>
                <div className="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2">
                  <img
                    src="assets/images/blocks/feature/feature-timeline-2.png"
                    alt="Image"
                    className="w-full mr-8"
                  />
                </div>
              </div>
              <div className="flex justify-content-center">
                <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
                  <img
                    src="assets/images/blocks/feature/feature-timeline-3.png"
                    alt="Image"
                    className="w-full mr-8"
                  />
                </div>
                <div className="flex flex-column align-items-center w-2rem">
                  <span
                    className="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle"
                    style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
                  >
                    3
                  </span>
                  <div
                    className="h-full bg-cyan-500"
                    style={{ width: "2px", minHeight: "4rem" }}
                  ></div>
                </div>
                <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                  <div className="text-900 text-xl mb-2 font-medium">
                    Pharetra et ultrices neque
                  </div>
                  <span className="block text-700 line-height-3 mb-3">
                    Id interdum velit laoreet id. A iaculis at erat pellentesque
                    adipiscing commodo elit at imperdiet.
                  </span>
                  <div className="pt-3 border-top-1 border-300">
                    <div className="mb-2 line-height-3">
                      <span className="text-900 font-medium">
                        Egestas dui id
                      </span>{" "}
                      ornare arcu odio ut. Mi bibendum neque egestas congue.
                    </div>
                    <div className="line-height-3">
                      <span className="text-900 font-medium">
                        Sed velit dignissim
                      </span>{" "}
                      sodales ut eu. Massa placerat duis ultricies lacus.
                    </div>
                  </div>
                  <img
                    src="assets/images/blocks/feature/feature-timeline-3.png"
                    alt="Image"
                    className="w-full mt-3 block lg:hidden"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          ></motion.div>
        </div>
      </div>
      <div className=" h-30rem bg-yellow-100" />
      <div className=" h-30rem bg-yellow-100" />
    </motion.div>
  );
};

export default AboutResume;
