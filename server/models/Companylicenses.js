import mongoose from 'mongoose'

const companyLicenseSchema = new mongoose.Schema({
    licenseName : {
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
    state : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "State"
    },
    branchname : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    executive : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    activatedDate : {
        type : Date,
        required : true,
    },
    renewalDate : {
        type : Date,
        required : true,
    },
    approved_at : {
        type : Date,
        required : true,
    },
    expiryDate : {
        type : Date,
        required : true
    }
}, {timestamps:true})

const Companylicenses = mongoose.model('Companylicense', companyLicenseSchema)
export default Companylicenses