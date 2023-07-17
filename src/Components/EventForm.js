import { useState, useEffect } from "react";
import Nav from './Nav';
import Foot from './foot';


function EventForm(props) {
    const [ename, setName] = useState('');
    const [platform, setPlatform] = useState('');
    const [meetlink, setMeetLink] = useState('');
    const [edate, setDate] = useState('');
    const [etime, setTime] = useState('');

    // Initialize state variables with props values
    useEffect(() => {
        setName(props.nameValue);
        setPlatform(props.platformValue);
        setMeetLink(props.MeetLinkValue);
        setDate(props.DateValue);
        setTime(props.TimeValue);
    }, [props]);

    const arr = [ename, platform, meetlink, edate, etime];
    const handleClick = () => {
        return props.getState(arr);
    }

    return (
        <div>
            <Nav />
            <h2 className="text-center mx-auto my-3" style={{ maxWidth: "500px" }}>
                Event Details</h2><br/>
            <input
                placeholder="Event Name"
                type="text"
                className="form-control mx-auto my-3"
                style={{ maxWidth: "500px" }}
                onChange={(e) => setName(e.target.value)}
                value={ename} // Use value instead of defaultValue
                required
            />
            <input
                placeholder="Platform or location"
                type="text"
                className="form-control mx-auto my-3"
                style={{ maxWidth: "500px" }}
                onChange={(e) => setPlatform(e.target.value)}
                value={platform} // Use value instead of defaultValue
                required
            />
            <input
                placeholder="Event Link"
                type="text"
                className="form-control mx-auto my-3"
                style={{ maxWidth: "500px" }}
                onChange={(e) => setMeetLink(e.target.value)}
                value={meetlink} // Use value instead of defaultValue
            />
            <input
                placeholder="Event Date"
                type="date"
                className="form-control mx-auto my-3"
                style={{ maxWidth: "500px" }}
                onChange={(e) => setDate(e.target.value)}
                value={edate} // Use value instead of defaultValue
                required
            />
            <input
                placeholder="Event Time"
                type="time"
                className="form-control mx-auto my-3"
                style={{ maxWidth: "500px" }}
                onChange={(e) => setTime(e.target.value)}
                value={etime} // Use value instead of defaultValue
                required
            />
            <center>
                <button
                    className="btn btn-success"
                    type="submit"
                    onClick={handleClick}
                >
                    {props.btnName}
                </button>
            </center>
            <Foot/>
        </div>
    );
}

export default EventForm;
