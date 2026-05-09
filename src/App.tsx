import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <p>
          This is the personal website of Adithya Reji.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
          <div>
            This is a work in progress, and I will be adding more content to this website in the following weeks!
          </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
