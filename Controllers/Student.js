import Student from '../models/Student.js'

export const createStudent = async (req, res) => {
    try {
        const {name, group, email, password } = req.body;
        const student = await Student.create({name,group, email ,password})
        if(!email || !password || !group){return res.json('Email, password, Group fields are required')}
        res.json(student)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
 
}

export const deleteStudent  = async (req, res) =>{
    try {
        const {id} = req.paramss.id;
        const student  = await Student.findByIdAndDelete(id)
        if(!id) {
           return  res.json('No Id found')
        }
        res.json({msg: 'Student Deleted',  student })
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const getStudent  = async(req, res) =>{
    try {
        const student  = await Student.find();
        if(!student){ return res.json('No student yet!')}
        res.json(student )
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const updateStudent  = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email} = req.body;
        const student  = await Student.findByIdAndUpdate(id,{name, email}, {new:true})
        if(!id){ return res.json('No Id found')}
        if(!student){ return res.json('No Student  found')}
        res.json({message: 'Student Updated' , student})
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}