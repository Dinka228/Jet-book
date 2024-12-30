const Router = require('express')
const router=new Router()
const glossaryController = require('../controllers/glossaryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',glossaryController.create)
router.get('/:userId',glossaryController.getAll)

module.exports = router