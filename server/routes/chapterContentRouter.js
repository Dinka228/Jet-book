const Router = require('express')
const router=new Router()
const chapterContentController = require('../controllers/chapterContentController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',chapterContentController.create)
router.get('/:chapterId',chapterContentController.getAll)
router.post('/update',chapterContentController.update)
router.post('/delete/:chapterId',chapterContentController.delete)

module.exports = router