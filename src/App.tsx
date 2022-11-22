// 
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import ShopPage from './pages/Shop';

function App() {
  return (
    <div className="w-full">
      <main className="mx-auto w-full">

        <Routes>
          <Route element={<Home />} path='/' />

          <Route element={<ShopPage />} path='/shop' />
        </Routes>
      </main>
    </div>
  );
}

export default App;
