import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import CSV from "./components/CSV/CSV";
import EXCEL from "./components/EXCEL/EXCEL";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="leadlist" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="csv" element={<CSV />} />
          <Route path="excel" element={<EXCEL />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
