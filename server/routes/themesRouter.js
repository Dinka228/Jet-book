const Router = require('express')
const router=new Router()
const themesController = require('../controllers/themesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',themesController.create)
router.get('/:subjId',themesController.getAll)
router.post('/update',themesController.update)

module.exports = router