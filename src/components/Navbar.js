import React,{useState, useContext} from 'react';
import styled from 'styled-components';
import graph from "../assets/graph-white.png";
import config from "../assets/config-white.png";
import user from "../assets/user-white.png";
import remove from "../assets/remove-black-sm.png";
import { ContextTime } from '../contexts/ContextTime';


export default function Navbar(){
    const {speed} = useContext(ContextTime)
    const [show, setShow] = useState(false);
    return (
        <Container>
            <Nav>
            <Logo>
                <Image src = {user} alt="logo" />
                pomofocus
            </Logo>
            <Buttons>
                <Button>
                    <ImgBtn src={graph} alt = "graph" />
                    <TextBtn>report</TextBtn>
                </Button>
                <Button onClick={()=>setShow(!show)}>
                    <ImgBtn src={config} alt = "config" />
                    <TextBtn>setting</TextBtn>
                </Button>
                <Button>
                    <ImgBtn src={user} alt = "user" />
                    <TextBtn>login</TextBtn>
                </Button>
            </Buttons>
            </Nav>
            <Back>
                <Loading style={{width:`${speed}px`}}/>
            </Back>
            {
                show &&
                <Popup>
                    <Lign>
                        <TextHeader>
                            timer setting
                        </TextHeader>
                        <Close>x</Close>
                    </Lign>
                    <Time>
                        <TextTime>Time (minutes)</TextTime>
                        <Inputs>
                            <Box>
                                <BoxText>pomodoro</BoxText>
                                <Input type="number" min="0" step = "1"/>
                            </Box>
                            <Box>
                                <BoxText>short break</BoxText>
                                <Input type="number" min="0" step = "1"/>
                            </Box>
                            <Box>
                                <BoxText>long break</BoxText>
                                <Input type="number" min="0" step = "1"/>
                            </Box>
                        </Inputs>
                    </Time>
                </Popup>
            }
        </Container>
    )
}
const Inputs = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin-bottom: 10px;
`;
const Box = styled.div`
    width : 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
const BoxText = styled.h3`
    font-size: 14px;
    color: rgb(187, 187, 187);
    font-weight: bold;
    margin-bottom: 4px;
`;
const Input = styled.input` 
    border-radius: 4px;
    background-color: rgb(239, 239, 239);
    font-size: 16px;
    padding: 10px;
    box-shadow: none;
    border: medium none;
    color: rgb(85, 85, 85);
    width: 100%;
    box-sizing: border-box;
`;
const Time = styled.div`
    width: 90%;
    margin: auto;
    border-bottom: 1px solid rgb(187, 187, 187);
`;
const TextTime = styled.h3`
    color: rgb(85, 85, 85);
    font-weight: bold;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    margin-bottom: 0px;
    text-transform: none;
`;
const TextHeader = styled.h2`
    font-size: 16px;
    color: rgb(187, 187, 187);
    text-transform: uppercase;
    font-weight: bold;
`;
const Close = styled.h1`
    height: 17px;
    width: 17px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bolder;
    color: rgb(187, 187, 187);
`;
const Popup = styled.div`
    top:65px;
    width:380px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background-color: white;
    height : 250px;
    border-radius: 10px;
`;
const Lign = styled.div`
    width : 90%;
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(187, 187, 187);
`;

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
    background-color: grey;
    height: 1px;
    width: 620px;
`;
const Loading = styled.div`
    height: 1px;
    background-color: white;
`;