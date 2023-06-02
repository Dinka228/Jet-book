import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._isAuth = false
        this._role = ''
        makeAutoObservable(this)
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