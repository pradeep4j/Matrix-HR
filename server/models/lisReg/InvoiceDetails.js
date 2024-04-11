import mongoose from "mongoose";

const invoiceDetailSchema = new mongoose.Schema({
    invoiceType : {
        type : String,
        default:null,
        required : true,
        index : true
    },
    invoiceDate : {
        type : Date,
        default:null,
        index : true
    },
    invoiceNumber : {
        type : String,
        required : true,
        unique : true,
        default:null,
        index : true,
        trim : true
    },
    submissionDate : {
        type : Date,
        default:null,
        index : true
    },
    status : {
        type : Number,
        default : 0,
        index : true
    }
}, {timestamps : true})

const Invoicedetail = mongoose.model('Invoicedetail', invoiceDetailSchema)
export default Invoicedetail;