import { Link } from "react-router-dom";

function NavBar() {
    return (
       <div id="navbar">
            <nav>
                <Link to={"/"}>All Players</Link>
                <Link to={"/newplayerform"}>New Player Form</Link>
            </nav>
       </div>
    );
}

export default NavBar;