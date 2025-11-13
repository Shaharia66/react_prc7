import { useState } from "react";
import { NavLink } from "react-router";

function UsersAdd() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [reg,setReg]= useState('')

    async function createUser() {
        console.log(name,age,reg,email)
        const url="http://localhost:3000/users"
        let response=await fetch(url,{
            method:"post",
            body:JSON.stringify({name,age,reg,email})
        });
        response=await response.json();
        if(response){
            alert("data is added.")
        }
}

    return (
        <div style={{ textAlign: "center" }}>
            <h1>here Add users .</h1>
            <input type="text" onChange={(event) => { setName(event.target.value) }} placeholder="enter name" />
            <br />
            <input type="text" onChange={(event)=>{setAge(event.target.value)}} placeholder="enter age" />
            <br />
            <input type="text" onChange={(event)=>{setReg(event.target.value)}} placeholder="enter reg" />
            <br />
            <input type="text" onChange={(event)=>{setEmail(event.target.value)}} placeholder="enter email" />
            <br />
            <button onClick={createUser}>add user</button>
        </div>
    )
}
export default UsersAdd;

