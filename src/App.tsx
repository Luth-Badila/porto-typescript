import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import AutomationSlider from "./components/AutomationSlider";
import { AutomationImageData } from "./components/AutomationImageData";

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
                <AutomationSlider />
                <Hero />
                <ImageSlider />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
