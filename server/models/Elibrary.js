import mongoose from "mongoose";

const elibrarySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'State',
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
    status: {
        type: Number,
        default:0,
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