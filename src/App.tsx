import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./App/Main/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
