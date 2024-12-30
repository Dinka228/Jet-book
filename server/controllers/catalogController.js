const {User, Chapter} = require("../models/models");
const {Catalog} = require("../models/models");

class CatalogController{
    async create(req,res){
        const {userId,chapterId,themesId,chapterName,themesName} = req.body
        const catalog = await Catalog.create({userId,chapterId,themesId,chapterName,themesName})
        return res.json(catalog)
    }
    async getAll(req,res){
        const {userId} = req.params
        const catalog = await Catalog.findAll({
            where:{userId}
        })
        return res.json(catalog)
    }
    async delete(req,res){
        const {catalogId} = req.params
        const deleteCatalog = await Catalog.destroy({where:{id:catalogId}})

        return res.json(deleteCatalog)
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
module.exports = new CatalogController()