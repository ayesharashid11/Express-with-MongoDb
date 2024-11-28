import mongoose from "mongoose";
const marksSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    },

    subject: {
        type: mongoose.Types.ObjectId,
        ref: 'Subject'
    },
    marks: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }


})
export default mongoose.model('Mark', marksSchema);
