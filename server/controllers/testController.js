const {User} = require("../models/models");
const {Test} = require("../models/models");

class TestController{
    async create(req,res){
        const {chapterId,date,creatorId,themesId,themesName,chapterName} = req.body
        const test = await Test.create({chapterId,date,creatorId,themesId,themesName,chapterName})
        return res.json(test)
    }
    async getAll(req,res){
        const {chapterId} = req.params
        const test = await Test.findOne({
            where:{chapterId:chapterId}
        })
        return res.json(test)
    }
    async getAllThemesTest(req,res){
        const {themesId} = req.params
        const test = await Test.findAll({
            where:{themesId:themesId}
        })
        return res.json(test)
    }
    async getAllTeachersTest(req,res){
        const {creatorId} = req.params
        const test = await Test.findAll({
            where:{creatorId:creatorId}
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