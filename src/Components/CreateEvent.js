import { useState } from "react";
import EventForm from './EventForm';
import Axios from 'axios';
import Foot from './foot';


function CreateEvent() {
    const [data, setData] = useState([]); //data=input field data

    const getState = (childData) => {
        setData(childData);
    }

    const handleSubmit = () => {
        const url = "http://localhost:4500/user/create-event"
        const obj = { ename: data[0], platform: data[1], meetlink: data[2] , edate :data[3] , etime :data[4] }
        Axios.post(url, obj)
            .then((res) => {
                if (res.status === 200) {
                    alert("Event is created");
                }
                else {  
                    alert("fail")
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <EventForm getState={getState} btnName="Create Event" />
            </form>
        </div>
    )
}

export default CreateEvent;