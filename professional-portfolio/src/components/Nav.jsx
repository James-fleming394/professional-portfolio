import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="navbar">
            <Link className='link-pic' to='/'>
                <img id="link-picture"
                    src="https://i.imgur.com/PbKVQzs.jpg"
                    alt="JF"
                />
            </Link>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/background'>Background</Link>
            <Link className='link' to='/projects'>Projects</Link>
            <Link className='link' to='/contact'>Contact Me</Link>
        </div>
    )
}

export default Nav