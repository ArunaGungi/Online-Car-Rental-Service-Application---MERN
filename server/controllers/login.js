import registrationDetails from "../models/register.js";

export const login = async (req,res,next) => {
    try {
        const users = await registrationDetails.find();
        res.status(200).send(users);
    }catch(error) {
        res.status(400).send(error.message);
    }
}
