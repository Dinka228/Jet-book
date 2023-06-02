const {User} = require("../models/models");
const {Chapter} = require("../models/models");

class ChapterController{
    async create(req,res){
        const {name,themesId} = req.body
        const chapter = await Chapter.create({name,themesId})
        return res.json(chapter)
    }
    async getAll(req,res){
        const {themesId} = req.params
        const chapter = await Chapter.findAll({
            where:{themesId}
        })
        return res.json(chapter)
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
        const {name, chapterId} = req.body
        const updateChapter = await Chapter.update({name:name},{where:{id:chapterId}})

        return res.json(updateChapter)
    }
}
module.exports = new ChapterController()