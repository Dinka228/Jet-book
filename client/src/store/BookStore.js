import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._themes = [{id:1,name:'Book1',creator:"Teacher1"},
            {id:2,name:'Book2',creator:"Teacher2"},
            {id:3,name:'Book3',creator:"Teacher3"},
            {id:4,name:'Book4',creator:"Teacher4"},
            {id:5,name:'Book5',creator:"Teacher5"},
        ]
        makeAutoObservable(this)
    }
    setThemes(themes){
        this._themes = themes
    }
    get themes(){
        return this._themes
    }
}