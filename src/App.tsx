// components
import Countdown from "./components/Countdown";
import Header from "./components/Header";

function App() {
	return (
		<div className='w-full'>
			<main className='mx-auto w-full max-w-[1440px]'>
				<Header />
				<Countdown />
				{/* <Gallery /> -------------- Deji */}
				{/* <Register /> ------------- Deji */}
				{/* <Experience /> ----------- Victor */}
				{/* <Footer /> --------------- Victor*/}
			</main>
		</div>
	);
}

export default App;
