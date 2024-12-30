const Router = require('express')
const router=new Router()
const planController = require('../controllers/planController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',planController.create)
router.get('/',planController.getAll)
router.post('/delete/:planId',planController.delete)

module.exports = router