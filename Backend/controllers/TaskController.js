const TaskModel = require("../models/taskModel");

const createTask = async (req, res) => {
    const data =  req.body;
    console.log('Request Body :', data)
    try{
        const model = new TaskModel(data);
        await model.save();
        res.status(201)
            .json({message: " Task is Created ", success: true});
    }catch(err){
        console.log('Error:', err)
        res.status(500).json({ message : "Failed to create Task" , success : false});
    }
}

const fetchAllTask = async (req, res) => {
    try{
        const data = await TaskModel.find({});
        console.log("Fetched Data:", data)
        res.status(200)
            .json({message: " All Task ", success: true, data});
    }catch(err){
        console.log('Error:', err);
        res.status(500).json({ message : "Failed to get all Task" , success : false});
    }
}

const updateTaskById = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const obj = {$set: {...body}};
        await TaskModel.findByIdAndUpdate(id, obj);
        res.status(200)
            .json({message: " Task Updated ", success: true});
    }catch(err){
        res.status(500).json({ message : "Failed to update Task" , success : false});
    }
}

const deleteTaskById = async (req, res) => {
    try{
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200)
            .json({message: " Task is Deleted ", success: true});
    }catch(err){
        res.status(500).json({ message : "Failed to Delete Task" , success : false});
    }
}


module.exports = {
    createTask,
    fetchAllTask,
    updateTaskById,
    deleteTaskById
}