import express from 'express';
import{ createStudent, getStudent,  deleteStudent,updateStudent }from '../Controllers/Student.js';

const router = express.Router();

router.post('/', createStudent);
router.get('/', getStudent);
router.delete('/:id', deleteStudent);
router.patch('/:id', updateStudent);

export default router;
