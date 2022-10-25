import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
