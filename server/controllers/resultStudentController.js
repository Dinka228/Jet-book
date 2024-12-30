const {User} = require("../models/models");
const {ResultStudent} = require("../models/models");

class ResultStudentController{
    async create(req,res){
        const {userId,testId,grade,fullName,creatorId,chapterName} = req.body
        const resultStudent = await ResultStudent.create({userId,testId,grade,fullName,creatorId,chapterName})
        return res.json(resultStudent)
    }
    async getAllStudentResult(req,res){
        const {userId} = req.params
        const resultStudent = await ResultStudent.findAll({
            where:{userId:userId}
        })
        return res.json(resultStudent)
    }
    async getAllTeacherResult(req,res){
        const {userId} = req.params
        const resultStudent = await ResultStudent.findAll({
            where:{creatorId:userId}
        })
        return res.json(resultStudent)
    }
    async getAllTestResult(req,res){
        const {testId} = req.params
        const resultStudent = await ResultStudent.findAll({
            where:{testId:testId}
        })
        return res.json(resultStudent)
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
module.exports = new ResultStudentController()