import React, { Component } from 'react';
// ordinary importing of styles
import './styles/myStyles.css';
// modular importing of styles
import styles from './styles/myStyles.module.css'
// inline styles
const myStyle = {
    fontSize: '50px'
}

export class StyleComponent extends Component {
    render() {
        // conditionally rendering classes 
        const headSize = true ? 'headingBorder' : null;
        // const background = true ? 'backGrnd' : null;

        return (
            <div className={`${headSize} backGrnd ${styles.moduleCss}`}>StyleComponent</div>
        )
    }
}

export default StyleComponent