import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  export default ()=>{
    return (
        <div>
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
            <div className="root">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};
