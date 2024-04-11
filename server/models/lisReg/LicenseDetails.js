import mongoose from "mongoose";

const licenseDetailSchema = new mongoose.Schema({
    licenseNumber : {
        type : String,
        default:null,
        requied : true,
        index : true,
        trim : true
    },
    dateOfIssue : {
        type : Date,
        default:null,
        index : true
    },
    renewalDate : {
        type : Date,
        default:null,
        index : true
    },
    expireDate : {
        type : Date,
        default:null,
        index : true
    },
    licenseUpload : {
        type : Object
    },
    status : {
        type : Number,
        default : 0,
        index : true
    },
}, {timestamps : true})

const Licensedetail = mongoose.model('Licensedetail', licenseDetailSchema)
export default Licensedetail;