import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../components/common/ButtonStyle";
import { FlexBox } from "../components/common/FlexBox";
import { FormLogo } from "../components/common/FormLogo";
import { FormWrap } from "../components/common/FormWrap";
import { delete_account, login, logout } from "../components/store/member";

const Main = () => {
  const { email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/member/me", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ` + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => res.data)
      .then((res) => {
        dispatch(login(res));
      })
      .catch((err) => console.log(err));
  }, []);

  const onLogoutHandler = () => {
    // localStorage.clear();
    alert("로그아웃 완료");
    dispatch(logout());
    navigate("/");
  };

  const DeleteAccountHandler = async () => {
    await axios
      .delete("/member/delete/" + email)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((res) => {
        console.log(res);
        if (res === "ok") {
          // localStorage.clear();
          alert("회원탈퇴 완료");
          dispatch(delete_account());
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("회원탈퇴 실패");
      });
  };

  return (
    <FormWrap>
      <FormLogo />
      <h2>
        {nickname} {message && " : " + message}
      </h2>
      <div style={FlexBox}>
        <Button
          variant="primary"
          type="button"
          style={ButtonStyle}
          onClick={onLogoutHandler}
        >
          Logout
        </Button>
        <Button
          variant="secondary"
          type="button"
          style={ButtonStyle}
          onClick={DeleteAccountHandler}
        >
          DELETE
        </Button>
        <Button
          variant="primary"
          type="button"
          style={ButtonStyle}
          onClick={() => {
            navigate("/nickname");
          }}
        >
          Nickname
        </Button>
        <Button
          variant="secondary"
          type="button"
          style={ButtonStyle}
          onClick={() => {
            navigate("/password");
          }}
        >
          Password
        </Button>
        <Button
          variant="primary"
          type="button"
          style={ButtonStyle}
          onClick={() => {
            navigate("/message");
          }}
        >
          Message
        </Button>
      </div>
    </FormWrap>
  );
};

export default Main;
