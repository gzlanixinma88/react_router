import React from 'react'

import {NavLink} from 'react-router-dom'
import '../index.css'
export default function MyNavLink(props) {

    return  <NavLink {...props} activeClassName='activeClass'/>
}

