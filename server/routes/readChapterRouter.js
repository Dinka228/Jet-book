const Router = require('express')
const router=new Router()
const readChapterController = require('../controllers/readChapterController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',readChapterController.create)
router.get('/:userId',readChapterController.getAll)

module.exports = router