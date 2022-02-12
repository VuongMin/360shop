import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Commerce from '@chec/commerce.js';


export const Menu = () => {
    const commerce = new Commerce('pk_test_34952d4dcaee58b76216b5da141bef9d07e04e4a194d8');
    const [listCategory, setlistCategory] = useState([])
    useEffect(() => {
        commerce.categories.list().then((category) => {
            if(category){
                setlistCategory(category.data)
            }
        });
        return () => {
     
        }
    }, [])

    const menus = [
        { slug:'thu-dong-moi',id: 0, name: "Thu đông mới" },
        { slug:'gioi-thieu',id: 1, name: "Giới thiệu" },
        { slug:'san-pham',id: 2, name: "Sản phẩm" },
        { slug:'khuyen-mai',id: 3, name: "Khuyễn mãi" },
        { slug:'tin-tuc',id: 4, name: "Tin tức" },
        { slug:'tuyen-dung',id: 5, name: "Tuyển dụng" },
        { slug:'he-thong-cua-hang',id: 6, name: "Hệ thống của hàng" },
    ]
    const SubListMenu = ({list})=>{
        return (
            <div className='sub__list'>
                    {
                        list.map((item,idx)=>{
                            return <div className='sub__list__item'
                             key={idx}
                            >
                                  <Link to={`/cua-hang/${item.slug}`}>{item.name}</Link>
                                 <div className='sub__list__small'>
                                    {
                                        item.children?.map((e,idx)=>{
                                            return  <Link key={idx} to={`/cua-hang/${e.slug}`}>{e.name}</Link>
                                        })
                                    }
                                 </div>
                            </div>
                        })
                    }
            </div>
        )
    }
    return (
        <div className='list__menu'>
                                    {
                                        menus.map(item => {
                                            return <div className='list__menu__item' key={item.id}>
                                                <Link to={ `/${item.slug}`}>{item.name}</Link>
                                                  {
                                                      item.slug =='san-pham'?<SubListMenu list={listCategory}/> :null
                                                  }
                                            </div>
                                        })
                                    }

                                </div>
    )
}
