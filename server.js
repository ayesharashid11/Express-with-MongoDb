import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './dbConfig.js';
import GroupRoutes from './routes/Group.js'
import StudentRoutes from './routes/Studnet.js';
import SubjectRoutes from './routes/Subject.js';
import teacherRoutes from './routes/Teacher.js';
dotenv.config();

const app = express();
ConnectDB();
app.use(express.json());
app.use('/group', GroupRoutes)
app.use('/student', StudentRoutes)
app.use('/subject', SubjectRoutes)
app.use('/teacher', teacherRoutes);
const port =8000

app.listen(port, ()=>console.log('Server is running!'));