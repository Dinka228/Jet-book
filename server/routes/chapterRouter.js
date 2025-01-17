const Router = require('express')
const router=new Router()
const chapterController = require('../controllers/chapterController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',chapterController.create)
router.get('/:themesId',chapterController.getAll)
router.post('/update',chapterController.update)
router.post('/delete/:chapterId',chapterController.delete)

module.exports = router