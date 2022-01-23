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

const Box = ({size, className = '', style, ...otherProps}) => {
  const classNameViaSizeProp = size ? 'box--' + size : ''
  // If no size is passed in, but a className is, className should definitely be set.
  // Which should take priority if conflicting size and className are both passed in?
  // Size will win out the way I wrote it below, because it is last.

  // do not need destructure the children prop in the custom component,
  // or need to overtly render it within my component.

  // children is part of otherProps.
  // Simply passing otherProps as a prop to the div component that I return
  // will pass the children key/value as one of the props sent to the
  // div component. (React.createElement) reads the children prop, and
  // knows how to render children as children.
  // Then children of my JSX become the children of the rendered div
  // (from my custom component)
  // Remember, children do not need to be between starting and closing tag.
  // They *can* be. OR they can be on a children prop in the object.
  // Since I do not need to overtly wrap {children},
  // I also do not specifically need a closing tag.
  // I can instead use a self closing tag for the div element.

  return (
    <div
      className={`box ${className} ${classNameViaSizeProp}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
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
