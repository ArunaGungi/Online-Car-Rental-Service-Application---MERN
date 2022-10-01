import { useState } from "react";
import {Link, useNavigate, Routes, Route} from "react-router-dom";
import "../static/stylesheets/addcars.css";
import axios from "axios";
import { OwnerViewCars } from "./OwnerViewCars";

export const AddCars = () => {

	const navigate = useNavigate();

	var email = window.localStorage.getItem("email");

	const [data, setData] = useState({
		name:"",
		color:"",
		capacity:"",
		duration:"",
		description:"",
		price:"",
		pincode:"",
		city:"",
		owneremail:"",
		onwnerphone:""
	})
	
	const sendData = async() => {

		console.log("In Add cars:"+email);
		setData({...data,owneremail:email});
		console.log(data.owneremail);		
		
		try {
			const result = await axios.post("http://localhost:2300/crs/api/v1/addcar",data);
			console.log(result);
			if(result.status === 200) {
				window.alert("Data added successfully");
				navigate("/viewcars");
			}
		}
		catch(error) {
			console.log(error);
		}
	}

	const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }

    return (
		<>
        <div id="topnav">
			<Link to="/ownerdashboard" className={"rentx"}>HOME</Link>
            <Link to="/viewcars" className={"viewcar"}>VIEW ADDED CARS</Link>
            <Link to="/approvecar" className={"status"}>VIEW STATUS OF APPROVAL/REJECTION</Link>
            <Link to="/contact" className={"contact"}>CONTACT</Link>
            <Link to="/" className={"logout"} style={{"float":"right"}}onClick={setLogout}>LOG OUT</Link>
        </div>
		
		<div className={"section1"}  style={{marginTop:"40px"}}>
			Vehicle Name<input type="text" name="vehiclename" className={"name"} style={{width:"200px"}}
			onChange={(e) => setData({...data, name:e.target.value})}></input>
			
			Color<input type="text" name="color" className={"color"}  style={{width:"200px"}}
			onChange={(e) => setData({...data, color:e.target.value})}></input>
			
			Capacity<input type="number" name="capacity" className={"capacity"}  style={{width:"200px"}}
			onChange={(e) => setData({...data, capacity:e.target.value})}></input>

			Price in Dollars<input type="number" name="price" className={"price"}  style={{width:"200px"}}
			onChange={(e) => setData({...data, price:e.target.value})}></input>

</div>
<div id="section2">
			Description<input type="text" name="desc" className={"capacity"}  style={{width:"200px"}}
			onChange={(e) => setData({...data, description:e.target.value})}></input>
			
			Pincode<input type="text" name="address" className={"address"}  style={{width:"200px"}}
			onChange={(e) => setData({...data, pincode:e.target.value})}></input>
			
			City<input type="text" name="city" className={"city"}  style={{width:"200px"}}
			onChange={(e) => setData({...data, city:e.target.value})}></input>

			Duration<input type="number" name="duration" className={"duration"}  style={{width:"200px"}}
			onChange={(e) => setData({...data, duration:e.target.value})}></input>
			
		</div>
		<button type="submit"  id="submit" style={{width:"200px"}}
			onClick={sendData}>Add Car</button>
			
		<Routes>
			<Route path="/viewcars" element={<OwnerViewCars/>}></Route>
		</Routes>
		</>
    )
}