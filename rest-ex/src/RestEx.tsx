import React from "react";
import axios from "axios";
interface IState{
    res:any;
}
interface IProps{}
class RestEx extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            res:{}
        }
    };
    componentDidMount(){
        axios.get(`https://www.w3schools.com/angular/customers.php`).then((posRes)=>{
            const {data} = posRes;
            this.setState({
                res : data
            })
        },(errRes)=>{
            console.log( errRes );
        })
    };
    render(){
        return(
            <React.Fragment>
                {JSON.stringify( this.state.res )}
            </React.Fragment>
        )
    }
};

export default RestEx;

