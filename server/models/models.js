const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    fullName:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"},
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
    subjId:{type:DataTypes.INTEGER}
})
const Chapter = sequelize.define('chapter',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    themesId:{type:DataTypes.INTEGER}
})
const Test = sequelize.define('test',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    chapterId:{type:DataTypes.INTEGER}
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
    correct:{type:DataTypes.STRING, defaultValue: 'No'}
})
const Catalog = sequelize.define('catalog',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    userId:{type:DataTypes.INTEGER},
    chapterId:{type:DataTypes.INTEGER},
    status:{type:DataTypes.STRING, defaultValue: 'No'}
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