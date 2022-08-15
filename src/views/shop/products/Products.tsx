import React,{useState} from 'react';
import { DATA } from '../../../shared/data';
import ProductItem from './ProductItem';

const Products:React.FC = () =>{

    const [items,setItems] = useState(DATA);

    return (
       <div className="row">
            <div className="col-sm-2">
                dropdown
            </div>
            <div className="col-sm-10 card-columns card-decks">
            {
                (items as Array<Record<string,string>>).map((item:Record<string,string>) => <ProductItem item={item as Record<string,unknown>} items={items} setItems={setItems}/>)
            }
            </div>
       </div>
    )
}

export default Products;