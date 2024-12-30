import {
    LOGIN_ROUTE, MAIN_ROUTE, BOOK_ROUTE,EDITOR_ROUTE
} from "./utils/consts";
import Main from "./page/Main";
import Book from "./page/Book";
import Auth from "./page/Auth";
import Editor from "./page/Editor";

export const authRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: BOOK_ROUTE,
        Component: Book
    },
    {
        path: EDITOR_ROUTE,
        Component: Editor
    }
]
export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: BOOK_ROUTE,
        Component: Book
    },
    {
        path: EDITOR_ROUTE,
        Component: Editor
    }
]