import { Link } from "react-router-dom";
import './Foot.css';
function Foot(){
    return(
        <div class="row defColo marginBotto">
            <div class="col-4">
                <h5 className="text-center">Features</h5>
                <Link to="/home" class="nav-link text-center">Home</Link>
                <Link to="/create-event" class="nav-link text-center">Create Event</Link>
                <Link to="/event-list" class="nav-link text-center">Event List</Link>
                <Link to="/contact" class="nav-link text-center">Contact</Link>
                <Link to="/" class="nav-link text-center">Logout</Link>
            
            </div>
            <div class="col-4">
                <h5 className="text-center">Connect Now</h5>
                <a href="https://github.com/rukeshkumarRJ" class="nav-link text-center">Github</a>
                <a href="https://www.linkedin.com/in/rukesh-kumar-j-835346210/" class="nav-link text-center">LinkedIn</a>
                <a href="https://github.com/rukeshkumarRJ" class="nav-link text-center">HackerRank</a>
                <a href="https://leetcode.com/rukeshkumarRj/" class="nav-link text-center">Leetcode</a>
                <a href="/" class="nav-link text-center"> +91 8525810599</a>
                <a href="/" class="nav-link text-center"> rukeshkumar.j004@gmail.com</a>

            </div>
            <div class="col-4">
                <h5 className="text-center">Social media</h5>
                <a href="" class="nav-link text-center">Facebook</a>
                <a href="" class="nav-link text-center">Instagram</a>
                <a href="https://twitter.com/depictr_ruk_esh" class="nav-link text-center">Twitter</a>
                <a href="/https://discord.com/channels/@me" class="nav-link text-center">Discord</a>

            </div>
</div>
    )
}
export default Foot;