import Axios from 'axios';

function EventListRow(props)
{
    //Object Destruction 
    const { _id,ename,platform,meetlink,edate,etime} = props.obj; //_id,name,email,rollno
    const handleDelete = () => {
        const url = "http://localhost:4500/user/delete-event/"+_id;
        Axios.delete(url,{
            headers: {
            'Content-Type': 'application/json'
          }})
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Event Record deleted successfully..");
                window.location.reload();
            }
            else{
                alert("error");
                Promise.reject();
            }
        })

        .catch((err)=>alert(err));
    }
    return(
        <tr>
            <td>{ename}</td>
            <td>{platform}</td>
            <td>{meetlink}</td>
            <td>{edate}</td>
            <td>{etime}</td>
            <td>
                <a href={`./update-event/${ _id}`}><button class="btn btn-md btn-success m-1">Edit</button></a>
                <button onClick={handleDelete} class="btn btn-md btn-danger m-1">Delete</button>
            </td>
        </tr>
    )
}
export default EventListRow;