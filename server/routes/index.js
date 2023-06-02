const Router = require('express')
const router=new Router()
const answerRouter = require('./answerRouter')
const catalogRouter = require('./catalogRouter')
const taskRouter = require('./taskRouter')
const chapterRouter = require('./chapterRouter')
const readChapterRouter = require('./readChapterRouter')
const userRouter = require('./userRouter')
const readThemesRouter = require('./readThemesRouter')
const testRouter = require('./testRouter')
const subjectRouter = require('./subjectRouter')
const themesRouter = require('./themesRouter')



router.use('/user',userRouter)
router.use('/task',taskRouter)
router.use('/themes',themesRouter)
router.use('/test',testRouter)
router.use('/answer',answerRouter)
router.use('/catalog',catalogRouter)
router.use('/chapter',chapterRouter)
router.use('/subject',subjectRouter)
router.use('/readChapter',readChapterRouter)
router.use('/readThemes',readThemesRouter)

module.exports = router