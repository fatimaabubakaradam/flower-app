import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Flowers from "./Flower";
import AddFlower from "./AddFlower";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="admin-container">
        <div className="admin-main">
        <div className="admin-title">Admin Panel</div>
        <div className="admin-nav">
          <Link to="/" className="nav-button active"> <button>Flowers</button></Link>
        </div>
        <div className="admin-nav-2">
        <Link to="/add-flower" className="nav-button"> <button>Add Flowers</button></Link>

        </div>
        </div>
       
        <Routes>
          <Route path="/" element={<Flowers />} />
          <Route path="/add-flower" element={<AddFlower />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
