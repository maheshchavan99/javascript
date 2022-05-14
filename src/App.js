// import logo from "./logo.svg";
import { memo } from "react";
import "./App.css"
import CountOne from "./errorss/CountOne";
import Error from "./errorss/Error";
import WithCount from "./Hoc/ComponentG";
import ComponentM from "./Hoc/ComponentG";
import ComponentG from "./Hoc/ComponentG";
import Counter from "./Hoc/Counter";
import Countertwo from "./Hoc/Countertwo";
import ComponetF from "./reduce/ComponetF";
import Memo from "./reduce/Memo";
import Fetch from "./route/Fetch";
// import { BrowserRouter as Router,Link, Route} from "react-router-dom";
// import Register from "./route/ComponentD";
// import Login from "./route/ComponentC";
// import Fetch from "./route/Fetch";


function App() {
  return (
    <div className="App">
    <h1>Hello</h1>
    
   {/* <Router>
     <Link to="/login">Login</Link>
     <Link to="/register">Register</Link>
     <div>
     <Route path='/login' component={Login}></Route>
     <Route path='/register' component={Register}></Route>
     </div>

     </Router>*/}
<Memo/>
    </div>
  );
}

export default App;
