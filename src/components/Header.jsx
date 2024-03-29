/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react";
import { auth, provider } from '../firebase';
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut
} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"

function Header() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }));
        history("/");
      }
    })
  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      // console.log(result);
      let user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));
      history("/");
    })
  }

  const signOut = () => {
    auth.signOut()
    .then(() => {
      dispatch(setSignOut());
      history("/login");
    })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      { !userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
        ) :
        <>
        <NavMenu>
          <a href="#">
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
          </a>
          <a href="#">
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
          </a>
          <a href="#">
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
          </a>
          <a href="#">
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINALS</span>
          </a>
          <a href="#">
            <img src="/images/movie-icon.svg" alt="" />
            <span>MOVIES</span>
          </a>
          <a href="#">
            <img src="/images/series-icon.svg" alt="" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg 
        onClick={signOut}
        src="/images/profile.jpg" />
        
        </>
        
      }
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1; // this tells the nav that NavMenu is the most important here and give it as much space as possible
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left right;
        transform: scaleX(0);
        /* transition: 0.2s; */
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
      &:hover::after{
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;


const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover{
    background-color:  #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`