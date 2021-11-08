import React, { Component } from 'react';
import { ContextTime } from '../contexts/ContextTime';
import styled from 'styled-components';


export default class Timer extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            minutes : this.props.Minutes,
            seconds : 0,
            width : 0,
            speed : 620 / (this.props.Minutes * 60),
            counting : false,
        }
    }
    static contextType = ContextTime;
    onStart = () => {
        if(this.state.seconds > 0){
            this.setState({
                seconds : this.state.seconds - 1
            })
            this.setState({
                width : this.state.width + Math.floor(this.state.speed)
            })
            //this.context.handleData(this.state.width)
        }else {
            if(this.state.minutes > 0) {
                this.setState({
                    seconds : 59
                })
                this.setState({
                    minutes : this.state.minutes - 1
                })
                this.setState({
                    width : this.state.width + Math.floor(this.state.speed)
                })
                //this.context.handleData(this.state.width)
            }else {
                this.onPause();
                this.context.handleCompleted()
                // if pomo switch to next
                switch(this.context.Which){
                    case 'pomo':
                        this.context.handleWhich('short');
                        this.setState({minutes : this.props.Minutes})
                        break;
                    case 'short':
                        this.context.handleWhich('long');
                        this.setState({minutes : this.props.Minutes})
                        break;
                    case 'long':
                        this.context.handleWhich('pomo');
                        this.setState({minutes : this.props.Minutes})
                        break;
                    default: 
                        break;
                }
            }
        }
    }

    timer = () => {
        this.f = setInterval(this.onStart, 1000)
    }

    onPause = () => {
        clearInterval(this.f)
    }
    handleStart = () => {
        this.timer();
        this.setState({
            counting : true,
        })
    }
    handleStop = () => {
        this.onPause();
        this.setState({
            counting : false,
        })
    }
    render(){
        var Seconds = this.state.seconds;
        var Minutes = this.state.minutes;
        const s = this.state;
        return (
            <Container>
                <Modes>
                    <Mode 
                        Display={this.context.Which === 'pomo'}
                        onClick={()=>this.context.handleWhich('pomo')}
                    >pomodoro</Mode>
                    <Mode 
                        Display={this.context.Which === 'short'}
                        onClick={()=>this.context.handleWhich('short')}
                    >short break</Mode>
                    <Mode 
                        Display={this.context.Which === 'long'}
                        onClick={()=>this.context.handleWhich('long')}
                    >long break</Mode>
                </Modes>
                <Counter>{`${Minutes > 9 ? Minutes : `0${Minutes}`} : ${Seconds > 9 ? Seconds : `0${Seconds}`}`}</Counter>
                {
                    s.counting ?
                    <Stop onClick={this.handleStop}>stop</Stop>
                    :
                    <Start onClick={this.handleStart}>start</Start>
                }
                <h1>{this.context.Which}</h1>
            </Container>
        )
    }
}

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    display: block;
    text-align: center;
    font-size: 50px;
`;
const Modes = styled.div`
    display: flex;
    width : 90%;
    justify-content: space-evenly;
`;

const Mode = styled.p`
    border: medium none;
    color: white;
    margin: 0px;
    border-radius: 4px;
    font-size: 16px;
    padding: 2px 12px;
    height: 28px;
    cursor: pointer;
    background: ${props => props.Display ? 
                'rgba(0, 0, 0, 0.15) none repeat scroll 0% 0%' : 
                'rgba(0, 0, 0, 0) none repeat scroll 0% 0%'};
                
    box-shadow: none;
    font-weight: 300;
    width: 33%;
`;

const Counter = styled.h1`
    font-size: 120px;
    font-weight: bold;
    margin-top: 20px;
`;

const Start = styled.button`

`;

const Stop = styled.button`
`;

