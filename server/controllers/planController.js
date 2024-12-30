const {User, Chapter} = require("../models/models");
const {Plan} = require("../models/models");

class PlanController{
    async create(req,res){
        const {creatorName,chapterId,chapterName,themesId,themesName,group,speciality,department,views} = req.body
        const plan = await Plan.create({creatorName,chapterId,chapterName,themesName,themesId,group,speciality,department,views})
        return res.json(plan)
    }
    async getAll(req,res){
        const plan = await Plan.findAll()
        return res.json(plan)
    }
    async delete(req,res){
        const {planId} = req.params
        const deletePlan = await Plan.destroy({where:{id:planId}})

        return res.json(deletePlan)
    }
}
module.exports = new PlanController()
