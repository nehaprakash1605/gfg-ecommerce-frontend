import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeStore } from "./ThemeContext";
import { useSelector } from "react-redux";

let Navbar = () => {

    let {theme, setTheme} = useContext(ThemeStore);
    let cartCount = useSelector((store) => store.cart.items);
    

    let lightTheme = "navbar sticky top-0 bg-teal-50 z-10"
    let darkTheme = "navbar sticky top-0 bg-teal-700 z-10"
    return (
        <>
            <div className={theme=='light'? lightTheme : darkTheme}>
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost text-xl">E-Kart</a>
                    <Link className="btn btn-ghost" to="/login">Login</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/cart"><FaShoppingCart /><sup className="font-bold text-red-600">{cartCount.length}</sup></Link></li>
                        <li>
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" 
                                    onClick={()=>{
                                        setTheme(theme == 'light'?'dark':'light')
                                        console.log(theme)
                                        }}/>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar