import {mongoose} from "mongoose";

const rentedcar = new mongoose.Schema({
    carname: {
        type:String,
        required:true
    },
    owneremail : {
        type : String,
        required:true
    },
    useremail : {
        type: String,
        required:true
    },
    totalprice : {
        type:Number,
        required:true,
    },
    rentduration : {
        type:Number,
        required:true
    },
    status : {
        type:String,
        required:false
    },
})

const rentDetails = mongoose.model('rentDetails',rentedcar);

export default rentDetails;