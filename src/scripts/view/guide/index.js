




import "./index.scss";
import {Carousel} from "antd-mobile";
import {Link} from "react-router-dom";
export class Guilde extends Component{
    state = {
        imgs:[
            require("@/assets/images/guide1.jpg"),
            require("@/assets/images/guide2.jpg")
        ]
    }
    render(){
        return(
            <div>  
                <Carousel
                    autoplay={false}
                    infinite
                    >
                {
                    this.state.imgs.map((img,i)=>{
                        return(
                        <Link to="/app" key={i}
                            style={{display:"inline-block" , width: '100%', height:"100%"}}>
                            <img src={img} 
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',height:"100%"}}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                }}
                            
                        />
                        </Link>
                        )
                    })
                }
                </Carousel>
            </div>
        )
    }
} 