import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MapContainer from './components/MapContainer';
import NavBar from './components/NavBar';
import Business from './components/Business';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Router>
    <>
        <h1>Access Aid</h1>
        <NavBar />
        <Business />
        <MapContainer />
        <SearchBar />
    </>
    </Router>
  );
}

export default App;
