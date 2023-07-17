import { useEffect, useState } from "react";
import Axios from "axios";
import Nav from './Nav';
import Foot from './foot';

import EventListRow from "./EventListRow";
function EventList() {

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const url = "http://localhost:4500/user/";
        Axios.get(url)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
            }
            else{
                alert("failed");
                Promise.reject();
            }
        })
        .catch((err)=>alert("Faiiled"));
    },[])

    const Datatable = () => {
        return resData.map((val,ind)=>{ //[{},{},{}]
            return <EventListRow obj={val} key={ind} />
        })
    }
    return (
        <div>
            <Nav />
            <table class="table-padding table-pad bg-secondary table-bordered table-hover table-striped">
                <tr class="bg-primary">
                    <th>Event Name</th>
                    <th>Event Platform</th>
                    <th>Event Link</th>
                    <th>Event date</th>
                    <th>Event Time</th>
                    <th>Advanced</th>
                </tr>
                <tbody>
                    {Datatable()}
                </tbody>
            </table>
            <Foot />

        </div>
    )
}

export default EventList;