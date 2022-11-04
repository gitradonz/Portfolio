import AboutResume from '../components/about/AboutResume';
import ArrowGoDown from '../components/ArrowGoDown';
import ContactResume from '../components/contact/ContactResume';
import Hero from '../components/hero/Hero';
import ParallaxSpacer from '../components/ParallaxSpacer';
import WorksResume from '../components/works/WorksResume';

export default function Home() {
  return (
    <>
      <Hero />
      <ArrowGoDown />
      <WorksResume />
      {/* <ParallaxSpacer /> */}
      <AboutResume />
      <ContactResume />
    </>
  );
}
