import React from "react";
import { Typography } from '@material-ui/core';
export function TypographyEx(){
    return(
        <React.Fragment>
            <Typography variant="h1" color="primary">
                Welcome to functional component in ReactJS !!!
            </Typography>
            <Typography variant="h6" align="center" color="secondary">
                ReactJS
            </Typography>
        </React.Fragment>
    );
};