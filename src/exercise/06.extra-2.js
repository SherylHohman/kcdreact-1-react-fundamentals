// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// use the onChange eventHandler for input validation
// use the useState hook and input validation to set form error message
// error message element should set attribute role='alert' for screen readers
// Disable the onSubmit button by setting its "disabled" attribute.
//   Rem to overtly convert to (errorMessage) to Boolean

function UsernameForm({onSubmitUsername}) {
  const [errorMessage, setErrorMessage] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.usernameInputID.value)
  }

  const handleChange = event => {
    const value = event.target.value
    const isLowerCase = value === value.toLowerCase()
    setErrorMessage(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInputID">Username:</label>
        <input onChange={handleChange} id="usernameInputID" type="text" />
        <p role="alert" style={{color: 'red'}}>
          <i>{errorMessage}</i>
        </p>
      </div>
      <button disabled={Boolean(errorMessage)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
