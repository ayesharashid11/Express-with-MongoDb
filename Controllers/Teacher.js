import Teacher from  '../models/Teachers.js';

export const createTeacher = async (req, res) =>{
    try {
        const {name} = req.body;
        const teacher = await Teacher.create({name})
        if(!name){return res.json('Name field is required')}
        res.json(teacher)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
 export const deleteTeacher = async (req, res)=>{
    const {id} = req.params;
    const teacher = await Teacher.findByIdAndDelete(id)
    if(!id){
        return res.json('No Teacher found with that id')
    }
    res.json({msg: 'Teacher deleted successfully', teacher})
 }
 export const updateTeacher = async(req, res)=>{
        try {
        const {id} = req.params;
        const {name} = req.body;
        const teacher = await Teacher.findByIdAndUpdate(id,{name}, {new:true})
        if(!id){ return res.json('No Id found')}
        if(!teacher){ return res.json('No teacher found')}
        res.json(teacher)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
 }
 export const getTeachers = async(req, res) =>{
    try {
        const teacher = await Teacher.find();
        if(!teacher){ return res.json('No teacher yet!')}
        res.json(teacher)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
 }