import {mongoose} from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const loginSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        index:true
    },
    password:{
        type:String,
        required:true
    }
},{strict:true})

loginSchema.plugin(uniqueValidator);
const registrationDetails = mongoose.model('registrationDetails',loginSchema);

export default registrationDetails;