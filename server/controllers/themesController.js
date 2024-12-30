const {User, Chapter} = require("../models/models");
const {Themes} = require("../models/models");

class ThemesController{
    async create(req,res){
        const {name,subjId,creatorName,creatorId} = req.body
        const theme = await Themes.create({name,subjId,creatorName,creatorId})
        return res.json(theme)
    }
    async getAllSubjThemes(req,res){
        const {subjId} = req.params
        const theme = await Themes.findAll({
            where:{subjId}
        })
        return res.json(theme)
    }
    async getAllTeacherThemes(req,res){
        const {fullName} = req.params
        const theme = await Themes.findAll({
            where:{creatorName:fullName}
        })
        return res.json(theme)
    }
    async getAll(req,res){
        const theme = await Themes.findAll()
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
    async delete(req,res){
        const {themesId} = req.params
        const deleteTheme = await Themes.destroy({where:{id:themesId}})

        return res.json(deleteTheme)
    }

}
module.exports = new ThemesController()