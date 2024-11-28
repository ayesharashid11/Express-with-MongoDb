import mongoose from "mongoose";
const SubTeacherSchema = new mongoose.Schema({
subject: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subject'
},
teacher: {
    type: mongoose.Schema.ObjectId,
    ref: 'Teacher'
},
group:{
    type: mongoose.Schema.ObjectId,
    ref: 'Group'
}
})
export default mongoose.model('SubjectTeacher' ,SubTeacherSchema);