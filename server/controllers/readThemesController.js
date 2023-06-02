const {User} = require("../models/models");
const {ReadThemes} = require("../models/models");

class ReadThemesController{
    async create(req,res){
        const {userId,themesId} = req.body
        const readTheme = await ReadThemes.create({userId,themesId})
        return res.json(readTheme)
    }
    async getAll(req,res){
        const {userId} = req.params
        const readTheme = await ReadThemes.findAll({
            where:{userId}
        })
        return res.json(readTheme)
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
module.exports = new ReadThemesController()