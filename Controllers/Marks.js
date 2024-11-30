import Marks from '../models/Marks.js';
import Subject from '../models/Subject.js';
import Student from '../models/Student.js';

export const createMarks = async (req, res) => {
    try {
        const { student, subject, marks } = req.body;

        if (!student || !subject || marks === undefined) {
            return res.json({ message: 'student, subhect marks are required' });
        }
        const DBstudent = await Student.findById(student);
        if (!DBstudent) {
            return res.json({ message: 'Student not found' });
        }

        const DBsubject = await Subject.findById(subject);
        if (!DBsubject) {
            return res.json({ message: 'Subject not found' });
        }
        const mark = await Marks.create({ student, subject, marks });
        return res.json(mark);

    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const deleteMarks = async (req, res) => {
    try {
        const {id} = req.params.id;
        const mark = await Marks.findByIdAndDelete(id)
        return res.json({msg: 'Marks deleted', mark})
    } catch (error) {
          res.json(error)
        console.log(error)
    }
}

export const updateMarks = async (req, res) => {
    try {
      const { id } = req.params;
      const { marks } = req.body;
  
      if (!marks) {
        return res.json({ message: 'Marks field is required' });
      }
  
      const updatedMark = await Marks.findByIdAndUpdate( id,  { marks }, { new: true }  )
  
      if (!updatedMark) {
        return res.json({ message: 'Mark not found' });
      }
  
     return res.json({
        message: 'Mark updated successfully', updatedMark,
      });
    } catch (error) {
      console.error(error);
      res.json({error });
    }
  };
  
export const getAllMarks = async (req, res) => {
    try {
      const marks = await Marks.find()
      if (!marks) {
        return res.json({ message: 'No marks found' });
      }
      return res.json(marks);
    } catch (error) {
      console.error( error);
      res.json({ error});
    }
  };
  