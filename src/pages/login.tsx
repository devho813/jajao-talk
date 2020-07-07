import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../utils/global-styles';
import useLogin from '../hooks/useLogin';

function Login() {
  const { nickname, password, onChangeNickname, onChangePassword, onSubmit } = useLogin();

  return (
    <LoginContainer>
      <form id="login" onSubmit={onSubmit}>
        <LoginFormWrapper form="login">
          <legend>
            <img src="/assets/common/main_logo.png" alt="main logo" />
          </legend>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={onChangeNickname}
            minLength={2}
            maxLength={8}
            required={true}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
            minLength={4}
            maxLength={15}
            required={true}
          />
          <button>로그인</button>
        </LoginFormWrapper>
      </form>
    </LoginContainer>
  );
}
export default Login;

const LoginContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  height: 100%;
  background-color: ${MAIN_COLOR};
`;

const LoginFormWrapper = styled.fieldset`
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;

  legend {
    width: 100%;

    img {
      width: 30%;
      border-radius: 50%;
      box-shadow: 0 0 50px white inset;
      user-select: none;
    }
  }

  input {
    display: block;
    margin: 0 auto;
    padding: 0.8em;
    width: 70%;
    border: none;
  }
  input::placeholder {
    opacity: 0.5;
  }

  input:first-of-type {
    margin-top: 90px;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #f5f5f5;
  }
  input:last-of-type {
    border-radius: 0 0 5px 5px;
  }

  button {
    margin-top: 0.5em;
    padding: 0.8em;
    width: 70%;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    text-align: center;
    color: #5cbdea;
    cursor: pointer;
  }
`;
