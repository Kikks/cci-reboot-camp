// components
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='w-full'>
			<main className='mx-auto w-full max-w-[1440px]'>
				<Header />
				<Countdown />
				{/* <Gallery /> -------------- Deji */}
				{/* <Register /> ------------- Deji */}
				<Experience />
				<Footer />
			</main>
		</div>
	);
}

export default App;
