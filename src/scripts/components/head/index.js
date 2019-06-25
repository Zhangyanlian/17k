



import "./index.scss";
import {NavBar,Icon} from "antd-mobile";
export class Head extends Component{
    render(){
        const{
            title,
            show
        }= this.props;
        return(
            <NavBar
                mode="light"
                icon={<Icon type={show ? "left": ""} />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
                ]}
            >{title}</NavBar>
        )
    }
}