import React from 'react'
import { Link } from 'react-router-dom'
import countercss from './Counter.module.scss'

class Counter extends React.Component {
    componentWillUnmount() {
        this.props.clearAction()
    }

    render() {
        const {
            showError,
            decrementAction,
            incrementAction,
            count
        } = this.props
        return (
            <div className={countercss.counter}>
                <h2>Simple Counter</h2>
                {showError && (
                    <div className={countercss.counter__err__txt}>
                        Max 5 allowed
                    </div>
                )}
                <div>
                    <button
                        onClick={decrementAction}
                        className={countercss.button}
                    >
                        -
                    </button>
                    <span className={countercss.counter__text}>{count}</span>
                    <button onClick={incrementAction}>+</button>
                </div>

                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default React.memo(Counter)
