import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditData(){
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getuserData()
    },[])
    async function getuserData() {
        const url="http://localhost:3000/users/"+id;
        let response=await fetch(url);
        response= await response.json();
        console.log(response)
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)
    }
        const [name, setName] = useState("")
        const [age, setAge] = useState("")
        const [email, setEmail] = useState("")

        async function updateData() {
            console.log(name,age,email);
            const url="http://localhost:3000/users/"+id;
            let response=await fetch(url,{method:"put",
                body:JSON.stringify({name,age,email})
            });
            response=await response.json()
            console.log(response);
            if(response){
                alert("data id updated,")
            }
            navigate("/main");
        }

    return(
        <div style={{textAlign:"center"}}>
            <h1>User Edit Page</h1>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="user name " />
            <br /><br />
            <input type="text" value={age} onChange={(event)=>{setAge(event.target.value)}} placeholder="user age " />
            <br /><br />
            <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="user email " />
            <br /><br />
            <button onClick={updateData}>Update User</button>

        </div>
    )
}
export default EditData;
