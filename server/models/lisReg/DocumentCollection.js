import mongoose from "mongoose";

const docCollectionSchema = new mongoose.Schema({
    documents: {
        type: Object
    },
    docReqDate: {
        type: Date,
        default:null,
        index: true
    },
    docReqFollow: {
        type: Date,
        default:null,
        index: true
    },
    docReviewDate: {
        type: Date,
        default:null,
        index: true
    },
    status : {
        type : Number,
        default : 0,
        index : true
    },
}, { timestamps: true })

const Documentcollection = mongoose.model('Documentcollection', docCollectionSchema)
export default Documentcollection