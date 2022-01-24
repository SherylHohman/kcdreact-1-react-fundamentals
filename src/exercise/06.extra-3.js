// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// NOTE: The Test does NOT PASS!
//  I dunno why. It seems to work properly
//  It seems to match their solution
//  lowercase IS in the alert ??!!

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

// Changed the name ID of the input element to
//  usernameInput from usernameInputID
//  I never liked the previous name,
//  but it had served a useful purpose originally when I was trying to locate
//  properties within the huge event object in the first exercise.

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // NOTE: this now submits username, NOT event.target.usernameInput.value !!
    //   way easier to access a controlled variable than a value stored in
    //   an element in the DOM!
    // onSubmitUsername(event.target.usernameInput.value)
    onSubmitUsername(username)
  }

  const handleChange = event => {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
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
