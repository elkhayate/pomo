import React, { Component } from 'react';
import styled from 'styled-components';
import { ContextTime } from '../contexts/ContextTime';
export default class Timer extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            minutes : this.props.Minutes,
            seconds : 0,
            finished : false,
            width : 0,
            speed : 300 / (this.props.Minutes * 60)
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
            this.context.handleData(this.state.width)
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
                this.context.handleData(this.state.width)
            }else {
                this.onPause();
                this.setState({
                    finished : true,
                })
            }
        }
    }

    timer = () => {
        this.f = setInterval(this.onStart, 1000)
    }

    onPause = () => {
        clearInterval(this.f)
    }
     
    render(){
        var Seconds = this.state.seconds;
        var Minutes = this.state.minutes;
        return (
            <div>
                <div style={{width : "300px", background : "red", height : "5px"}}>
                    <div style={{width : `${this.state.width}px`, background: "black", height : "100%"}}></div>
                </div>
                <h1>{`${Minutes > 9 ? Minutes : `0${Minutes}`} : ${Seconds > 9 ? Seconds : `0${Seconds}`}`}</h1>
                <button onClick={this.timer}>Start</button>
                <button onClick={this.onPause}>Stop</button>
            </div>
        )
    }
}
