import React from 'react';
import styled from 'styled-components';
import graph from "../assets/graph-white.png"
import config from "../assets/config-white.png"
import user from "../assets/user-white.png"
export default function Navbar(){
    
    return (
        <Container>
            <Nav>
            <Logo>
                <Image src = {user} alt="logo" />
                pomofocus
            </Logo>
            <Buttons>
                <Button><ImgBtn src={graph} alt = "graph" /><TextBtn>report</TextBtn></Button>
                <Button><ImgBtn src={config} alt = "config" /><TextBtn>setting</TextBtn></Button>
                <Button><ImgBtn src={user} alt = "user" /><TextBtn>login</TextBtn></Button>
            </Buttons>
            </Nav>
            <Back>
                <Loading />
            </Back>
        </Container>
    )
}

const Container = styled.nav`
    width: 620px;
    height: 60px !important;
    display: block;
    margin: auto;
    text-transform: capitalize;
`;
const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
`;
const Logo = styled.div`
    font-weight: bold;
    text-decoration: none !important;
    font-size: 20px;
    line-height: 1.4em;
    display: flex;
    justify-content: space-around;
    align-content: flex-end;
    align-items: center;
    width: 140px;
    color:white;
    cursor: pointer;
    font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;
const Image = styled.img`
    height: 20px;
    width: 20px;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 45%;
`;
const Button = styled.button`
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    background: rgba(255, 255, 255, 0.2) none repeat scroll 0% 0%;
    box-shadow: none;

    font-size: 13px;
    padding: 2px 6px 2px 6px;
    height: 30px;
    min-width: 70px;
    width: 30%;
    font-weight: 300;
    border: medium none;
    &:hover{
        opacity: 1;
    }
`;
const ImgBtn = styled.img`
    height: 16px;
    width: 16px;
`;
const TextBtn = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    color: white !important;
    text-transform: capitalize;
    margin-left: 4px;
`;
const Back = styled.div`
    background-color: #d9d9d9;
    height: 2px;
    width: 620px;
`;
const Loading = styled.div`
    height: 2px;
    background-color: white;
    width: 50%;
`;