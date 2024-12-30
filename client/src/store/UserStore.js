import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._role = ''
        this._currUser = []
        this._users = [
            {id:1,fullName:"Власенко Данило", role:"Student"},
            {id:1,fullName:"Дробинко Дмитро", role:"Student"},
            {id:1,fullName:"Слюсар Сергій", role:"Student"},
            {id:1,fullName:"Коваленко Олена", role:"Teacher"},
            {id:1,fullName:"Сілагін Віталійович", role:"Teacher"}
        ]
        this._students = []
        this._teachers = []
        makeAutoObservable(this)
    }
    setUsers(users){
        this._users = users
    }
    get users(){
        return this._users
    }
    setCurrUser(currUser){
        this._currUser = currUser
    }
    get currUser(){
        return this._currUser
    }
    setStudents(students){
        this._students = students
    }
    get students(){
        return this._students
    }
    setTeachers(teachers){
        this._teachers = teachers
    }
    get teachers(){
        return this._teachers
    }


    setIsAuth(bool){
        this._isAuth = bool
    }
    get isAuth(){
        return this._isAuth
    }
    setRole(role){
        this._role = role
    }
    get role(){
        return this._role
    }
}