import {useState, useEffect} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";

export const ViewAllOwners = () => {

    const [ownersData, setOwnersData] = useState([]);
    
    const useremail = window.localStorage.getItem("email");
    console.log("UserEmail: "+useremail);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:2300/crs/api/v1/UsersData")
        .then((owners) => setOwnersData(owners.data)) 
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
			<Link to="/adminviewcars" className={"contact"}>VIEW ALL AVAILABLE CARS</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
        </div>
    
        <table id="users">
            <tr>
                <th>Owner Email ID</th>
                <th>Car Set For Rent</th>
            </tr>
            <tbody>
            {ownersData.map((user, key) => (
                <tr key={key}>
                    <td>{user.owneremail}</td>
                    <td>{user.carname}</td>
                </tr>
            ))}
            </tbody> 
        </table>
        </>
    )
}
