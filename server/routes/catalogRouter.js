const Router = require('express')
const router=new Router()
const catalogController = require('../controllers/catalogController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',catalogController.create)
router.get('/:userId',catalogController.getAll)

module.exports = router