import React from 'react'
import { NavLink } from 'react-router-dom'

const item = ({text, to, svg, open}) => {
  return (
    <NavLink to={to}>
        <div>{svg}</div>
        {open ? <p>{text}</p> : null}
    </NavLink>
  )
}

export default item;