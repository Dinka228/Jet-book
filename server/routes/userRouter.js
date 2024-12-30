const Router = require('express')
const router=new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration',userController.registration)
router.get('/getAllTeachers',userController.getAllTeachers)
router.get('/getAllStudents',userController.getAllStudents)
router.post('/login',userController.login)
router.get('/auth',authMiddleware,userController.check)
router.get('/user',userController.getAll)

module.exports = router