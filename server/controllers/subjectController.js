const {User} = require("../models/models");
const {Subject} = require("../models/models");

class SubjectController{
    async create(req,res){
        const {name,speciality} = req.body
        const subj = await Subject.create({name,speciality})
        return res.json(subj)
    }
    async getAll(req,res){

        const subj = await Subject.findAll()
        return res.json(subj)
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
module.exports = new SubjectController()