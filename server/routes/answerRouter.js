const Router = require('express')
const router=new Router()
const answerController = require('../controllers/answerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',answerController.create)
router.get('/:taskId',answerController.getAll)

module.exports = router