import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>E-Com System on Pbancha V3.0.0 (create-a-sign-up-ui-form:Jira)(bug fixed)(Email Release.)</h1>
      <h1>added my order (tossaworn) 2</h1>
      <h1>added in by PBE-12-Test-auto-move-to-inprogess</h1>
      <h1>Test Days 4 (Version 4.0.0): Learn deploy Test CI (Workflow) </h1>
      <h1>Fixed Bug Title </h1>
      <h1>Add Deploy github workflow (Version 8.0.0)</h1>
      <h1>Add Deploy github Notofy to Jira workflow (Version 9.0.0)</h1>
      <h1>Add Deploy github Notofy to Jira workflow (Version 10.0.0)</h1>
      <div className ="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
