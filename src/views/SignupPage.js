import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { Form, Button } from 'react-bootstrap';
import Header from '../components/header';

function SignupPage (props) {
  const [UserId, setUserId] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');

  const onUserIdHandler = (e) => {
    setUserId(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password === ConfirmPassword) {
      const reqBody = {
        userId: UserId,
        password: Password,
        name: Name,
        email: Email,
        phone: Phone,
      };

      axios({
        method: 'post',
        url: BASE_URL + '/api/user/join',
        data: reqBody,
      })
        .then((res) => {
          console.log(res + ' Register Success');
          props.history.push('/login');
        })
        .catch((err) => {
          alert('Register Failed. ' + err);
        });
    } else {
      alert('Password is not corresponding');
    }
  };

  return (
    <>
      <Header />
      <div className='myform'>
        <h2>회원가입</h2>
        <br />
        <Form onSubmit={onSubmitHandler}>
          <Form.Group controlId='formUserId'>
            <Form.Control type='text' value={UserId} onChange={onUserIdHandler} placeholder='아이디' required />
          </Form.Group>

          <Form.Group controlId='formPassword'>
            <Form.Control type='password' value={Password} onChange={onPasswordHanlder} placeholder='비밀번호' required />
          </Form.Group>

          <Form.Group controlId='formConfirmPassword'>
            <Form.Control type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder='비밀번호 확인' required />
          </Form.Group>

          <Form.Group controlId='formName'>
            <Form.Control type='text' value={Name} onChange={onNameHandler} placeholder='이름' required />
          </Form.Group>

          <Form.Group controlId='formEmail'>
            <Form.Control type='email' value={Email} onChange={onEmailHandler} placeholder='이메일' required />
          </Form.Group>

          <Form.Group controlId='formPhone'>
            <Form.Control type='text' value={Phone} onChange={onPhoneHandler} placeholder='휴대전화' required />
          </Form.Group>
          <br />

          <Button type='submit'>가입하기</Button>
        </Form>
      </div>
    </>
  );
}

export default withRouter(SignupPage);