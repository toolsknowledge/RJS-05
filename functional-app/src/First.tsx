/*
    import React from "react";

    type IProps = {
        arg1 : any;
        arg2 : any;
    };

    const First = ({arg1,arg2}:IProps)=> (
        <h1>{arg1}....{arg2}</h1>
    )

    export default First;
*/



/*
    import React, { FunctionComponent } from "react";

    type IProps = {
        name : string,
        price? : number
    };

    const First:FunctionComponent<IProps> = ({name,price})=>(
        <React.Fragment>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </React.Fragment>
    )

    export default First;
*/


import React, { useState } from "react";

const First = ()=>{

    const [name,setName] = useState("ReactJS")

    const myFun = ()=>{
        setName("ReactJS With TypeScript");
    };

    return(
        <React.Fragment>
            <h1>{name}</h1>
            <button onClick={myFun}>Change</button>
        </React.Fragment>
    )
};

export default First;










































