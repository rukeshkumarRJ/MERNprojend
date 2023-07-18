import { Link } from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-dark">
            <p class="navbar-brand text-light">&nbsp;&nbsp;&nbsp;Eventzz</p>
            <div class="navbar nav">  
                <Link to="/home" class="nav-link  btn btn-success mx-2">Home</Link>
                <Link to="/create-event" class="nav-link btn btn-success mx-2">Create Event</Link>
                <Link to="/event-list" class="nav-link btn btn-success mx-2">Event List</Link>
                <Link to="/contact" class="nav-link btn btn-success mx-2">Contact</Link>
                <Link to="/" class="nav-link btn btn-success mx-2">Logout</Link>
            </div>
        </nav>
    )
}
export default Nav;