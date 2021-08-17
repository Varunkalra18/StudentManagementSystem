import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./Component/Login/Login";
import AddStudent from "./Component/AddStudent/AddStudent";
import Home from "./Component/Home/Home";
import UpdateProfile from "./Component/UpdateProfile/UpdateProfile";
import UpdateStudentInfo from "./Component/UpdateStudentInfo/UpdateStudentInfo";
import ViewProfile from "./Component/ViewProfile/ViewProfile";
import ViewStudentinfo from "./Component/ViewStudentinfo/ViewStudentinfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={() => <Redirect to="/" />} />
        <Route path="/addstudent" exact component={AddStudent} />
        <Route path="/home" exact component={Home} />
        <Route path="/updateprofile" exact component={UpdateProfile} />
        <Route path="/updatestuprofile" exact component={UpdateStudentInfo} />
        <Route path="/viewprofile" exact component={ViewProfile} />
        <Route path="/viewstuprofile" exact component={ViewStudentinfo} />
      </Switch>
    </Router>
  );
}

export default App;

// <Login />
// <AddStudent />
//       <Home />
//       <UpdateProfile />
//       <UpdateStudentInfo />
//       <ViewProfile />
//       <ViewStudentinfo />
