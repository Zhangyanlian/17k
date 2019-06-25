




import ReactDOM,{render} from "react-dom";

const rootEle = document.getElementById("app");


import {Provider} from "react-redux";
import { IndexView } from "./view";
import store from "./store";


const hotRender = ()=>{
    render(
        <Provider store={store}>
            <IndexView/>
        </Provider>,
        rootEle
    )
}
hotRender();