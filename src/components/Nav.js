import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigation = useNavigate()
    const logout = () => {
        console.warn("apple")
        localStorage.clear()
        navigation("/signup")
    }
    return (
        <div>
            <img alt="logo" className="logo"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2abd662597191.5a9589b09ddf5.jpg" />
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li> <Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link> </li>
            </ul>
                : <ul className="nav-ul nav-right">
                    <li> <Link to="/signup">Sign Up</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                </ul>}
        </div>
    )
}

export default Nav