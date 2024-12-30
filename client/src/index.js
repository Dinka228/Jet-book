import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookStore from "./store/BookStore";
import TestStore from "./store/TestStore";
export const Context = createContext(null)
document.querySelectorAll(" p * div ")
ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            book:new BookStore(),
            test:new TestStore(),
        }
    }>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
