import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './dbConfig.js';
import GroupRoutes from './routes/Group.js'
import StudentRoutes from './routes/Studnet.js';
import SubjectRoutes from './routes/Subject.js';
import teacherRoutes from './routes/Teacher.js';
import MarksRoutes from './routes/Marks.js';
import SubTeachRoutes from './routes/SubjectTeach.js'
dotenv.config();

const app = express();
ConnectDB();
app.use(express.json());
app.use('/group', GroupRoutes)
app.use('/student', StudentRoutes)
app.use('/subject', SubjectRoutes)
app.use('/teacher', teacherRoutes);
app.use('/marks', MarksRoutes);
app.use('/subteach', SubTeachRoutes)
const port =8000

app.listen(port, ()=>console.log('Server is running!'));