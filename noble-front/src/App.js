import { Route, Routes } from "react-router-dom";
import Login from "./component/login/Login";
import Main from "./component/main/Main";
import Board from "./component/board/Board";
import Calendar from "./component/calendar/Calendar";
import Content from "./component/content/Content";
import ToDoList from "./component/todolist/ToDoList";
import Mail from "./component/mail/Mail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/content" element={<Content />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
    </div>
  );
}

export default App;
