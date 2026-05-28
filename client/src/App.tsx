import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, SinglePortfolio } from "./pages";
import { Footer, Header } from "./components/layout";
import ScrollToTop from "./features/ScrollToTop";
import { Contact } from "./components/sections";
import useDocumentMetadata from "./features/useDocumentMetadata";
import { assets } from "./assets";

const App = () => {
	useDocumentMetadata({
		title: "Leon Template - Graphberry",
		lang: "en",
		description: "Mern stack application from graphberry",
		favicon: assets.favicon,
	});

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/portfolio/:id" element={<SinglePortfolio />} />
				</Routes>
				<Contact />
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
