import Subject from '../models/Subject.js';

export const createSubject = async (req, res) => {
    try {
        const {title} = req.body;
        const subject = await Subject.create({title})
        if(!title){return res.json('Title field is required')}
        res.json(subject)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
 
}

export const deleteSubject = async (req, res) =>{
    try {
        const {id} = req.paramss.id;
        const subject = await Subject.findByIdAndDelete(id)
        if(!id) {
           return  res.json('No Id found')
        }
        res.json({msg: 'subject Deleted',  subject})
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const getSubjects = async(req, res) =>{
    try {
        const subjects = await Subject.find();
        if(!subjects){ return res.json('No subject yet!')}
        res.json(subjects)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const updateSubject = async (req, res) => {
    try {
        const {id} = req.params;
        const {title} = req.body;
        const subject = await Subject.findByIdAndUpdate(id,{title}, {new:true})
        if(!id){ return res.json('No Id found')}
        if(!subject){ return res.json('No subject found')}
        res.json(subject)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}