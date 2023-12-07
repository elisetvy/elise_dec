import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="flex justify-center text-center pb-4">
            <Link className="w-1/3" to="/about">About</Link>
            <Link className="w-1/3" to="/experience">Experience</Link>
            <Link className="w-1/3" to="/contact">Contact</Link>
        </div>
    )
}

export default Nav;