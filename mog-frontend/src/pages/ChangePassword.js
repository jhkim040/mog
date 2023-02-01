import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../components/common/formStyle/ButtonStyle";
import { FlexBox } from "../components/common/formStyle/FlexBox";
import { FormLogo } from "../components/common/formStyle/FormLogo";
import { FormWrap } from "../components/common/formStyle/FormWrap";
import { change_password } from "../components/store/member";

const ChangePassword = () => {
  const { email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    email: email,
    exPassword: "",
    newPassword: "",
  });

  const onChangeHandler = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (memberInfo.newPassword.trim() === "") {
      alert("비밀번호를 확인해주세요!");
    } else {
      await axios
        .put("/member/password", memberInfo)
        .then((res) => {
          console.log("비밀번호 변경");
          console.log(res.data);

          alert(`비밀번호 변경 완료!`);
          alert(`변경된 정보로 다시 로그인해주세요!`);
          dispatch(change_password());
          navigate("/");
        })
        .catch((err) => {
          alert("비밀번호를 확인해주세요!");
          console.log(err);
        });
    }
  };

  return (
    <FormWrap>
      <FormLogo />
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Password</Form.Label>
          <Form.Control
            name="exPassword"
            type="password"
            placeholder="Ex Password"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            name="newPassword"
            type="password"
            placeholder="New Password"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <div style={FlexBox}>
          <Button style={ButtonStyle} variant="primary" type="submit">
            Update
          </Button>
          <Button
            style={ButtonStyle}
            variant="secondary"
            type="button"
            onClick={() => {
              navigate("/user");
            }}
          >
            Main Page
          </Button>
        </div>
      </Form>
    </FormWrap>
  );
};

export default ChangePassword;
