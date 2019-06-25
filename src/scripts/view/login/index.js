


import "./index.scss";
import {InputItem, Button} from "antd-mobile";
import { Head } from "../../components/head";



export const mobileReg = /^1(3|5|7|8|9)\d{9}$/;
export const codeReg  = /^\d{4}$/;

import axios from "@/utils/axios";


let timer = null;


export class Login extends Component{
    state = {
        toggle:true,
        mobileDis:true,
        flag:true,
        count:60,
        txt:"获取验证码"
    }
    changemobile =(mobile)=>{
        console.log(mobile);
        if(this.state.flag){
            this.setState({
             mobileDis:!mobileReg.test(mobile)
            })
           
        }
     
    }
  

    startTime=()=>{
        timer= setInterval(()=>{
            if(this.state.count>0){
                this.setState({
                    count:--this.state.count,
                    txt:this.state.count + "s后继续"
                })
            }else{
                clearInterval(timer);
                timer=null;
                this.setState({
                    txt:"获取验证码",
                    mobileDis:true,
                    count:60
                })

            }
        },1000)
    }
    getCode=()=>{
        axios.post("/myreact/gainCode",{
            mobile:this.refs.tel.state.value
        }).then(res=>{
            console.log(res)
        })
        this.startTime();
        this.setState({
            mobileDis:true
        })
    }
    changeCode=(val)=>{
        var tel = this.refs.tel.state.value;
        this.setState({
            toggle:!(codeReg.test(val)&&mobileReg.test(tel))
        })
       
    }


    goLogin=()=>{
        var tel = this.refs.tel.state.value;
        var code = this.refs.code.state.value;
        axios.post("/myreact/login",{
            mobile:tel,
            code
        }).then(res=>{
            console.log(res)
            if(!!res.data.type){
                this.props.history.push("/app/shujia");
                sessionStorage.userInfo = res.data.username
            }else{
                delete sessionStorage["userInfo"]
            }
           
        })

    }
    render(){
        
        const {
            toggle,
            mobileDis,
            txt
        }=this.state
        console.log(mobileDis)
        return(
            <div>
                <Head title="login" show={true}></Head>
                    
                    <InputItem
                        type="mobile"
                        placeholder="请输入常用手机号"
                        onChange={this.changemobile}
                        ref="tel"
                        >手机号码</InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入验证码"
                        ref="code"
                        onChange={this.changeCode}
                        >验证码</InputItem>
                        <Button className="l-btn" 
                        type="warning" 
                        inline size="small"
                        disabled={mobileDis}
                        onClick={this.getCode}
                        >{txt}</Button>
                    <Button type="primary" disabled={toggle} onClick={this.goLogin}>快速登陆</Button>
            </div>
        )
    }
}