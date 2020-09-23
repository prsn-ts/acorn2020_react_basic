import React, { Component } from 'react';
import styles from '../my_css/mycom_custom.module.css';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h2>MyComponent 입니다.</h2>
                <div className={styles.box}></div>
            </div>
        );
    }
}

export default MyComponent;