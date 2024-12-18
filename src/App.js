import "assets/scss/style.scss"
import LandingPage from "pages/LandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@animxyz/core'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
