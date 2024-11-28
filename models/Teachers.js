import mongoose from "mongoose";
const TeacherSchema = new mongoose.Schema({
name : {
    type: String,
}
})
export default mongoose.model('Teacher' ,TeacherSchema);