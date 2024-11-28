import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        required: true
    },
    password: {
        type: String ,
        required: true
    },
    group: {
        type: mongoose.Schema.ObjectId,
        ref: 'Group'
    }
});
export default mongoose.model('Student' , studentSchema)