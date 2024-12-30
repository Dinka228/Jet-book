import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._themes = []
        this._chapterContent = []
        this._currBook = []
        this._currChapter = []
        this._subject = []
        this._chapter = []
        this._catalog = []
        this._glossary = []
        this._notes = [
            {id:1,title:"Розділ 1",text:"Типи массивів JavaScript: ....",creatorName:""},
            {id:2,title:"15 сторінка",text:"Типи циклів у Javascript: ...", creatorName:""},
            {id:3,title:"",text:"",creatorName:""},
            {id:4,title:"",text:"",creatorName:""},
        ]
        this._plan = []
        this._html = ''
        this._authVisible = true
        this._selectBook = false
        this._selectChapter = false
        this._selectGlos = false
        this._selectNotes = false
        this._noteVisible = false
        makeAutoObservable(this)
    }
    setNoteVisible(note){
        this._noteVisible = note
    }
    get noteVisible(){
        return this._noteVisible
    }
    setNotes(note){
        this._notes = note
    }
    get notes(){
        return this._notes
    }
    setSelectNotes(note){
        this._selectNotes = note
    }
    get selectNotes(){
        return this._selectNotes
    }
    setGlossary(glossary){
        this._glossary = glossary
    }
    get glossary(){
        return this._glossary
    }
    setChapterContent(chapterContent){
        this._chapterContent = chapterContent
    }
    get chapterContent(){
        return this._chapterContent
    }
    setHtml(html){
        this._html = html
    }
    get html(){
        return this._html
    }
    setCurrChapter(currChapter){
        this._currChapter = currChapter
    }
    get currChapter(){
        return this._currChapter
    }
    setSelectChapter(selectChapter){
        this._selectChapter = selectChapter
    }
    get selectChapter(){
        return this._selectChapter
    }
    setSelectGlos(selectGlos){
        this._selectGlos = selectGlos
    }
    get selectGlos(){
        return this._selectGlos
    }
    setPlan(plan){
        this._plan = plan
    }
    get plan(){
        return this._plan
    }
    setCatalog(catalog){
        this._catalog = catalog
    }
    get catalog(){
        return this._catalog
    }
    setSelectBook(selectBook){
        this._selectBook = selectBook
    }
    get selectBook(){
        return this._selectBook
    }
    setSubject(subject){
        this._subject = subject
    }
    get subject(){
        return this._subject
    }
    setAuthVisible(authVisible){
        this._authVisible = authVisible
    }
    get authVisible(){
        return this._authVisible
    }
    setChapter(chapter){
        this._chapter = chapter
    }
    get chapter(){
        return this._chapter
    }
    setThemes(themes){
        this._themes = themes
    }
    get themes(){
        return this._themes
    }
    setCurrBook(currBook){
        this._currBook = currBook
    }
    get currBook(){
        return this._currBook
    }
}