import "../static/stylesheets/landingpage.css";
import backgroundimage from "../static/images/CarRent.jpg";
import {Link} from "react-router-dom";

export const Landingpage = () => {

    const setCust = () => {
        window.localStorage.setItem("homeredirection","customer");
    }
    const setOwner = () => {
        window.localStorage.setItem("homeredirection","owner");
    }
    const setAdmin = () => {
        window.localStorage.setItem("homeredirection","admin");
    }
    return (
        
        <>
        <div id="main1">
            <Link to="/"><a href="">RentX</a></Link>
            <Link to="/login" id="ownerbtn" onClick={setOwner}>Owner Dashboard</Link>
            <Link to="/login" id="customerbtn" onClick={setCust} >Customer Dashboard</Link>
            <Link to="/adminlogin" id="adminbtn" onClick={setAdmin}>Admin Dashboard</Link>
            <Link to="/contact" id="contact">About</Link>
        </div>
        <div id="main2">
            <h1>Welcome to RentX a Car Rental Application</h1>
            <br></br>
            <p>Renting a car makes keeping a car a very easy task for the user. There is no need to pay the heavy cost to buy the car or spend hundreds of dollars on its maintenance. And what if you meet an accident? Maybe the insurance will kick in, but you will have to spend a huge sum even before taking your car to the workshops for repairs. Renting a car not only takes away the cost of buying vehicles but also allows users to forget about the maintenance costs. There are many rental car services available and offer more value than others. We can help you decide which car rental service is best for your needs.</p>

            <br></br>
            <h3 id="signup">&nbsp;&nbsp;<i class="fa fa-hand-o-right" style={{"font-size":"36px"}}>&nbsp;&nbsp;</i>Sign up</h3>
            <h3 id="search">&nbsp;&nbsp;<i class="fa fa-hand-o-right" style={{"font-size":"36px"}}>&nbsp;&nbsp;</i>Search for a car</h3>
            <h3 id="book">&nbsp;&nbsp;<i class="fa fa-hand-o-right" style={{"font-size":"36px"}}>&nbsp;&nbsp;</i>Book the car</h3>
        </div>
        <div id="main3">
            <img src={backgroundimage} style={{"height":"700px"}}></img>
        </div>
        </>
    )
}