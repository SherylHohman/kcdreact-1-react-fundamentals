// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// 1. 💯 Create a custom component
// Production deploy

// Try to make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.

// I should be able to use it like so:

// <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//   small lightblue box
// </Box>

const Box = props => {
  return (
    <div
      className={'box ' + props.className}
      style={{fontStyle: 'italic', ...props.style}}
    >
      {props.children}
    </div>
  )
}

const smallBox = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
