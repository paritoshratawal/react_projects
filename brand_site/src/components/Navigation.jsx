import React from 'react'

export default function Navigation() {
  return (
    <div><nav>
    <div className='logo'>
      <img src="/public/image/brand_logo.png" alt="logo" />
    </div>
    <ul>
    <li>Menu</li>
    <li>Location</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <button>Login</button>
  </nav></div>
  )
}
