import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import WeatherPage from "./components/WeatherPage"
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/weatherpage/:city" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
