import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <div className="pb-4 flex justify-center">
            <div className="w-5/6 max-w-[400px] flex justify-center text-center">
                <NavLink className="w-1/3 font-black text-sm" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none", textUnderlineOffset: "0.25rem" })} to="/about">ABOUT</NavLink>
                <NavLink className="w-1/3 font-black text-sm" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none", textUnderlineOffset: "0.25rem" })} to="/experience">EXPERIENCE</NavLink>
                <NavLink className="w-1/3 font-black text-sm" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none", textUnderlineOffset: "0.25rem" })} to="/contact">CONTACT</NavLink>
            </div>
        </div>
    )
}

export default Nav;