import React from 'react'
import './App.scss'
import LiveClock from './components/LiveClock'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={process.env.PUBLIC_URL + '/img/logo.svg'}
                    className="App-logo"
                    alt="logo"
                />
                <p className="App-env"> > {process.env.REACT_APP_CODE}</p>
            </header>
            <main className="clock-wrapper centre-align">
                <LiveClock />
            </main>
        </div>
    )
}

export default App
