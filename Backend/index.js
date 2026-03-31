require('dotenv').config();
const express =  require ('express');
const app = express();
require('./models/db');
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.get('/',(req, res)=>{
    res.send('Hello from the server');
});


const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use('/tasks',TaskRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT=${PORT}`);   
})