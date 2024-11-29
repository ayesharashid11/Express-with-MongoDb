import mongoose from "mongoose";
const groupSchema = new mongoose.Schema({
name: {type: String}
})
export default mongoose.model('Group' ,groupSchema);