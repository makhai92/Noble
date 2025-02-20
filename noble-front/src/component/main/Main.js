import React from "react";
import "./Main.css"; // 필요한 CSS 파일

const Main = () => {
  return (
    <div className="main-body">
      <div id="demowrap">
        <div class="macbook">
          <div class="macbook-lid">
            <div class="macbook-screen">
              <div class="macbook-content">
                <ul class="macbook-apps">
                  <li class="macbook-app"></li>
                  <li class="macbook-app"></li>
                  <li class="macbook-app"></li>
                  <li class="macbook-app"></li>
                  <li class="macbook-app"></li>
                  <li class="macbook-app"></li>
                  <li class="macbook-app"></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="macbook-base"></div>
        </div>

        <div id="info">
          <p id="instructions">노트북을 열어주세요</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
