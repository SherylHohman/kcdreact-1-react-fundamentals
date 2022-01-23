// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  const handleSubmit = event => {
    event.preventDefault()

    /* console.log('submitted', event, event.nativeEvent)
     */
    // technically event will be React's "SynthethicEvent"
    //  (a performance thing)
    //  to get the Actual DOM event, use event.nativeEvent.
    //  but that should never be neccesary, as they 99/9% will be the SAME
    //  so always just use event.

    //  if console.log(event.target), the Chrom dev tools will print out
    //    the HTML of that DOM node.
    //    In this case, that would be the form element and its children
    //  To instead print the (form) object properties and values list, use
    //    console.dir(event.target)
    //  (console.log will work as expected for all other (
    //    NON-HTML / Non DOM Node objects,
    //    it is just DOM nodes that behaves this way in Chrome dev tools
    //  )
    /*
    console.log(event.target)
    console.dir(event.target)
    console.log(
      event.target.elements.usernameInputFieldName,
      event.target.elements.usernameInputID,
      event.target.elements[0],
    )
    */
    // can only send a single object per call
    // all 3 below pull up the SAME exact object.
    // It calls itself input#usernameInputID
    // (id="usernameInputID" was placed in the <input> tag)
    /*
    console.dir(event.target.elements.usernameInputFieldName)
    console.dir(event.target.elements.usernameInputID)
    console.dir(event.target.elements[0])
    */

    // the text "value" of the input field can be referenced as
    // event.target.elements[0].value
    //    though this would change per form, depending on its elements
    // event.target.elements.usernameInputID
    //    this is the id I assigned to the input element
    //    <input id="usernameInputID" />
    // event.target.elements.usernameInputFieldName
    //    this is the "name" property I assigned to the input field's value
    //    <input name="usernameInputFieldName" />
    // obviously, I would probably set BOTH name and id to "username"
    //    but I wanted to distinguish the id, name, htmlfor, and label
    //    So I could see the structure, and wanted to be able to figure out
    //    where the [user Input] was stored, and figure out how to access it.
    //    Turns out there are many options.
    //    Not sure what happens if everything is called "username"
    //      which would it actually look to? It matters not, because they
    //      would all  be the same here. Though if different elements
    //      all had username for ONE of those fields, how would it know?
    //      Dunno, do not care.
    //    I think usually one would reference the NAME property of the
    //      html element in question.

    /* onSubmitUsername(event.target.elements.usernameInputFieldName.value) */
    onSubmitUsername(event.target.elements.usernameInputID.value)
    // both options above work.
    // This exercise expected us to create an ID for the input field
    // but did not expect us to create a NAME prop for the input field
    // So, I guess using the ID was the expected solution.
    //  So I'm updating my solution to reflect that.
    //  BUT because of my extensive notes, I am
    //  NOT DELETING the name="usernameInputFieldName" property
    //  Yes, my names are horrible, but useful for learning and discovery.
  }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInputID">Username:</label>
        <input id="usernameInputID" name="usernameInputFieldName" type="text" />
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
