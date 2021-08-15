import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1>This is Header</h1>

            <div className="header__left">
                <img scr="" alt="" />

                <div className="header__search">
                    {/* Search Icon */}
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
