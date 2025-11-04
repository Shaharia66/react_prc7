import { useEffect, useState } from "react";
import "./App.css"
function App() {

  const url="https://dummyjson.com/user"
  
  const [usersData,setUsersData]=useState([]);
  useEffect(()=>{
    getData()
  },[])
  async function getData(){
    let response=await fetch(url);
    response=await response.json();
    // console.log(response);
    setUsersData(response.users)
  }
  console.log(usersData);
  return (
    <>
    <h1>Here starts fatching api.</h1>
    <ul className="list list_head">
        <li>First Name </li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>
    {
      usersData.map((p)=>(  
      <ul className="list" key={p.name}>
        <li>{p.firstName}</li>
        <li>{p.lastName}</li>
        <li>{p.age}</li>
      </ul>
      ))
    }
    </>
  )
}

export default App
