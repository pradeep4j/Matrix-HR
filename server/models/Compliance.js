import mongoose from 'mongoose'
const complianceschema = new mongoose.Schema({
    act: {
        type: String,               /////Indicate the relevant statutory act governing the compliance requirement
        required: true,
        unique:true,
        trim: true,
        index:true
    },
    rule: {                         /////Specify the specific rule or regulation associated with the compliance entry
        type: String,
        required: true,
        trim: true,
        index:true
    },
    question: {
        type: String,
        required: true,
        trim: true,
        index:true
    },
    description : {
        type : String,
        required: true,
        trim : true,
        index : true
    },
    ruletype:                         /////Specify the specific rule or regulation associated with the compliance entry
        [{
            id: { type: Number },
            value: { type: String }
        }],
    questiontype: [{
        id: { type: Number },
        value: { type: String }
        }],
    descriptiontype : [{
        id: { type: Number },
        value: { type: String }
        }],
    category: {                     ////Categorize the compliance entry based on relevant criteria, facilitating easy sorting and reporting
        type: mongoose.Schema.Types.ObjectId,
        ref : "Category",
        index:true
    },
    executive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    state: {                     ////Categorize the compliance entry based on relevant criteria, facilitating easy sorting and reporting
        type: mongoose.Schema.Types.ObjectId,
        ref : "State",
        index:true
    },
    form: {                     ////Indicate the form or format associated with the compliance entry if applicable
        type: Object,
    },
    docattachment: {
        type: Object,
    },    
    formtype: {                     ////Indicate the form or format associated with the compliance entry if applicable
        type: Object,
    },
    docattachmenttype: {
        type: Object,
    },    
    compliancetype: {       /////legal, environmental, or internal policy compliance combobox
        type: String,
        required: true,
        trim: true,
        index:true
    },  
    frequency: {           /////one-time requirement, monthly, annually,custom combobox
        type: String,
        required: true,
        trim: true,
        index:true
    },  
    risk: {           /////one-time requirement, monthly, annually,custom combobox
        type: String,
        required: true,
        trim: true,
        index:true
    },
    duedate: {
        type: Date, 
        default: null, 
        index: true 
    },      
    status  : { 
        type: Number, 
        index: true, 
        default: 0
    },  
    reason: {           
        type: String,
       // required: true,
        trim: true,
        index:true
    },   
    rejected_at: {           
        type: Date, 
        index:true
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
const Compliance = mongoose.model("Compliance", complianceschema)

export default Compliance;