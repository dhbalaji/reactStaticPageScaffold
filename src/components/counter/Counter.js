import React from 'react'
import { Link } from 'react-router-dom'

class Counter extends React.Component {
    componentWillUnmount() {
        this.props.clearAction()
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.props.decrementAction}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.props.incrementAction}>+</button>
                </div>

                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default React.memo(Counter)
