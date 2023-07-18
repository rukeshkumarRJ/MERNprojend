import { useParams } from "react-router-dom";
import EventForm from './EventForm';
import {useEffect, useState} from 'react';
import Axios from 'axios';

function UpdateEvent() {
    const [obj,setObj] = useState({});
    const [updatedData, setUpdatedData] = useState([]);

    const {id} = useParams();

    const getState = (childData) => {
        setUpdatedData(childData);
    }

    const handleSubmit = () => {
        const url = "http://localhost:4500/user/update-event/" + id;
        const updatedObj = {ename:updatedData[0],platform:updatedData[1],meetlink:updatedData[2],edate:updatedData[3],etime:updatedData[4]};
        Axios.put(url,updatedObj)
        .then((res)=>{
            if(res.status ===200){
                alert("Successfully updated")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }


    useEffect(()=>{
        const url = "http://localhost:4500/user/update-event/" + id;
        Axios.get(url)
        .then((res)=>{
            if(res.status === 200)
            {
                setObj(res.data); //{_id,name,email,rollno}
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <EventForm getState={getState} btnName="Update Event" nameValue={obj.ename} platformValue={obj.platform} MeetLinkValue={obj.meetlink} DateValue={obj.edate} TimeValue={obj.etime}/>
            </form>
        </div>
    )
}
export default UpdateEvent;