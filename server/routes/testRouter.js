const Router = require('express')
const router=new Router()
const testController = require('../controllers/testController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',testController.create)
router.get('/:chapterId',testController.getAll)
router.get('/getAllTeachers/:creatorId',testController.getAllTeachersTest)
router.get('/getAllThemesTest/:themesId',testController.getAllThemesTest)

module.exports = router