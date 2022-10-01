import { Link, Routes,Route, useNavigate, useLocation } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";
import "../static/stylesheets/confirmrent.css";
import axios from "axios";

export const ConfirmRent = () => {

    const location = useLocation();
    const navigate=useNavigate();

    var carName = location.state.name;
    var carPrice = location.state.price;
    var rentDuration = location.state.duration;
    var ownerEmail = location.state.email;
    var userEmail = location.state.userEmail;
    var Status = location.state.status;

    const totalPrice = carPrice*rentDuration;

    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }
    const redirectToConfirmation = async() => {
        try {
            const result = await axios.post("http://localhost:2300/crs/api/v1/rentData",
            {carname:carName,owneremail:ownerEmail,useremail:userEmail,rentduration:rentDuration,totalprice:totalPrice, status:Status});
            console.log(result.status); 
        }
        catch(error) {
            console.log(error);
        }
        sendEmail();
        navigate("/confirmedcust");
    }
    const sendEmail = async() => {
        try {
            const result = await axios.post("http://localhost:2300/crs/api/v1/sendEmail",
            {name:carName,owneremail:ownerEmail,useremail:userEmail});

            console.log(result);

        }
        catch(error) {
            console.log(error);
        }
        
    }
    return (
        <>
        <div id="topnav">
            <Link to="/custdashboard" className={"rentx"}>HOME</Link>
			<Link to="/viewrentedcar" className={"history"}>VIEW RENTED CARS</Link>
			<Link to="/viewrentedcar" className={"status"}>VIEW STATUS</Link>
			<Link to="/contact" className={"contact"}>CONTACT ADMIN</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
        </div>
     <div className={"rentdata"}>
            <h3>Car Name: {carName}</h3>
            <h3>Car Price: {carPrice}$</h3>
            <h3>Car Rent Duration: {rentDuration} days</h3>
            <h3>Total amount to be payable: {totalPrice}$</h3>
            <br></br>
            <button type="submit" style={{"width":"200px"}}
            onClick={() => redirectToConfirmation()}>Confirm Rent</button>
        </div>

        </>
    )
}
