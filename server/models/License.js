import mongoose from 'mongoose';

const licenseSchema = new mongoose.Schema({
    licenseTitle : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    licenseUpload : {
        type : Object
    },
    company : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Companydata"
    },
    activatedDate : {
        type : Date,
        required : true,
    },
    renewalDate : {
        type : Date,
        required : true,
    },
    expiryDate : {
        type : Date,
        required : true
    },
    details : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
}, {timestamps : true})

const License = mongoose.model ('License', licenseSchema)
export default License;