import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css"; // 필요한 CSS 파일

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-body">
      <div id="demowrap">
        <div class="macbook">
          <div className="macbook-lid">
            <div className="macbook-screen">
              <div className="macbook-content">
                <ul className="macbook-apps">
                  <li
                    className="macbook-app-icon"
                    onClick={() => navigate("/board")}
                  >
                    <img src="./img/board.png" alt="Board Icon" />
                  </li>
                  <li
                    className="macbook-app-icon"
                    onClick={() => navigate("/calendar")}
                  >
                    <img src="./img/calendar.png" alt="Calendar Icon" />
                  </li>
                  <li
                    className="macbook-app-icon"
                    onClick={() => navigate("/content")}
                  >
                    <img src="./img/content.png" alt="Content Icon" />
                  </li>
                  <li
                    className="macbook-app-icon"
                    onClick={() => navigate("/todolist")}
                  >
                    <img src="./img/todolist.png" alt="Todolist Icon" />
                  </li>
                  <li
                    className="macbook-app-icon"
                    onClick={() => navigate("/mail")}
                  >
                    <img src="./img/mail.png" alt="Mail Icon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="macbook-base"></div>
        </div>

        <div id="info-macbook">
          <p id="instructions">노트북을 열어주세요</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
