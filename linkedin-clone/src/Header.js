import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">

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
