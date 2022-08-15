import  React, { ReactNode } from 'react';

interface props{
    onClick:()=>void,
    className?: string
    children: ReactNode
    style?: style
}
interface style{
    backgroundColor: string
    height?: string
    width?: string
}

const Button:React.FC<props>  = (props) =>{
    return (
        <button onClick={props.onClick} className={props.className} style={props.style}>{props.children}</button>
    );
}

export default Button;