import {mongoose} from "mongoose";

const cars = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    color: {
        type:String,
        required:true
    },
    capacity: {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    pincode : {
        type:String,
        required:true
    },
    city : {
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    },
    duration : {
        type : Number,
        required:true
    },
    owneremail : {
        type : String,
        required:true
    },
    ownerphone : {
        type: Number,
        required:false
    }
})

const carDetails = mongoose.model('car_details',cars);

export default carDetails;