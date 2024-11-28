import mongoose from "mongoose";
const groupSchema = new mongoose.Schema({
name: {Stype: String}
})
export default mongoose.model('Group' ,groupSchema);