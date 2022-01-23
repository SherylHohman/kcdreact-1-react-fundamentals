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

// Extra Credit 1. 💯 Create a custom component
// Try to make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.

// I should be able to use it like so:
// <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//   small lightblue box
// </Box>

const Box = ({className = '', style, ...otherProps}) => {
  // children is included in otherProps and passed on as children
  // to the div component to render as children "automatically"
  // I do NOT need to wrap it as in <div>{children}</div>
  // Instead <div {...otherProps} /> will accomplish it.
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

// Above: do not need destructure the children prop in the custom component,
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
