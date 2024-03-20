import express from "express";
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js';

const app=express();
const PORT=9000;

app.use(bodyParser.json());
app.use('/users',usersRoutes);
app.get('/',(req,res) => res.send('Hello'));
app.listen(PORT, () => console.log(`Server is running on port on  http://localhost:${PORT}`));