const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    fullName:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING},
    speciality:{type:DataTypes.STRING},
    department:{type:DataTypes.STRING},
    group:{type:DataTypes.STRING}
})
const Subject = sequelize.define('subject',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true},
    speciality:{type:DataTypes.STRING}
})
const Themes = sequelize.define('themes',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    subjId:{type:DataTypes.INTEGER},
    creatorName:{type:DataTypes.STRING},
    creatorId:{type:DataTypes.INTEGER}
})
const Chapter = sequelize.define('chapter',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    themesId:{type:DataTypes.INTEGER}
})
const Test = sequelize.define('test',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    chapterId:{type:DataTypes.INTEGER},
    chapterName:{type:DataTypes.STRING},
    creatorId:{type:DataTypes.INTEGER},
    themesId:{type:DataTypes.INTEGER},
    themesName:{type:DataTypes.STRING},
    date:{type:DataTypes.INTEGER}
})
const Task = sequelize.define('task',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    testId:{type:DataTypes.INTEGER}
})
const Answer = sequelize.define('answer',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    text:{type:DataTypes.STRING},
    taskId:{type:DataTypes.INTEGER},
    correct:{type:DataTypes.STRING}
})
const Catalog = sequelize.define('catalog',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    userId:{type:DataTypes.INTEGER},
    chapterId:{type:DataTypes.INTEGER},
    chapterName:{type:DataTypes.STRING},
    themesName:{type:DataTypes.STRING},
    themesId:{type:DataTypes.INTEGER}
})
const Plan = sequelize.define('plan',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    creatorName:{type:DataTypes.STRING},
    chapterId:{type:DataTypes.INTEGER},
    chapterName:{type:DataTypes.STRING},
    themesName:{type:DataTypes.STRING},
    themesId:{type:DataTypes.INTEGER},
    views:{type:DataTypes.STRING},
    group:{type:DataTypes.STRING},
    speciality:{type:DataTypes.STRING},
    department:{type:DataTypes.STRING},
})
const ReadChapter = sequelize.define('readChapter',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    userId:{type:DataTypes.INTEGER},
    chapterId:{type:DataTypes.INTEGER}
})
const ReadThemes = sequelize.define('readThemes',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    userId:{type:DataTypes.INTEGER},
    themesId:{type:DataTypes.INTEGER}
})
const Glossary = sequelize.define('glossary',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    userId:{type:DataTypes.INTEGER},
    title:{type:DataTypes.STRING},
    text:{type:DataTypes.STRING}
})
const ChapterContent = sequelize.define('chapterContent',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    description:{type:DataTypes.STRING},
    chapterId:{type:DataTypes.INTEGER}
})
const ResultStudent = sequelize.define('resultStudent',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    testId:{type:DataTypes.INTEGER},
    fullName:{type:DataTypes.STRING},
    userId:{type:DataTypes.INTEGER},
    creatorId:{type:DataTypes.INTEGER},
    chapterName:{type:DataTypes.STRING},
    grade:{type:DataTypes.INTEGER}
})

module.exports={
    User,
    Subject,
    Task,
    Test,
    Chapter,
    Themes,
    Answer,
    Catalog,
    ReadChapter,
    ReadThemes,
    Plan,
    ResultStudent,
    ChapterContent,
    Glossary
}