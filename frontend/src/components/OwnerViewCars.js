import {useState, useEffect} from "react";
import axios from "axios";
import { Link, Routes,Route, useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";
import { AddCars } from "./AddCars";

export const OwnerViewCars = () => {

    const [carData, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:2300/crs/api/v1/getCars")
        .then((cars) => setData(cars.data)) 
    },[])

    const deleteCar = (_id) => {
        axios.delete(`http://localhost:2300/crs/api/v1/deleteCar/${_id}`).then(
            () => {
              window.location.reload(false);
            }
          )
    }
    console.log(carData);

    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }
    return (
        <>
        <div id={"topnav"}>
		    <Link to="/ownerdashboard" className={"rentx"}>HOME</Link>
			<Link to="/addcars" className={"viewcar"}>ADD CARS</Link>
			<Link to="/approvecar" className={"approve"}>VIEW APPROVAL/REJECT STATUS</Link>
		    <Link to="/contact" className={"contact"}>CONTACT ADMIN</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
		</div>

        <table id="cars">
            <tr>
                <th>Vehicle Name</th>
                <th>Color</th>
                <th>Capacity</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Price Per day</th>
                <th>Pincode</th>
                <th>City</th>
                <th>Update</th>
                <th>Delete</th>
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
                    <td><button type='button' name="update" className={"update_btn"}>Update</button></td>
                    <td><button type='button' name="delete" className={"delete_btn"} onClick={() => deleteCar(car._id)}>Delete</button></td>

                </tr>
            ))}
            </tbody> 
        </table>

        <Routes>
            <Route path="/addcars" element={<AddCars/>}></Route>
            
        </Routes>
        </>
    )
}
