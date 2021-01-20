import React from 'react'

// look into NavLink documentation for this
const NavBar = () => {
    return (
        <div>
            <nav>
                My Profile
                Mocktails
                R & D
            <input
                    id="search-bar"
                    type="text"
                    placeholder="Search"
                />
            </nav>
        </div>
    )
}

export default NavBar