// components
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="w-full">
      <main className="mx-auto w-full">
        <Header />
        <Countdown />
        <Gallery />
        <Register />
        {/* <Experience /> ----------- Victor */}
        {/* <Footer /> --------------- Victor*/}
      </main>
    </div>
  );
}

export default App;
