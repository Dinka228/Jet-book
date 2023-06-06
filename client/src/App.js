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
const App =()=> {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
  const {user} = useContext(Context)
  const {book} = useContext(Context)
  const [loading,setLoading]=useState(true)
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     check().then(data=>{
  //       user.setCurrentUser(data)
  //       fetchOneTask(user.currUser.id).then(data=>calendar.setTasks(data))
  //       console.log(user.users)
  //       user.setIsAuth(true)
  //     }).finally(()=>setLoading(false))
  //   },2000)
  //
  // },[])
  // if(loading){
  //   return <Spinner animation={"grow"}/>
  // }
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
