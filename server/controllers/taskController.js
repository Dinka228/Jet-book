const {User} = require("../models/models");
const {Task} = require("../models/models");

class TaskController{
    async create(req,res){
        const {name,testId} = req.body
        const task = await Task.create({name,testId})
        return res.json(task)
    }
    async getAll(req,res){
        const {testId} = req.params
        const task = await Task.findAll({
            where:{testId}
        })
        return res.json(task)
    }
    // async finishTask(req,res){
    //     const {id,curatorId} = req.params
    //     const task = await Task.findOne({
    //         where:{id}
    //     })
    //     await Task.update({progress:"Finished"},{where:{id:task.id}})
    //     const updateTask = await Task.findAll({
    //         where:{curatorId}
    //     })
    //     return res.json(updateTask)
    // }
    async update(req,res){
        const {taskId,curatorId,answer} = req.body
        await Task.update({curatorId:curatorId,answer:answer},{where:{id:taskId}})
        const updateCountTask = await User.findOne({where:{id:taskId}})

        return res.json(updateCountTask)
    }
}
module.exports = new TaskController()