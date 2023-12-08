import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <div className="pb-4 flex justify-center">
            <div className="w-5/6 max-w-[400px] flex justify-center text-center">
                <NavLink className="w-1/3 font-bold text-sm hover:text-[#32a346] hover:tracking-widest about" to="/about">about</NavLink>
                <NavLink className="w-1/3 font-bold text-sm hover:text-[#905be6] hover:tracking-widest experience" to="/experience">experience</NavLink>
                <NavLink className="w-1/3 font-bold text-sm hover:text-[#4fa6e1] hover:tracking-widest contact" to="/contact">contact</NavLink>
            </div>
        </div>
    )
}

export default Nav;