import mongoose from "mongoose";

const liseRegSchema = new mongoose.Schema({

    regNo: {
        type: String,
        default: null,
        required: true,
        // unique: true,
        index: true
    },
    rate: {
        type: mongoose.Types.Decimal128,
        default: null,
        required: true,
        index: true,
    },
    documents: {
        type: Object
    },
    // imagetypedoc:{
    //     type: Object,
    // },
    docReqDate: {
        type: Date,
        default: null,
        index: true
    },
    docReqFollow: {
        type: Date,
        default: null,
        index: true
    },
    docReviewDate: {
        type: Date,
        default: null,
        index: true
    },
    docStatus: {
        type: Number,
        index: true
    },
    docRemark : {
        type: String,
        default: null,
        trim: true,
        index: true,
    },
    appliedDate: {
        type: Date,
        default: null,
        index: true
    },
    applicationStatus: {
        type: Number,
        index: true
    },
    applicationRemark: {
        type: String,
        default: null,
        trim: true,
        index: true,
    },
    acknowledge: {
        type: Object
    },
    // acknowledgeType:{
    //     type: Object
    // },
    challlanFees: {
        type: mongoose.Types.Decimal128,
        default: null,
        index: true,
        trim: true
    },
    challanNumber: {
        type: String,
        // required: true,
        unique: true,
        index: true,
        trim: true,
        default : null
    },
    challanDate: {
        type: Date,
        default: null,
        index: true
    },
    challanUpload: {
        type: Object
    },
    // challanUploadType: {
    //     type: Object
    // },
    directExpenses: {
        type: mongoose.Types.Decimal128,
        default: null,
        index: true,
        trim: true
    },
    inDirectExpenses: {
        type: mongoose.Types.Decimal128,
        default: null,
        index: true,
        trim: true
    },
    totalExpenses: {
        type: mongoose.Types.Decimal128,
        default: null,
        index: true,
        trim: true
    },
    // licenseNumber: {
    //     type: String,
    //     default: null,
    //     index: true,
    //     trim: true
    // },
    dateOfIssue: {
        type: Date,
        default: null,
        index: true
    },
    renewalDate: {
        type: Date,
        default: null,
        index: true
    },
    expireDate: {
        type: Date,
        default: null,
        index: true
    },
    licenseUpload: {
        type: Object
    },
    // licenseUploadType: {
    //     type: Object
    // },
    invoiceType: {
        type: String,
        default: null,
        // required: true,
        index: true
    },
    invoiceDate: {
        type: Date,
        default: null,
        index: true
    },
    invoiceNumber: {
        type: String,
        // required: true,
        unique: true,
        default: null,
        index: true,
        trim: true
    },
    submissionDate: {
        type: Date,
        default: null,
        index: true
    },
    branch: {
        type: String,
        trim:true,
        index:true
    },
    status: {
        type: Number,
        default: 0,
        index: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companydata',
        default: null
    },
    executive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
        default: null
    },
    approvedate : { 
        type: Date, 
        index: true 
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

const Lisereg = mongoose.model('Lisereg', liseRegSchema)
export default Lisereg;