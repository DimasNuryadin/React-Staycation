import "assets/scss/style.scss"
import LandingPage from "pages/LandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@animxyz/core'
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
