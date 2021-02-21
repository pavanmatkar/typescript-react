import React from "react";
export function Second(props:any){
    return(
        <React.Fragment>
            <h1>{props.key1}</h1>
            <h1>{props.key2}</h1>
            <h1>{props.key3}</h1>
            {[10,20,30,40,50].map((el:any)=>(
                <h1>{el}</h1>
            ))}
        </React.Fragment>
    )
};