const {User} = require("../models/models");
const {Answer} = require("../models/models");

class AnswerController{
    async create(req,res){
        const {text,taskId,correct} = req.body
        const answer = await Answer.create({text,taskId,correct})
        return res.json(answer)
    }
    async getAll(req,res){
        const {taskId} = req.params
        const answer = await Answer.findAll({
            where:{taskId}
        })
        return res.json(answer)
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
}
module.exports = new AnswerController()