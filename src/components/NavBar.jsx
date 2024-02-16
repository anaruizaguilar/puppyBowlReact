import { Link } from "react-router-dom";

function NavBar() {
    return (
       <div id="navbar">
            <ul>
               <li> <Link to={"/"}>All Players</Link> </li>
               <li className="new-player-form-link"> <Link to={"/newplayerform"}>New Player Form</Link> </li>
            </ul>
       </div>
    );
}

export default NavBar;