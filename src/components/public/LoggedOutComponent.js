import React, { useState } from "react";

const LoggedOutComponent = ({ login }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handlePw = (event) => {
    setPw(event.target.value);
  };

  const loginTapped = () => {
    if (id === "test" && pw === "1234") {
      // 로그인 성공
      localStorage.setItem("token", 1);
      login();
    } else {
      // 로그인 실패
      alert("로그인 실패");
    }
  };

  return (
    <div>
      <input value={id} onChange={handleId} placeholder={"아이디"} />
      <input value={pw} onChange={handlePw} placeholder={"비번"} />
      <button onClick={loginTapped}>login</button>
    </div>
  );
};

export default LoggedOutComponent;
