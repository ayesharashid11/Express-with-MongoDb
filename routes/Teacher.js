import express from 'express';
import { createTeacher, deleteTeacher, getTeachers, updateTeacher } from '../Controllers/Teacher.js';

const router = express.Router();

router.get('/', getTeachers );
router.post('/', createTeacher);
router.patch('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
