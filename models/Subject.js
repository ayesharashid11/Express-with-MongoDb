import mongoose from "mongoose";
const SubjectSchema = new mongoose.Schema({
title : {
    type: String
}
})
export default mongoose.model('Subject' ,SubjectSchema);