import React from 'react';
import Card from '../../../components/bootstrap/card/Card';
import Button from '../../../components/bootstrap/button/Button';

interface Props{
    item:Record<string,unknown|undefined>,
    items:Array<Record<string,string>>
    setItems([]):void
}

const ProductItem:React.FC<Props> = (props) =>{
    const {id,name,image,category,brand,size,price,year} = props.item as Record<string,string>;

    const deleteItem = (id:string) =>{
       const updateItems = (props.items as Array<Record<string,string>>).filter((item:Record<string,string>)=>item.id !== id)
       props.setItems(updateItems);
    }
    

    return (
       <Card className='card border shadow-sm' style={{width:'300px',backgroundColor:'dodgerblue'}}>
           <>
           <Button onClick={()=>deleteItem(id)} className='btn btn-sm rounded btn-danger position-absolute m-2'>x</Button>
           <img src={image} height="220" className="card-img-top" alt={name} />
           <div className="card-body py-2 px-2 m-0 p-0 d-flex justify-content-between">
            <div className="card-title text-white font-weight-bold">{name}</div>
            <div className="subtitle text-white font-weight-bold">{brand}</div>
           </div>
           <div className="card-footer text-white">
                <span>Category:{category}</span>&nbsp;,
                <span>Size:{size}</span><br/>
                <span>Price:{price}</span>&nbsp;,
                <span>Year:{year}</span>
            </div>
            </>
       </Card>
    )
}

export default ProductItem;