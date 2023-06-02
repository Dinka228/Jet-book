const {User} = require("../models/models");
const {Themes} = require("../models/models");

class ThemesController{
    async create(req,res){
        const {name,subjId} = req.body
        const theme = await Themes.create({name,subjId})
        return res.json(theme)
    }
    async getAll(req,res){
        const {subjId} = req.params
        const theme = await Themes.findAll({
            where:{subjId}
        })
        return res.json(theme)
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
        const {name, themesId} = req.body
        const updateTheme = await Themes.update({name:name},{where:{id:themesId}})

        return res.json(updateTheme)
    }
}
module.exports = new ThemesController()