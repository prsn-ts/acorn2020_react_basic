import { Checkbox, FormControlLabel, FormGroup, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React from 'react';
//JSX를 리턴하기위해서는 React 임포트 해야한다.

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export default function App08_Example(){
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
          <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChange}
                name="checkedF"
                indeterminate
              />
            }
            label="Indeterminate"
          />
          <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Custom color"
          />
        </FormGroup>
    );
};

/*
함수 기반 컴포넌트 만들기 1()

const App08_Example=()=>{

    return(
        <div>

        </div>
    )
};

export default App08_Example;
*/

/*
함수 기반 컴포넌트 만들기 2(익명 함수)

export default ()=>{

    return(
        //JSX를 리턴하기위해서는 React를 임포트해야한다.
        <div>

        </div>
    )
};
*/