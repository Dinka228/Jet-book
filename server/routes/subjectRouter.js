const Router = require('express')
const router=new Router()
const subjectController = require('../controllers/subjectController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',subjectController.create)
router.get('/',subjectController.getAll)

module.exports = router