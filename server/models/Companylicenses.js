import mongoose from 'mongoose'

const companyLicenseSchema = new mongoose.Schema({
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
        ref : "Company"
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
}, {timestamps:true})

const Companylicenses = mongoose.model('Companylicense', companyLicenseSchema)
export default Companylicenses