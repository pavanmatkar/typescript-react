import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    "my_img":{
        width:100,
        height:100
    }
});

export default function BodyEx(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <Avatar alt="AC Image" src="./src/ac_ya_big-series.png" variant="square" className={classes.my_img}/>
            <Avatar alt="Blue Star AC" src="ac-image-red.jpg" variant="square" className={classes.my_img}/>
            <Avatar alt="Red AC" src="product-split-ac.png" variant="square" className={classes.my_img}/>
        </React.Fragment>
    )
};