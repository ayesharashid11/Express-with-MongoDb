import Teacher from '../models/Teachers.js';
import Subject from '../models/Subject.js';
import Group from '../models/Groups.js'
import SubjectTeacher from '../models/SubjectTeacher.js';

export const createSubTeach = async (req, res) => {
    try {
        const { teacher, subject, group } = req.body;

        if (!teacher || !subject || group === undefined) {
            return res.json({ message: 'group, subject teacher are required' });
        }
        const DBTeacher = await Teacher.findById(teacher);
        if (!DBTeacher) {
            return res.json({ message: 'Teacher not found' });
        }

        const DBsubject = await Subject.findById(subject);
        if (!DBsubject) {
            return res.json({ message: 'Subject not found' });
        }
        const DBGroup = await Group.findById(group);
        if (!DBGroup) {
            return res.json({ message: 'Group not found' });
        }
        const SubTeach = await SubjectTeacher.create({ teacher, subject, group });
        return res.json(SubTeach);

    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const deleteSubTeach = async (req, res) => {
    try {
        const {id} = req.params.id;
        const subteach = await SubjectTeacher.findByIdAndDelete(id)
        return res.json({msg: 'Marks deleted', subteach})
    } catch (error) {
          res.json(error)
        console.log(error)
    }
}

export const updateSubTeach = async (req, res) => {
    try {
      const { id } = req.params;
      const { teacher, subject, group } = req.body;
  
      if (!teacher || !subject || group === undefined) {
        return res.json({ message: 'group, subject teacher are required' });
    }
    const DBTeacher = await Teacher.findById(teacher);
    if (!DBTeacher) {
        return res.json({ message: 'Teacher not found' });
    }

    const DBsubject = await Subject.findById(subject);
    if (!DBsubject) {
        return res.json({ message: 'Subject not found' });
    }
    const DBGroup = await Group.findById(group);
    if (!DBGroup) {
        return res.json({ message: 'Group not found' });
    }
  
      const subteach = await SubjectTeacher.findByIdAndUpdate( id,  { marks }, { new: true }  )
  
      if (!subteach) {
        return res.json({ message: 'Subject Teacher not found' });
      }
  
     return res.json({
        message: 'Subject Teacher updated successfully', subteach,
      });
    } catch (error) {
      console.error(error);
      res.json({error });
    }
  };
  
export const getAllSubTeach = async (req, res) => {
    try {
      const subteach = await SubjectTeacher.find()
      if (!subteach) {
        return res.json({ message: 'No Subject Teacher found' });
      }
      return res.json(subteach);
    } catch (error) {
      console.error( error);
      res.json({ error});
    }
  };
  