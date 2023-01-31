import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../components/common/ButtonStyle";
import { EmailContext } from "../components/context/EmailProvider";

import { HttpHeadersContext } from "../components/context/HttpHeadersProviders";
import { NicknameContext } from "../components/context/NicknameProvider";

const Main = () => {
  const navigate = useNavigate();
  const { headers, setHeaders } = useContext(HttpHeadersContext);
  const { email, setEmail } = useContext(EmailContext);
  const { nickname, setNickname } = useContext(NicknameContext);

  useEffect(() => {
    axios
      .get("/member/me", {
        headers: headers,
      })
      .then((res) => res.data)
      .then((res) => {
        setEmail(res.email);
        setNickname(res.nickname);
      })
      .catch((err) => console.log(err));
  }, []);

  const onLogoutHandler = () => {
    localStorage.clear();
    alert("로그아웃 완료");

    setEmail(null);
    setHeaders(null);
    setNickname(null);

    navigate("/");
  };

  const DeleteAccountHandler = async () => {
    await axios
      .delete("/member/delete/" + localStorage.getItem("email"))
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((res) => {
        console.log(res);
        if (res === "ok") {
          localStorage.clear();
          alert("회원탈퇴 완료");

          setEmail(null);
          setHeaders(null);
          setNickname(null);

          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("회원탈퇴 실패");
      });
  };

  return (
    <>
      <h1>Main Page</h1>
      <h2>Hello, {nickname}!</h2>
      <Button variant="primary" type="button" onClick={onLogoutHandler}>
        Logout
      </Button>
      <Button
        variant="secondary"
        type="button"
        style={ButtonStyle}
        onClick={DeleteAccountHandler}
      >
        Delete Account
      </Button>
      <Button
        variant="primary"
        type="button"
        style={ButtonStyle}
        onClick={() => {
          navigate("/nickname");
        }}
      >
        Change Nickname
      </Button>
      <Button
        variant="secondary"
        type="button"
        style={ButtonStyle}
        onClick={() => {
          navigate("/password");
        }}
      >
        Change Password
      </Button>
    </>
  );
};

export default Main;
