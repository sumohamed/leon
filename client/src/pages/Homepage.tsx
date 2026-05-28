import {
	Features,
	Hero,
	Portfolio,
	Services,
	About,
} from "../components/sections";

export const Homepage = () => {
	return (
		<>
			<Hero />
			<Features />
			<Services />
			<Portfolio />
			<About />
		</>
	);
};
