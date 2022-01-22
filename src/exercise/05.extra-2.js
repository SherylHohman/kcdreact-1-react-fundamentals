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

// 💯 1. Extra Credit 1.  Create a custom component
// Try to make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.

// I should be able to use it like so:
// <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//   small lightblue box
// </Box>

// 💯 2. Extra Credit 2.  accept a size prop to encapsulate styling

// It’s great that we’re composing the classNames and styles properly,
//  but wouldn’t it be better if the users of our components didn’t have to worry about
//  which class name to apply for a given effect?
//  Or that a class name is involved at all?
//  I think it would be better if users of our component had
//  a size prop and our component took care of making the box that size.

// In this extra credit, try to make this API work:

// <Box size="small" style={{backgroundColor: 'lightblue'}}>
//   small lightblue box
// </Box>

const Box = ({size, className = '', style, children, ...otherProps}) => {
  const classNameViaSizeProp = size ? 'box--' + size : ''
  // If no size is passed in, but a className is, className should definitely be set.
  // Which should take priority if conflicting size and className are both passed in?
  // Size will win out the way I wrote it below, because it is last.
  return (
    <div
      className={`box ${className} ${classNameViaSizeProp}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    >
      {children}
    </div>
  )
}

const smallBox = (
  <Box
    size="small"
    className="box--medium"
    style={{backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
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
