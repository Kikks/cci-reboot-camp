// components
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Register from "./components/Register/Register";
import Experience from "./components/Experience";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="w-full">
      <main className="mx-auto w-full">
        <Header />
        <Countdown />
        <Gallery />
        <Register />
        <Experience />
				<Footer />
      </main>
    </div>
  );
}

export default App;
