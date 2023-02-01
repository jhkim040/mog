import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../components/common/ButtonStyle";
import { FlexBox } from "../components/common/FlexBox";
import { FormLogo } from "../components/common/FormLogo";
import { FormWrap } from "../components/common/FormWrap";
import { change_message } from "../components/store/member";

const ChangeMessage = () => {
  const { email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    email: email,
    message: "",
  });

  const onChangeHandler = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (memberInfo.message === "") {
      alert("상태 메시지를 확인해주세요");
    } else {
      await axios
        .put("/member/message", memberInfo)
        .then((res) => {
          console.log("닉네임 변경");
          console.log(res.data);

          alert(`상태메시지 변경 완료!`);
          dispatch(change_message(memberInfo));
          navigate("/user");
        })
        .catch((err) => {
          alert("닉네임 변경 에러");
          console.log(err);
        });
    }
  };

  return (
    <FormWrap>
      <FormLogo />
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Nickname</Form.Label>
          <Form.Control
            name="message"
            type="text"
            placeholder="What do you feel right now?"
            onChange={onChangeHandler}
            autoComplete="off"
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

export default ChangeMessage;
