const {User, Chapter} = require("../models/models");
const {Glossary} = require("../models/models");

class GlossaryController{
    async create(req,res){
        const {title,text,userId} = req.body
        const glossary = await Glossary.create({title,text,userId})
        return res.json(glossary)
    }
    async getAll(req,res){
        const {userId} = req.params
        const glossary = await Glossary.findAll({where:{userId:userId}})
        return res.json(glossary)
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
    // async update(req,res){
    //     const {name, themesId} = req.body
    //     const updateGlossary = await Glossary.update({name:name},{where:{id:themesId}})
    //
    //     return res.json(updateGlossary)
    // }
    // async delete(req,res){
    //     const {themesId} = req.params
    //     const deleteGlossary = await Glossary.destroy({where:{id:themesId}})
    //
    //     return res.json(deleteGlossary)
    // }

}
module.exports = new GlossaryController()