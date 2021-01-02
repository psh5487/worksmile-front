import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import Cookies from 'js-cookie';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../components/header';

function LoginPage (props) {
  const [UserId, setUserId] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setUserId(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  // dispatch 사용하기
  const dispatch = useDispatch();

  // 로그인 버튼 핸들러
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const reqBody = {
      userId: UserId,
      password: Password,
    };

    axios({
      method: 'post',
      url: BASE_URL + '/api/user/login',
      data: reqBody,
    })
      .then((res) => {
        const user = res.data;
        console.log(user);

        // user state 변화주기
        dispatch(login(user));

        // Cookie에 토큰 저장
        Cookies.set('access-token', res.headers['access-token']);
        Cookies.set('refresh-token', res.headers['refresh-token']);

        // 랜딩페이지로 이동
        props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Login Failed. ' + err);
      });
  };

  return (
    <>
      <Header />
      <div className='myform'>
        <img
          alt='worksmile'
          src='worksmile_logo.png'
          width='150'
          height='150'
        />
        <br />
        <h2>로그인</h2>
        <br />
        <Form onSubmit={onSubmitHandler}>
          <Form.Group controlId='formUserId'>
            <Form.Control type='text' value={UserId} onChange={onEmailHandler} placeholder='아이디' required />
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Control type='password' value={Password} onChange={onPasswordHanlder} placeholder='비밀번호' required />
          </Form.Group>
          <br />
          <Button type='submit'>로그인</Button>
        </Form>
        <br />
      </div>

      <Container>
        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Link to='#' style={{ textDecoration: 'none' }}>아이디 찾기</Link> |
            <Link to='#'> 비밀번호 찾기</Link> |
            <Link to='/signup'> 회원가입</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(LoginPage);