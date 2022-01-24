// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Extra credit 1: using refs
// create a ref for the input element
// use that ref, instead of the input id, to obtain the user input data/value
// [useRef docs](https://reactjs.org/docs/hooks-reference.html#useref)

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef(null)
  const [errorMessage, setErrorMessage] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    if (errorMessage) {
      // disable submit button
    } else {
      onSubmitUsername(usernameInputRef.current.value)
    }
  }

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setErrorMessage(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInputID">Username:</label>
        <input
          onChange={handleChange}
          ref={usernameInputRef}
          id="usernameInputID"
          type="text"
        />
        <p role="alert" style={{color: 'red'}}>
          <i>{errorMessage}</i>
        </p>
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
