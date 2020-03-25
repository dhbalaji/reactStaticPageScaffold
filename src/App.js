import React from 'react'
import './App.scss'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={process.env.PUBLIC_URL + '/img/logo.svg'}
                    className="App-logo"
                    alt="logo"
                />
                <p>{process.env.REACT_APP_CODE}</p>
            </header>
        </div>
    )
}

export default App
