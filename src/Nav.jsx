import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="flex justify-center gap-10">
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Nav;