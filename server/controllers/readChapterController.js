const {User} = require("../models/models");
const {ReadChapter} = require("../models/models");

class ReadChapterController{
    async create(req,res){
        const {userId,chapterId} = req.body
        const readChapter = await ReadChapter.create({userId,chapterId})
        return res.json(readChapter)
    }
    async getAll(req,res){
        const {userId} = req.params
        const readChapter = await ReadChapter.findAll({
            where:{userId}
        })
        return res.json(readChapter)
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
module.exports = new ReadChapterController()