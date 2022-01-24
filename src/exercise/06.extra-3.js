// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Controlled inputs
// set a element/component's value attribute (equal to some state variable)
//      eg <input value={username}>
//  to turn it into a controlled input element
//  it sets the value DOM's element equal to the state of our variable
//  "inversion of control"
// the useState hook sets and stores the controlled input value
// use the onChange eventHandler to process/edit/change the controlled input state
//  buy calling its "useState" within the eventHandler

// Disable the onSubmit button by setting its "disabled" attribute.
//   Rem to overtly convert to (errorMessage) to Boolean
// Delete errorMessage stuff from extra-credit-2, as invalid input is not possible

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.usernameInputID.value)
  }

  const handleChange = event => {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInputID">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          id="usernameInputID"
          type="text"
        />
      </div>
      <button disabled={Boolean(!username)} type="submit">
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
