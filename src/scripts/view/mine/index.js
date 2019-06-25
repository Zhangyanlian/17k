



import "./index.scss";
import {Card,Icon} from "antd-mobile";
import img from "@/assets/images/beijing.jpg";
import touxiang from "@/assets/images/boy.png";
export class Mine extends Component{
    state ={
        personals:[
            {text:"我的账户",icon:"icon-wodezhanghu"},
            {text:"我的VIP",icon:"icon-vip"},
            {text:"我的消息",icon:"icon-wodexiaoxi"},
            {text:"任务中心",icon:"icon-renwu"},
            {text:"兑换中心",icon:"icon-duihuan"},
            {text:"浏览历史",icon:"icon-chakanlishijilu"},
            {text:"我的设置",icon:"icon-set"},
            {text:"在线客服",icon:"icon-kefu"},
        ],

    }
    render(){
        const{
            personals
        }=this.state;
        return(
            <div>
             <div style={sectionStyle}>
                 <div className="top">
                     <img src={touxiang}></img>
                     <div>
                         <h2>XXX</h2>
                         <p>编辑个人资料</p>
                    </div>  
                 </div>
             </div>
             {
                 personals.map((p,i)=>{
                     return(
                        <Card.Header
                        key={i}
                        title={p.text}
                        thumb={<i className = {"iconfont icon " + p.icon}></i>}
                        extra={<Icon type="right"></Icon>}
                    />
                     )
                 })
             }
                   

            
            </div>
        )
    }
}
var sectionStyle = {
    width: "100%",
    height: "188px",
    border: "1px solid #000",
  // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${img})` ,
    backgroundSize: "100%",
    
  };