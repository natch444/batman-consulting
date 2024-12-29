import batman from './assets/batman-logo.png'
import './App.css'

import BatTrail from "./BatTrail";

function App() {

  return (
    <>
      <BatTrail />
      <div>
        <a href="https://www.youtube.com/watch?v=k8m-00D0xj8" target="_blank">
          <img src={batman} className="logo batman" alt="Batman" />
        </a>
      </div>
      <h1>Batman Consulting</h1>
      <div className="info">
        <p>
            Working hours 9pm to 9am.
        </p>

        <p>
            Don't call us, we will find you.
        </p>
      </div>
    </>
  )
}

export default App
