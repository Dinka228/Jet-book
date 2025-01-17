const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User}=require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt=(id,email,role,fullName,speciality, department, group)=>{
    return jwt.sign(
        {id,email,role,fullName,speciality,department,group},
        process.env.SECRET_KEY,
        {
            expiresIn: '24h'
        }
    )
}

class UserController{
    async registration(req,res,next){
        const {email,password,role,fullName,speciality, department, group} = req.body
        if(!email||!password){
            return next(ApiError.badRequest('Невірно вказана пошта або пароль'))
        }
        const candidate = await User.findOne({
            where:{email}
        })
        if(candidate){
            return next(ApiError.badRequest('Користувач з такою поштою вже є'))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email,password:hashPassword,role,fullName,speciality, department, group})
        const token = generateJwt(user.id,user.email,user.role,user.fullName,user.speciality,user.department,user.group)
        return res.json({token})
    }
    async login(req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.internal('Користувача не існує'))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return next(ApiError.internal('Невірний пароль'))
        }
        const token = generateJwt(user.id,user.email,user.role,user.fullName,user.speciality,user.department,user.group)
        return res.json({token})
    }
    async check(req,res,next) {
        const token = generateJwt(req.user.id,req.user.email,req.user.role,req.user.fullName,req.user.speciality,req.user.department,req.user.group)
        return res.json({token})
    }
    async getAll(req,res,next) {
        let user
        user = await User.findAll()
        return res.json(user)
    }
    async getAllTeachers(req,res,next) {
        let user = await User.findAll({where:{role:'Teacher'}})
        return res.json(user)
    }
    async getAllStudents(req,res,next) {
        let user = await User.findAll({where:{role:'Student'}})
        return res.json(user)
    }
}
module.exports = new UserController()