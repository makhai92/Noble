import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 필요한 CSS 파일

const Login = () => {
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    navigate("/main");
  };

  return (
    <div className="login-body">
      <div className="login-main">
        <div className="login-form">
          <p>welcome</p>
          <form className="login-form-form" onSubmit={login}>
            <input
              type="text"
              placeholder="id"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <input type="password" placeholder="password" required />
            <label className="remember-me">
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              아이디 기억하기
            </label>

            <button>login</button>
            <div className="login-segment">
              <button className="unit" type="button">
                <img
                  src="./img/kakao.png"
                  alt="KakaoTalk Logo"
                  className="icon-image"
                />
              </button>
              <button className="unit" type="button">
                <img
                  src="./img/naver.png"
                  alt="KakaoTalk Logo"
                  className="icon-image"
                />
              </button>
              <button className="unit" type="button">
                <img
                  src="./img/google.png"
                  alt="KakaoTalk Logo"
                  className="icon-image"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="signup-container">
          <button className="signup-button" type="button">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
