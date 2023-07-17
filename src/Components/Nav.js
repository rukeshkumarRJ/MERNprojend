function Nav()
{
    return(
        <nav class="navbar bg-dark">
            <a href="" class="navbar-brand text-light">&nbsp;&nbsp;&nbsp;Eventzz</a>
            <div class="navbar nav">  
                <a href="/home" class="nav-link  btn btn-success mx-2">Home</a>
                <a href="/create-event" class="nav-link btn btn-success mx-2">Create Event</a>
                <a href="/event-list" class="nav-link btn btn-success mx-2">Event List</a>
                <a href="/contact" class="nav-link btn btn-success mx-2">Contact</a>
                <a href="/" class="nav-link btn btn-success mx-2">Logout</a>
            </div>
        </nav>
    )
}
export default Nav;