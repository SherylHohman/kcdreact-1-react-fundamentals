// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// use the onChange eventHandler for input validation
// use the useState hook and input validation to set form error message
// error message element should set attribute role='alert' for screen readers
// Disable the onSubmit button by setting its "disabled" attribute.
//   Rem to overtly convert to (errorMessage) to Boolean

// Changed the name ID of the input element to
//  usernameInput from usernameInputID
//  I never liked the previous name,
//  but it had served a useful purpose originally when I was trying to locate
//  properties within the huge event object in the first exercise.

function UsernameForm({onSubmitUsername}) {
  const [errorMessage, setErrorMessage] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  const handleChange = event => {
    const value = event.target.value
    const isLowerCase = value === value.toLowerCase()
    setErrorMessage(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} id="usernameInput" type="text" />
        <p>
          <i role="alert" style={{color: 'red'}}>
            {errorMessage}
          </i>
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
