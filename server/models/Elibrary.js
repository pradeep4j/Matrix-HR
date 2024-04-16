import mongoose from "mongoose";

const elibrarySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    placeholdername: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    executive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    label: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    dates: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    image : {
        type : Object
    },
    approvedate: {
        type: Date,
        default: null
    },
    reason: {           
        type: String,
        default: null,
        trim: true,
        index:true
    },
    status: {
        type: Number,
        default:0,
        index: true
    },    
    rejected_at : { 
        type: Date, 
        default: null,
        index: true 
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: null
    },

})

const Elibrary = mongoose.model('Elibrary', elibrarySchema)
export default Elibrary;