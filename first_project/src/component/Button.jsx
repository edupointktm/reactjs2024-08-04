import React from 'react'

function Button(props) {
  return (
    <><button type="submit" className={props.btnColor}>{props.btnName}</button>
    </>
  )
}

export default Button