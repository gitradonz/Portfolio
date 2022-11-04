import { useViewportScroll, motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import IPhoneX from '../deviceLooks/IPhoneX';
import Navigator from '../deviceLooks/Navigator';
import { CgArrowLongRight } from 'react-icons/cg';

const WorksResume = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [400, 800], [0, 60]);

  return (
    <motion.div className="flex">
      <motion.div id="works" className="relative bg-white mt-2">
        <div className="flex flex-column align-items-center justify-content-center p-3 ">
          <motion.div className="text-7xl font-bold" style={{ y }}>
            What I do
          </motion.div>
          <p className="mt-8 mb-4 line-height-3 text-center mx-auto text-lg">
            <span className="text-yellow-400">Frontend</span> websites,{' '}
            <span className="text-yellow-400">mobile</span> apps, and{' '}
            <span className="text-yellow-400">backend</span> services.
          </p>
          <div className="px-4 md:px-6 lg:px-8">
            <div className="flex flex-wrap">
              <div className="w-full h-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
                <IPhoneX image="url(images/comocomen.PNG)" />
                <div className="mt-3 mb-2 font-medium text-900 text-3xl flex justify-content-center">
                  Fullstack
                </div>
                <div className="text-700 line-height-3 text-center">
                  From scratch to production. Design, development, testing and
                  continuous integration.
                </div>
              </div>
              <div className="w-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
                <Navigator image={'/images/huntz.png'} />
                <div className="mt-3 mb-2 font-medium text-900 text-3xl flex justify-content-center">
                  Databases and APIs
                </div>
                <div className="text-700 line-height-3 text-center">
                  Developed multiple projects with backend connections and API
                  calls.
                </div>
              </div>
              <div className="w-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
                <IPhoneX image="url(images/lobocom.png)" />
                <div className="mt-3 mb-2 font-medium text-900 text-3xl flex justify-content-center">
                  Android & iOS
                </div>
                <div className="text-700 line-height-3 text-center">
                  Created and distributed apps throught PlayStore and AppStore.
                </div>
              </div>
              <div className="w-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
                <Navigator image={'/images/fresmedical.png'} />
                <div className="mt-3 mb-2 font-medium text-900 text-3xl flex justify-content-center">
                  Web
                </div>
                <div className="text-700 line-height-3 text-center">
                  Spezialiced in frontend development. Using modern frameworks
                  and services.
                </div>
              </div>
            </div>
          </div>

          <Link href="/works">
            <a className="bg-yellow-200 mb-6 flex justify-content-center align-items-center text-xl hover:bg-yellow-300 transition-duration-300 cursor-pointer shadow-4 border-none border-round-xl py-2 px-4 font-bold">
              <i className="pi pi-briefcase mr-2" />
              WORKS DETAILED
              <CgArrowLongRight size={25} className="ml-3" />
            </a>
          </Link>
        </div>
        <div className=" h-5rem " />
      </motion.div>
    </motion.div>
  );
};

export default WorksResume;
