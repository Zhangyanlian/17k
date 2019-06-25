


import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import store from "../store";
import { App } from "./app";
import { Guilde } from "./guide";
import { Login } from "./login";


export class IndexView extends Component{
 
    render(){
        const state = store.getState();
        return(
            <Router>
                <div id="main">
                    <Route path="" exact component={Layout}  />
                </div>
            </Router>
        )
    }
}


export class Layout extends Component{
   
    render(){
        const state = store.getState();
        console.log(state);
        return(
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/guilde"/>)}/>
                <Route path="/app" component={App}/>
                <Route path="/guilde" component={Guilde}/>
                <Route path="/login" component={Login}/>
            </Switch>
        )
    }
}



