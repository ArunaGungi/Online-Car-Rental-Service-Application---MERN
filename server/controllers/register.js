import registrationDetails from "../models/register.js";

export const register = async(req,res) => {
    const data = req.body;
    console.log("Inside register controller :"+data);
    const register_user = new registrationDetails(data);
    try {
        await register_user.save();
        res.status(200).send("User registered successfully"); 
    }
    catch(error) {
        console.log("Error:" ,error);
        res.status(400).send(error+"unsuccessful");
    }
}
