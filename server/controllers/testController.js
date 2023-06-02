const {User} = require("../models/models");
const {Test} = require("../models/models");

class TestController{
    async create(req,res){
        const {chapterId} = req.body
        const test = await Test.create({chapterId})
        return res.json(test)
    }
    async getAll(req,res){
        const {chapterId} = req.params
        const test = await Test.findAll({
            where:{chapterId}
        })
        return res.json(test)
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
module.exports = new TestController()