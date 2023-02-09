import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './pages/Signup';
import ChangePassword from './pages/ChangePassword';
import ChangeNickname from './pages/ChangeNickname';
import ChangeMessage from './pages/ChangeMessage';
import Main from './pages/Main';
import User from './pages/User';
import DeleteAccount from './pages/DeleteAccount';
import ViewPost from './pages/ViewPost';
import WritePost from './pages/WritePost';
import UpdatePost from './pages/UpdatePost';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { login, logout } from './components/store/member';
import {
  delete_account_category,
  list_category,
  logout_category,
} from './components/store/category';
import {
  delete_all_post,
  list_post,
  logout_post,
} from './components/store/post';
import { logout_search_result } from './components/store/searchResult';
import FindPassword from './pages/FindPassword';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.member.isLogin);
  const id = useSelector((state) => state.member.id);

  // accessToken 존재 시 회원정보 redux 저장
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
    const getUserInfo = async () => {
      let memberId = 0;

      if (accessToken) {
        await axios
          .get('/member/me', {
            headers: {
              'content-type': 'application/json',
              Authorization: `Bearer ` + accessToken,
            },
          })
          .then((res) => res.data)
          .then((res) => {
            dispatch(login(res));
            memberId = res.id;
          })
          .catch((err) => {
            alert('아이디 혹은 비밀번호를 확인해주세요!');
            console.log(err);
          });
        await axios
          .get(`/category/list/${memberId}`)
          .then((res) => res.data)
          .then((res) => {
            if (res.length > 0) {
              dispatch(list_category(res));
            } else {
              dispatch(delete_account_category());
            }
          })
          .catch((err) => console.log(err));

        // 회원이 작성한 전체 게시글
        await axios
          .get(`/post/list/${memberId}`)
          .then((res) => res.data)
          .then((res) => {
            if (res.length > 0) {
              dispatch(list_post(res));
            } else {
              dispatch(delete_all_post());
            }
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(logout());
        dispatch(logout_category());
        dispatch(logout_post());
        dispatch(logout_search_result());
      }
    };
    getUserInfo();
  }, [localStorage.getItem('accessToken')]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact={true}
          element={
            <Login accessToken={accessToken} setAccessToken={setAccessToken} />
          }
        />
        <Route path="/signup" exact={true} element={<Signup />} />
        <Route path="/password" exact={true} element={<ChangePassword />} />
        <Route path="/nickname" exact={true} element={<ChangeNickname />} />
        <Route path="/message" exact={true} element={<ChangeMessage />} />
        <Route path="/account" exact={true} element={<DeleteAccount />} />

        <Route path="/post/search/:keyword" exact={true} element={<Main />} />
        <Route
          path="/post/view/:categoryId/:postId"
          exact={true}
          element={<ViewPost />}
        />
        <Route path="/post/publish" exact={true} element={<WritePost />} />
        <Route
          path="/post/update/:categoryId/:postId"
          exact={true}
          element={<UpdatePost />}
        />

        <Route path="/main" exact={true} element={<Main />} />
        <Route path="/user" exact={true} element={<User />} />
        <Route path="/findAccount" exact={true} element={<FindPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
