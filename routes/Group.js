import express from 'express';
import{ createGroup, getGroups,  deleteGroup,updateGroup }from '../Controllers/Group.js';

const router = express.Router();

router.post('/', createGroup);
router.get('/', getGroups);
router.delete('/:id', deleteGroup);
router.patch('/:id', updateGroup);

export default router;
