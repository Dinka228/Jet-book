const {User} = require("../models/models");
const {ChapterContent} = require("../models/models");

class ChapterContentController{
    async create(req,res){
        const {chapterId,description} = req.body
        const content = await ChapterContent.findOne({where:{chapterId}})
        console.log(`Контент ${content}`)
        if(content){
            const chapterContent = await ChapterContent.update({description:description},{where:{chapterId:chapterId}})
            return res.json(chapterContent)
        }else{
            const chapterContent = await ChapterContent.create({chapterId,description})
            return res.json(chapterContent)
        }
    }
    async getAll(req,res){
        const {chapterId} = req.params
        const chapterContent = await ChapterContent.findAll({
            where:{chapterId:chapterId}
        })
        return res.json(chapterContent)
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
        const updateChapterContent = await ChapterContent.update({name:name},{where:{id:chapterId}})

        return res.json(updateChapterContent)
    }
    async delete(req,res){
        const {chapterId} = req.params
        const deleteChapterContent = await ChapterContent.destroy({where:{id:chapterId}})

        return res.json(deleteChapterContent)
    }
}
module.exports = new ChapterContentController()