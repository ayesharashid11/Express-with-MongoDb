import express from 'express';
import{ createSubject, getSubjects,  deleteSubject,updateSubject }from '../Controllers/Subject.js';

const router = express.Router();

router.post('/', createSubject);
router.get('/', getSubjects);
router.delete('/:id', deleteSubject);
router.patch('/:id', updateSubject);

export default router;
