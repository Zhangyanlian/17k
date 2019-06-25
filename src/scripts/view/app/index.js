

import "./index.scss";
import {Switch,Route,Redirect} from "react-router-dom";
import { Foot } from "../../components/foot";
import { Shujia } from "../shujia";
import { Shucheng } from "../shucheng";
import { Find } from "../find";
import { Mine } from "../mine";
export class App extends Component{
    render(){
        return(
            <div>
                <Switch>

                    <Route path="/app/shujia" component={Shujia}/>
                    <Route path="/app/shucheng" component={Shucheng}/>
                    <Route path="/app/find" component={Find}/>
                    <Route path="/app/mine" component={Mine}/>
                    <Route 
                        render={
                            ()=>(<Redirect to="/app/shujia"/>)
                        }
                    />
                </Switch>
                <Foot/>
            </div>
        )
    }
}