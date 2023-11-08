import React from 'react'

import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className = 'mainheader' position="static">
        <div className = 'leftcontainer'>
            <Link to = '/' className = 'logo'>JUSTEST</Link>
            <Link to = '/test' className = 'element'>create test</Link>
            <Link to = '/archive' className = 'element'>test archieve</Link>
            <Link to = '/statistic' className = 'element'>statistic</Link>
            <Link to = '/signinto' className = 'element'>login</Link> 
        </div>
        <div className = 'rightcontainer'>
          <Link to = '/signinto'>
          <div className = 'signin'>
            <p>sign in </p>
            <img className = 'signimg' src={"./img/login_but.png"}/>
          </div>
          </Link>
        </div>
    </header>
  )
}
