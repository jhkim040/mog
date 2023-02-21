import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserImage from '../../images/user_profile(128px).png';
import { logout_category } from '../store/category';
import { change_profile_image, logout } from '../store/member';
import { logout_post } from '../store/post';
import { delete_all_search_result } from '../store/searchResult';
import axios from 'axios';

const UserInfoTop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    // localStorage.clear();
    alert('로그아웃 완료');
    dispatch(logout());
    dispatch(logout_category()); // 카테고리 정보 초기화
    dispatch(logout_post()); // 게시글 정보 초기화
    dispatch(delete_all_search_result()); // 검색 정보 초기화
    // navigate('/');
  };

  const memberId = useSelector((state) => state.member.id);
  const user_profile_image = useSelector(
    (state) => state.member.storedFileName,
  );

  const imgRef = useRef(null);
  const profile_image_box = useRef(null);

  const [changeImage, setChangeImage] = useState(false);

  useEffect(() => {
    console.log(user_profile_image);
    if (user_profile_image) {
      profile_image_box.current.src = `http://localhost:8080/image/${user_profile_image}`;
    } else {
      profile_image_box.current.src = UserImage;
    }
  }, []);

  // 프로필 이미지 업로드
  const load_profileImg = () => {
    setChangeImage(true);
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = reader.result;

      // dispatch(
      //   change_profile_image({
      //     storedFileName: img,
      //   }),
      // );
      profile_image_box.current.src = img;
    };
  };

  // 프로필 이미지 삭제
  const delete_profileImg = async () => {
    if (!memberId) {
      alert('죄송합니다. 잠시 후 이용해주세요.');
      return;
    }

    const ans = window.confirm('정말 삭제하시겠습니까?');
    if (!ans) {
      return;
    }

    await axios
      .delete(`/member/profileImage/delete/${memberId}`)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert('프로필 이미지 삭제 완료!');
          dispatch(change_profile_image(res.data));
          setChangeImage(false);
          dispatch(
            change_profile_image({
              storedFileName: '',
            }),
          );
        }
      })

      .catch((error) => {
        console.error(error);
      });

    profile_image_box.current.src = UserImage;
  };

  // 이미지 업로드
  const onUploadImage = useCallback(async (e) => {
    const profile_image = imgRef.current.files;
    console.log(profile_image[0]);
    if (!profile_image) {
      setChangeImage(false);
      return;
    }

    const formData = new FormData();
    formData.append('image', profile_image[0]);
    // console.log(formData);
    if (!memberId) {
      alert('죄송합니다. 잠시 후 다시 이용해주세요');
      return;
    }
    await axios
      .post(`/member/profileImage/${memberId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          console.log(res.data);
          alert('프로필 이미지 변경 완료!');
          dispatch(change_profile_image(res.data));
          setChangeImage(false);
          console.log(user_profile_image);
        }
      })
      .then((res) => navigate('/user'))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Wrap>
      <div>
        <UserProfileImg ref={profile_image_box} />
      </div>
      <UserImg>
        <form>
          {changeImage ? (
            <>
              <Menu onClick={onUploadImage}>이미지 저장</Menu>
              <Menu
                onClick={() => {
                  setChangeImage(false);
                  if (user_profile_image) {
                    profile_image_box.current.src = `http://localhost:8080/image/${user_profile_image}`;
                  } else {
                    profile_image_box.current.src = UserImage;
                  }
                }}
              >
                변경 취소
              </Menu>
            </>
          ) : (
            <>
              <Menu htmlFor="profileImg">이미지 변경</Menu>
              <Menu onClick={delete_profileImg}>이미지 삭제</Menu>
            </>
          )}
          <ProfileImgInput
            type="file"
            name="profileImg"
            id="profileImg"
            onChange={load_profileImg}
            ref={imgRef}
          />

          <Menu
            onClick={() => {
              navigate('/main');
            }}
          >
            나의 게시글
          </Menu>
          <Menu
            onClick={() => {
              onLogoutHandler();
              navigate('/');
            }}
          >
            로그아웃
          </Menu>
        </form>
      </UserImg>
    </Wrap>
  );
};

export default UserInfoTop;

const Wrap = styled.div`
  width: 11.5rem;
  padding-right: 2rem;
  border-right: 0.125rem solid #cfcfcf;
  @media (max-width: 706px) {
    border-right: none;
    margin: 0 auto;
  }
`;

const UserImg = styled.div`
  position: relative;

  /* &::after {
    position: absolute;
    content: '';
    height: 13rem;
    top: 0.8rem;
    margin-left: 10rem;
    border-right: 0.125rem solid #cfcfcf;
  } */
  /* z-index: -1; */
`;

const Menu = styled.label`
  width: 90%;
  height: 1.8rem;
  text-align: center;
  padding-top: 0.15rem;
  margin: 0.625rem auto;
  display: block;
  font-weight: bold;
  color: rgb(102, 100, 255);
  border-radius: 0.3125rem;
  border: 2px solid rgb(102, 100, 255);
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgb(102, 100, 255);
    color: #fff;
    transition: 0.2s;
  }
`;

// 프로필 이미지 UI
const UserProfileImg = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  /* background: url(${UserImage}) no-repeat center;
  background-size: cover; */
`;

const ProfileImgInput = styled.input`
  display: none;
`;
