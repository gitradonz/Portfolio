import WorksDetailed from "../components/works/WorksDetailed";
import WorksTitle from "../components/works/WorksTitle";

const WorksPage = () => {
	return (
		<>
			<WorksTitle />
			<WorksDetailed />
			<WorksFooter />
		</>
	);
};

const WorksFooter = () => {
	return (
		<div classNam="bg-red-100 text-center">
			<div>TECHNOLOGIES</div>
		</div>
	);
};

export default WorksPage;
