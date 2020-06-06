import React from 'react'
import { Link } from 'react-router-dom'
import countercss from './Counter.module.scss'

class Counter extends React.Component {
    componentWillUnmount() {
        this.props.clearAction()
    }

    render() {
        return (
            <div className={countercss.counter}>
                <h2>Simple Counter</h2>
                <div>
                    <button
                        onClick={this.props.decrementAction}
                        className={countercss.button}
                    >
                        -
                    </button>
                    <span className={countercss.counter__text}>
                        {this.props.count}
                    </span>
                    <button onClick={this.props.incrementAction}>+</button>
                </div>

                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default React.memo(Counter)
