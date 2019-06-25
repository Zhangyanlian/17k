


import "./index.scss";

export const foots=[
    {text:"书架",path:"/app/shujia",name:"home",icon:"icon-shujia"},
    {text:"书城",path:"/app/shucheng",name:"good",icon:"icon-icon_shuchengnor"},
    {text:"发现",path:"/app/find",name:"car",icon:"icon-faxian"},
    {text:"我的",path:"/app/mine",name:"mine",icon:"icon-wode"},
]


import {NavLink} from "react-router-dom";
import { List, Badge } from 'antd-mobile';

export class Foot extends Component{
    render(){
        return(
            <footer>
                {
                  foots.map((item,i)=>{
                      return(
                          <div key={i}>
                              <NavLink to={item.path} activeClassName="nav-active">
                                    <i className={"iconfont icon " + item.icon} ></i>
                                    <span>{item.text}</span>
                                    {i == 2 &&<Badge className="hot" text={10} style={{ marginLeft: 5 }} />}
                              </NavLink>
                          </div>
                      )
                  })  
                }
            </footer>
           
        )
    }
}