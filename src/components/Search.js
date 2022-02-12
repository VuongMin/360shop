import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { InputGroup, FormControl ,ListGroup} from 'react-bootstrap'
import { useStateValue } from '../store/StateProvider'

export const Search = ({ type }) => {
    const [{ products }, dispatch] = useStateValue()
    const [productsSearch, setproductsSearch] = useState([])
    const handelSearch = (text) => {
        const results = products.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
       
        text==''?setproductsSearch([]): setproductsSearch(results)
    }
    const handelOnclick = (item)=>{
        dispatch({type:'SET_SELECT_PRODUCT',data:item})
        setproductsSearch([])
    }
    return (
        <div className={type ? 'search__component vertical' : "search__component"}>
            <InputGroup >
                <FormControl
                    placeholder="Tìm kiếm sản phẩm ..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => handelSearch(e.target.value)}
                />
                <InputGroup.Text id="basic-addon1">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></InputGroup.Text>

            </InputGroup>
            <ListGroup>
               {
                   productsSearch?.map(item=>
                   <ListGroup.Item key={item.id} className='py-3' 
                   onClick={()=>handelOnclick(item)}
                   >
                            <Link to={`/cua-hang/${item.permalink}`}>{item.name}</Link>
                   </ListGroup.Item> )
               }
               
            </ListGroup>
        </div>
    )
}
