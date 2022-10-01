import {Link, Routes, Route, useNavigate} from "react-router-dom";
import "../static/stylesheets/ownerhome.css";
import dashboardimage from "../static/images/rentcars1.jpg";

export const AdminHome = () => {

	const navigate = useNavigate();

	const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }
    return (
		<>
        <div id="topnav">
            <Link to="/" id={"rentx"}>RentX</Link>
            <Link to="/adminviewcars" id={"addcar"}>VIEW AVAILABLE CARS</Link>
            <Link to="/approvecar" id={"approve"}>VIEW ALL USERS</Link>
            <Link to="/viewcars" id={"addedcars"}>VIEW ALL OWNERS</Link>
            <Link to="/" id={"logout"} onClick={setLogout}>LOG OUT</Link>
        </div>
		<img src={dashboardimage} className={"ownerdashboardimage"}></img>
		<h2>Dear Users, RentX App will help you to find one to rent your car and get the best
			value out of the services. 
		</h2>
		</>
    )
}