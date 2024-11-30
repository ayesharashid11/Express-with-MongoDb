import express from 'express';
import { createMarks, deleteMarks, getAllMarks, updateMarks } from '../Controllers/Marks.js';

const router = express.Router();

router.get('/', getAllMarks);
router.post('/', createMarks);
router.delete('/:id', deleteMarks);
router.patch('/:id' , updateMarks);

export default router;