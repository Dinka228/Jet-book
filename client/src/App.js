import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";
import AppRouter from "./component/AppRouter";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {Spinner} from "react-bootstrap";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {check, fetchAllStudents, fetchAllTeachers} from "./http/userAPI";
import {fetchMySubject} from "./http/subjectAPI";
import {fetchCatalog} from "./http/catalogAPI";
const App =()=> {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
  const {user} = useContext(Context)
  const {book} = useContext(Context)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
      check().then(data=>{
        user.setCurrUser(data)
        user.setIsAuth(true)
          fetchCatalog(user.currUser.id).then(data=>{
              book.setCatalog(data)})
          fetchMySubject(user.currUser.speciality).then(data=>{
              book.setSubject(data)})
          if(user.currUser.role === 'Student'){
              fetchAllTeachers().then(data=>{
                  user.setTeachers(data)
                  console.log(user.teachers)
              })
          }
          else if(user.currUser.role === 'Teacher'){
              fetchAllStudents().then(data=>user.setStudents(data))
          }
      })
  },[])
  return (
      <BrowserRouter>
        <div>
          <NavBar />
          <AppRouter />
        </div>

      </BrowserRouter>
  );
}

export default App;
