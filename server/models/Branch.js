import mongoose from 'mongoose';
const branchschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true
    }},
    {timestamps:true}
)
const Branch = mongoose.model("Branch", branchschema)

export default Branch;