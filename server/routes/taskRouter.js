const Router = require('express')
const router=new Router()
const taskController = require('../controllers/taskController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',taskController.create)
router.get('/:testId',taskController.getAll)
router.post('/update',taskController.update)

module.exports = router