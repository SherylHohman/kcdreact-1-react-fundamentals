// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Extra credit 1: using refs
// create a ref for the input element
// use that ref, instead of the input id, to obtain the user input data/value
// [useRef docs](https://reactjs.org/docs/hooks-reference.html#useref)

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef(null)
  // REM: must import it (either destructured or as React.useRef)

  const handleSubmit = event => {
    event.preventDefault()

    /* onSubmitUsername(event.target.elements.usernameInputID.value) */

    // console.log(usernameInputRef.current)
    // console.dir(usernameInputRef)
    onSubmitUsername(usernameInputRef.current.value)
  }

  // REM: MUST still have an id even when use ref, because label, accessability, focus
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInputID">Username:</label>
        <input ref={usernameInputRef} id="usernameInputID" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
