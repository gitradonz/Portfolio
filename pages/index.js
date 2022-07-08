import AboutResume from "../components/about/AboutResume";
import ArrowGoDown from "../components/ArrowGoDown";
import Hero from "../components/hero/Hero";
import WorksResume from "../components/works/WorksResume";

export default function Home() {
	return (
		<>
			<Hero />
			<ArrowGoDown />
			<WorksResume />
			<AboutResume />
			<div className=" h-30rem bg-orange-100" />
			<div className=" h-30rem bg-red-100" />
		</>
	);
}
