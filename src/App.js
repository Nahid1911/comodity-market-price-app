import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './Components/NavBar/NavBar';
import CommoditiesContainer from './Components/CommoditiesContainer/CommoditiesContainer';
import { fetchCommodities } from './redux/HomePageSlice';
import CommodityDetailsPrice from './Components/Commodity/CommodityDetails';

function App() {
  const elementsInStore = useSelector((state) => state.commodityStore.commodities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (elementsInStore.length === 0) {
      dispatch(fetchCommodities());
    }
  }, [dispatch, elementsInStore]);

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
