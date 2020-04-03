import React from 'react'
import './App.scss'
import LiveClock from './components/LiveClock'
import { shouldUseDarkMode } from './common/helper'

// TODO: Put pref to local storage or check local storage option
class App extends React.Component {
    state = {
        isDarkModeEnabled: shouldUseDarkMode()
    }

    render() {
        const { isDarkModeEnabled } = this.state
        let appClassName = isDarkModeEnabled ? 'darkTheme' : 'lightTheme'
        appClassName = `${appClassName} App`
        return (
            <div className={appClassName}>
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
}

export default App
