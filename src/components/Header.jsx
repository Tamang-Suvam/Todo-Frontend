import React from 'react'

const Header = () => {
  return (
    <div data-testid="header-1">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container text-center">
          <h1 className="header-text">My</h1>
          <h1 className="header-text-3d">My Todo App</h1>
          <h1 className="header-text">App</h1>
        </div>
      </nav>
    </div>
  )
}

export default Header