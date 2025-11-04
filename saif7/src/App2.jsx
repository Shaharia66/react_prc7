import Users from "./Users";
import { NavLink, Routes,Route } from 'react-router'
import UsersAdd from "./UsersAdd.jsx";


function App2(){
    return(
        <div>
            <h1>Make routes and pages for add user and user list.</h1>
            <ul>
                <li>
                    <NavLink to="/main">Main page </NavLink>
                </li>
                <li><NavLink to="/add">add list</NavLink></li>
            </ul>

            {/* <Users/> */}
            <Routes>
                <Route path="/main" element={<Users/>} />
                <Route path="/add" element={<UsersAdd/>} />
            </Routes>
        </div>
    )
}
export default App2;
