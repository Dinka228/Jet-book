const Router = require('express')
const router=new Router()
const resultStudentController = require('../controllers/resultStudentController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',resultStudentController.create)
router.get('/student/:userId',resultStudentController.getAllStudentResult)
router.get('/teacher/:userId',resultStudentController.getAllTeacherResult)
router.get('/result/:testId',resultStudentController.getAllTestResult)

module.exports = router