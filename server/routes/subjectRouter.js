const Router = require('express')
const router=new Router()
const subjectController = require('../controllers/subjectController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',subjectController.create)
router.get('/',subjectController.getAll)
router.get('/mySubj/:speciality',subjectController.getAllMySubject)

module.exports = router