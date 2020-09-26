import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';

export default ()=>{
    return (
        <Fragment>
            <h1>Material Ui 사용해 보기</h1>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Button variant="contained" color="secondary">
                Hello World
            </Button>
            <Button variant="contained" color="default">
                Hello World
            </Button>
            <Button variant="text" color="primary">
                Hello World
            </Button>
        </Fragment>
    );
};