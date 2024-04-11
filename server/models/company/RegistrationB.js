import mongoose from 'mongoose';

const registrationBSchema = new mongoose.Schema({
    companyregistration: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companyregistrationdetails: {
        type: String,
        trim: true,
        default:null,
        index: true
    },
    companyregistrationimage: {
        type: Object,
    },
    companyregistrationremark: {
        type: String,
        default:null,
        trim: true,
        index: true
    },
    companycin: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companycindetails: {
        type: String,
        trim: true,
        index: true
    },
    companyciniamge: {
        type: Object
    },
    companycinremark: {
        type: String,
        trim: true,
        index: true
    },
    companyissuedplace: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companyissuedplacedetails: {
        type: String,
        trim: true,
        index: true
    },
    companyissuedplaceimage: {
        type: Object
    },
    companyissuedplaceremark: {
        type: String,
        trim: true,
        index: true
    },
    companyauthority: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companyauthoritydetails: {
        type: String,
        trim: true,
        default:null,
        index: true
    },
    companyauthorityimage: {
        type: Object
    },
    companyauthorityremark: {
        type: String,
        default:null,
        trim: true,
        index: true
    },            
    companypan: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companypandetails: {
        type: String,
        trim: true,
        index: true
    },
    companypanimage: {
        type: Object
    },
    companypanremark: {
        type: String,
        trim: true,
        index: true
    },            
    companytan: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companytandetails: {
        type: String,
        trim: true,
        index: true
    },
    companytanimage: {
        type: Object
    },
    companytanremark: {
        type: String,
        trim: true,
        index: true
    },            
    companytin: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companytindetails: {
        type: String,
        trim: true,
        index: true
    },
    companytinimage: {
        type: Object
    },
    companytinremark: {
        type: String,
        trim: true,
        index: true
    },            
    companygst: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    companygstdetails: {
        type: String,
        trim: true,
        index: true
    },
    companygstimage: {
        type: Object
    },
    companygstremark: {
        type: String,
        trim: true,
        index: true
    },                     
    RegistrationB1:{
        type:Array,
    },
    RegistrationB2:{
        type:Array,
    },
    RegistrationB3:{
        type:Array,
    },
    status: {
        type: Number,
        default:0,
        index: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: null
    }
})

const RegistrationB = mongoose.model('RegistrationB', registrationBSchema)
export default RegistrationB;