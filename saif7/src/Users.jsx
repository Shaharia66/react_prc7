import { useEffect, useState } from "react";
import "./App.css"
import { useNavigate } from "react-router";
function Users() {

    const url = "http://localhost:3000/users"

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState([]);
    const navigate= useNavigate();
    useEffect(() => {
        setLoading(true)
        getData()
    }, [])
    async function getData() {
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);
        setUsersData(response)
        setLoading(false)
    }
    async function deleteData(id) {
        console.log(id);
        let response = await fetch(url+"/"+id,{method:"delete"});
        response = await response.json();
        if(response){
            alert("sure to delete!")
        }
        getData();
    }
    function editData(id){
        navigate("/edit/"+id);
    }
    console.log(usersData);
    return (
        <>
            <ul className="list list_head">
                <li>Name </li>
                <li>Age</li>
                <li>Email</li>
                <li>Action</li>
            </ul>

            {
                !loading ?
                    usersData.map((p) => (
                        <ul className="list" key={p.name}>
                            <li>{p.name}</li>
                            <li>{p.age}</li>
                            <li>{p.email}</li>
                            <li><button onClick={()=>{deleteData(p.id)}} style={{textAlign:"center", padding:"3px"}}>Delete</button>
                            <button onClick={()=>{editData(p.id)}}>Edit</button>
                            </li>
                        </ul>
                    ))
                    : <h1>Data Loading....</h1>

            }
        </>
    )
}
export default Users;
