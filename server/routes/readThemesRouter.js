const Router = require('express')
const router=new Router()
const readThemesController = require('../controllers/readThemesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',readThemesController.create)
router.get('/:userId',readThemesController.getAll)

module.exports = router