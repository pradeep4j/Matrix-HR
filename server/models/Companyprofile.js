import mongoose from 'mongoose'

const companyProfileSchema = new mongoose.Schema({
    companyTitle : {
        type :String,
        required : true,
        trim : true,
        index : true
    },
    details : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    companyUpload : {
        type : Object,
    },
    remark : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    company : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Companydata"

    },
    // state : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "State"
    // },
    // // branch : {
    // //     type : 
    // // }
    // executive : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "User"
    // }
}, {timestamps : true})

const Companyprofile = mongoose.model('Companyprofile', companyProfileSchema)

export default Companyprofile;