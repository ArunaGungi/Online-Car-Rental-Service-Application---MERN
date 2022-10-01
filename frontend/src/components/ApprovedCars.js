import { Link, useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const ApprovedCars = () => {

    const navigate = useNavigate();

    //const [approvalStatus, setApprovalStatus] = useState("");
    //const [rejectionStatus, setRejectionStatus] = useState("");

    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }

    const [rentData, setRentData] =  useState([]);

    const useremail = window.localStorage.getItem("email");

    useEffect(() => {
        axios.get(`http://localhost:2300/crs/api/v1/getRentData?useremail=${useremail}`)
        .then((result) => setRentData(result.data))
    },[])

    console.log(rentData);
    
    
    return (
        <>
        <div id="topnav">
			<Link to="/" className={"home"}>HOME</Link>
			<Link to="/approvecar" className={"history"}>VIEW APPROVAL/REJECT STATUS</Link>
			<Link to="/addcars" className={"status"}>ADD CARS</Link>
			<Link to="/viewcars" className={"contact"}>VIEW ADDED CARS</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
		</div>
        <table id="cars">
            <tr>
                <th>Vehicle Name</th>
                <th>Rent Duration</th>
                <th>Total Price</th>
                <th>User Email ID</th>
                <th>Approval Status</th>
                <th>Rejection Status</th>
            </tr>
            <tbody>
            {rentData.map((res, key) => (
                <tr key={key}>
                    <td>{res.carname}</td>
                    <td>{res.rentduration}days</td>
                    <td>{res.totalprice}$</td>
                    <td>{res.useremail}</td>
                    <td>{res.status}</td>
                </tr>
            ))}
            </tbody> 
        </table>
        </>
    )
}
