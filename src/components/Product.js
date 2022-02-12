import React from 'react'
import { Link } from 'react-router-dom';
import {useStateValue} from '../store/StateProvider'
export const Product = ({product}) => {
    const [ {},dispatch] =  useStateValue()
    const handelSelectProduct = ()=>{
       dispatch({
           type:'SET_SELECT_PRODUCT',
           data:product
       })
    }

    return (
        <div className='product'>
            <div className='product__thumb'
            onClick={()=>handelSelectProduct()}
            >
               <Link to={`/cua-hang/${product.permalink}`}> <img className='main__img' src={product.image.url} /></Link>
                <div className='list__img'>
                {
                    product.assets?.map(item=><img key={item.id} src={item.url}/>)
                }
                </div>
            </div>
            <div className='product__content'>
                   <h3>{product.name}</h3>
                   <p>{product.price.formatted_with_symbol}</p>
            </div>
        </div>
    )
}
