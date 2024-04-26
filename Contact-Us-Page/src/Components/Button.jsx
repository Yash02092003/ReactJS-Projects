import React from 'react'
import styles from './Button.module.css'


function Button({ele , des , isOutLine = false , ...args}) {
    if(isOutLine){
        return <button className={`${styles.outline_btn}`} {...args}>
        {ele}
        {des}
        </button>
    }
    else{
        return <button className={`${styles.primary_btn}`}  {...args}>
        {ele}
        {des}
        </button>
    }
}

export default Button