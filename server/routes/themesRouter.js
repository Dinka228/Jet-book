const Router = require('express')
const router=new Router()
const themesController = require('../controllers/themesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',themesController.create)
router.get('/:subjId',themesController.getAllSubjThemes)
router.get('/teacher/:fullName',themesController.getAllTeacherThemes)
router.get('/',themesController.getAll)
router.post('/update',themesController.update)
router.post('/delete/:themesId',themesController.delete)

module.exports = router