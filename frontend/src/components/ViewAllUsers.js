import {useState, useEffect} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";

export const ViewAllUsers = () => {

    const [usersData, setUsersData] = useState([]);
    
    const useremail = window.localStorage.getItem("email");
    console.log("UserEmail: "+useremail);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:2300/crs/api/v1/UsersData")
        .then((users) => setUsersData(users.data)) 
    },[])


    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }

    
    return (
        <>
        <div id="topnav">
        <Link to="/custdashboard" className={"rentx"}>HOME</Link>
			<Link to="/viewallusers" className={"history"}>VIEW ALL USERS</Link>
			<Link to="/viewallowners" className={"status"}>VIEW ALL OWNERS</Link>
			<Link to="/adminviewcars" className={"contact"}>VIEW AVAILABLE CARS</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
        </div>
    
        <table id="users">
            <tr>
                <th>UserName</th>
                <th>Rented Car</th>
            </tr>
            <tbody>
            {usersData.map((user, key) => (
                <tr key={key}>
                    <td>{user.useremail}</td>
                    <td>{user.carname}</td>
                </tr>
            ))}
            </tbody> 
        </table>
        </>
    )
}
