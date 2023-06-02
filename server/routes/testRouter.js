const Router = require('express')
const router=new Router()
const testController = require('../controllers/testController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',testController.create)
router.get('/:subjId',testController.getAll)

module.exports = router