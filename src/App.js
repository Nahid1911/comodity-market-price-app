import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import CommoditiesContainer from './Components/CommoditiesContainer/CommoditiesContainer';
import CommodityDetailsPrice from './Components/Commodity/CommodityDetails';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<CommoditiesContainer />} />
          <Route path="/Commodity" element={<CommodityDetailsPrice />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
