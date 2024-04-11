import mongoose from "mongoose";

const applicationDetailSchema = new mongoose.Schema({
    
    appliedDate : {
        type : Date,
        default:null,
        index : true
    },
    status : {
        type : Number,
        default : 0,
        index : true
    },
    remark : {
        type : String,
        default:null,
        trim : true,
        index : true,
    },
    acknowledge : {
        type : Object
    },
}, {timestamps : true})

const Applicationdetail = mongoose.model('Applicationdetail', applicationDetailSchema)
export default Applicationdetail;