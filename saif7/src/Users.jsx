import { useEffect, useState } from "react";
import "./App.css"
function Users() {

    const url = "http://localhost:3000/users"

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState([])
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
    console.log(usersData);
    return (
        <>
            <ul className="list list_head">
                <li>Name </li>
                <li>Age</li>
                <li>Email</li>
            </ul>

            {
                !loading ?
                    usersData.map((p) => (
                        <ul className="list" key={p.name}>
                            <li>{p.name}</li>
                            <li>{p.age}</li>
                            <li>{p.email}</li>
                        </ul>
                    ))
                    : <h1>Data Loading....</h1>

            }
        </>
    )
}
export default Users;
