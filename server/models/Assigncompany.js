import mongoose, { mongo } from "mongoose";

const assignSchema = new mongoose.Schema({
    state : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "State",
        index : true
    },
    branchname: {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Companydata"
    },
    status : {
        type : Number,
        default : 0,
        trim : true,
        index : true
    },
    executive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    assigndate:{
        type : Date,
        default: null,
    },
    created_at : { 
        type: Date, 
        default: Date.now, 
        index: true 
    },
    updated_at : { 
        type: Date, 
        index: true 
    },
})

const Assigncompany = mongoose.model('Assign', assignSchema)
export default Assigncompany;