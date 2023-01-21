import React from 'react'
import "./style.css"

const Header = ({title,eqaimBlog}) => {
  return (
    <div className='main container-fluid '>
        <div className='header mx-4'>
            <h1>{eqaimBlog}</h1>
        </div>

    </div>
  )
}

export default Header
