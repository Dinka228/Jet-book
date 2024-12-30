import {makeAutoObservable} from "mobx";
export default class TestStore {
    constructor() {
        this._test = []
        this._currTest = []
        this._task = []
        this._answer = []
        this._resultStudentsForTeacher = []
        this._resultsCurrentStudent = []
        this._currTaskId = 0
        this._currTestId = 0
        this._currDeadLine = []
        this._currChapterId = 0
        this._countAnswer = 0
        this._grade = 0
        this._createVisible = false
        this._testVisible = false
        makeAutoObservable(this)
    }
    setCurrDeadline(currDeadLine){
        this._currDeadLine = currDeadLine
    }
    get currDeadLine(){
        return this._currDeadLine
    }
    setCurrTest(currTest){
        this._currTest = currTest
    }
    get currTest(){
        return this._currTest
    }
    setGrade(grade){
        this._grade = grade
    }
    get grade(){
        return this._grade
    }
    setResultStudentsForTeacher(resultStudentsForTeacher){
        this._resultStudentsForTeacher = resultStudentsForTeacher
    }
    get resultStudentsForTeacher(){
        return this._resultStudentsForTeacher
    }
    setResultsCurrentStudent(resultsCurrentStudent){
        this._resultsCurrentStudent = resultsCurrentStudent
    }
    get resultsCurrentStudent(){
        return this._resultsCurrentStudent
    }

    setCurrChapterId(currChapterId){
        this._currChapterId = currChapterId
    }
    get currChapterId(){
        return this._currChapterId
    }
    setCountAnswer(countAnswer){
        this._countAnswer = countAnswer
    }
    get countAnswer(){
        return this._countAnswer
    }
    setCreateVisible(createVis){
        this._createVisible = createVis
    }
    get createVisible(){
        return this._createVisible
    }
    setTestVisible(testVisible){
        this._testVisible = testVisible
    }
    get testVisible(){
        return this._testVisible
    }
    setCurrTestId(testId){
        this._currTestId = testId
    }
    get currTestId(){
        return this._currTestId
    }
    setCurrTaskId(taskId){
        this._currTaskId = taskId
    }
    get currTaskId(){
        return this._currTaskId
    }
    setTest(test){
        this._test = test
    }
    get test(){
        return this._test
    }
    setTask(task){
        this._task = task
    }
    get task(){
        return this._task
    }
    setAnswer(answer){
        this._answer = answer
    }
    get answer(){
        return this._answer
    }
}