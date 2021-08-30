import  React  from 'react';
import * as styles from './loader.module.scss'

export default function Loader(props){
    
    return (
        <div className={`${styles.loader} mt-4 ${props.className}`}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}