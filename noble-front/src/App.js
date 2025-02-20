import { Route, Routes } from "react-router-dom";
import Login from "./component/login/Login";
import Main from "./component/main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
