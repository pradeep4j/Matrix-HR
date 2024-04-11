import mongoose from "mongoose";

const expenseDetailSchema = new mongoose.Schema({
    challlanFees : {
        type : String,
        required : true,
        default:null,
        index : true,
        trim : true
    },
    challanNumber : {
        type : String,
        required : true,
        unique : true,
        index : true,
        trim : true
    },
    challanDate : {
        type : Date,
        default:null,
        index : true
    },
    challanUpload : {
        type : Object
    },
    directExpenses : {
        type : String,
        default:null,
        index : true,
        trim : true
    },
    status : {
        type : Number,
        default : 0,
        index : true
    }
}, {timestamps : true})

const Expensedetail = mongoose.model('Expensedetail', expenseDetailSchema)
export default Expensedetail