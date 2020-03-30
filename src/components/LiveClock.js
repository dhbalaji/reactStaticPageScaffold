import React, { Component } from 'react'
import './clock.scss'

const getTime = () => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return {
        hours,
        minutes,
        seconds
    }
}

class LiveClock extends Component {
    state = {
        time: getTime()
    }

    tick = () => {
        this.setState((state) => ({
            time: getTime()
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const {
            time: { hours, minutes, seconds }
        } = this.state
        return (
            <div className="clock">
                <span className="hour">{hours}</span>
                <span className="minutes"> : {minutes}</span>
                <span className="seconds"> : {seconds}</span>
            </div>
        )
    }
}

export default LiveClock
