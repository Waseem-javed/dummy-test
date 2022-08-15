import  React, { ReactNode } from 'react';

interface props{
    className?: string
    children: ReactNode
    style?: style
}
interface style{
    backgroundColor: string
    height?: string
    width?: string
}

const Card:React.FC<props>  = (props) =>{
    return (
        <div className={props.className} style={props.style}>{props.children}</div>
    );
}

export default Card;