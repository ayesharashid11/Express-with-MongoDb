import express from 'express';
import { createSubTeach, deleteSubTeach, getAllSubTeach, updateSubTeach } from '../Controllers/SubjectTeacher.js';

const router = express.Router();

router.post('/', createSubTeach);
router.get('/', getAllSubTeach);
router.delete('/:id', deleteSubTeach);
router.patch('/:id', updateSubTeach);

export default router;
