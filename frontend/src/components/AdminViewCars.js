import {useState, useEffect} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";

export const AdminViewCars = () => {

    const [carData, setData] = useState([]);
    
    const useremail = window.localStorage.getItem("email");
    console.log("UserEmail: "+useremail);
    const navigate = useNavigate();

    const [city,setCity] = useState({
        name:""
    });

    useEffect(() => {
        axios.get("http://localhost:2300/crs/api/v1/getCars")
        .then((cars) => setData(cars.data)) 
    },[])

    //console.log(carData);

    const getSpecificCityWiseCars = async() => {
        console.log("in specific");   
        await axios.get(`http://localhost:2300/crs/api/v1/cityWise?city=${city.name}`)
        .then((result) => setData(result.data))
        console.log(city);
    }
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
			<Link to="/about" className={"contact"}>ABOUT</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
        </div>

        
        <p style={{"font-family":"sans-serif", "textAlign":"center"}}>Enter city name below for a quick search<input 
        style={{"width":"200px","backgroundColor":"ButtonHighlight"}} 
        type="text"
        onChange={(e) => setCity({...city, name:e.target.value})}
        ></input>
        
        <button type="submit" style={{"width":"100px","height":"34px"}}
        onClick={getSpecificCityWiseCars}
        >Submit</button>
        
        </p>
        
        <table id="cars">
            <tr>
                <th>Vehicle Name</th>
                <th>Color</th>
                <th>Capacity</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Pincode</th>
                <th>City</th>
            </tr>
            <tbody>
            {carData.map((car, key) => (
                <tr key={key}>
                    <td>{car.name}</td>
                    <td>{car.color}</td>
                    <td>{car.capacity}</td>
                    <td>{car.description}</td>
                    <td>{car.duration}</td>
                    <td>{car.price}$</td>
                    <td>{car.pincode}</td>
                    <td>{car.city}</td>
                </tr>
            ))}
            </tbody> 
        </table>
        </>
    )
}
