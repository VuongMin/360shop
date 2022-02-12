import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useStateValue } from '../store/StateProvider'
import '@splidejs/splide/dist/css/splide.min.css';
import { Button } from '../components/Button';
import { Section, SectionBody, SectionTitle } from '../components/Section'
import { Product } from '../components/Product'
import { useNavigate } from 'react-router-dom';
export const ProductDetails = () => {
    const [{ productDetails, products }, dispatch] = useStateValue()
    const [size, setsize] = useState('')
    const [color, setcolor] = useState('')
    const [qty, setqty] = useState(1)
    const navigate = useNavigate()
    //because product details has attr related product return not full like to product detail => use state
    const [relatedProducts, setrelatedProducts] = useState([])
    useEffect(() => {
        const reuslt = []
        products.forEach(e1 => {
            productDetails.related_products.forEach(e2 => {
                if (e1.permalink == e2.permalink) {
                    reuslt.push(e1)
                }
            });
        });
        setrelatedProducts(reuslt)
        return () => {

        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {

        }
    })
    //EMPTY RELATE PRODUCT
    const EmtyProducts = () => {
        return <Container>
            <Row>
                <Col className='d-flex p-2 align-items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-lightning-rain" viewBox="0 0 16 16">
                        <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z" />
                    </svg>
                    <h4 className='alert alert-danger' style={{ margin: '0 5px' }}>Your relate products is empty!!</h4>
                </Col>
            </Row>
        </Container>
    }
    //func handle logic
    const handlerChangeMainImage = (url) => {
        document.querySelector('.Product__details__main__image img').src = url
    }
    const handelGetVariant = (e) => {
        console.log();
        const [name, value] = e.getAttribute('data-value').split('_')
        if (name == 'size') {
            setsize(value)
        } else if (name == 'color') {
            setcolor(value)
        }
    }
    const handelDescrease = () => {
        if (qty > 1) {
            setqty(pre => pre - 1)
        }
    }
    const handelInscrease = () => {
        setqty(pre => pre + 1)
    }
    const handelConfirm  = (e)=>{
       if(size==''){
           alert('Please select product size !!')
       }else if(color==''){
           alert('Please select product color !!')
       }else{
        dispatch({
            type:'ADD_TO_CART',
            data:{...productDetails,qty,size,color}
        })
        navigate('/gio-hang')
       }
       
    }

    return (
        <div className='Product__details'>
            <Container>
                <BreadCrumb content={{ cat: productDetails.categories, name: productDetails.name }} />
            </Container>
            <Container>
                <Row className='my-4'>
                    <Col md={6}>
                        <div className='Product__details__thumbs'>
                            <div className='Product__details__list__image'>
                                <Splide
                                    options={{
                                        rewind: true,
                                        direction: 'ttb',
                                        height: 'calc((100vh - 180px))',
                                        type: 'loop',
                                        focus: 'center',
                                        autoWidth: true,
                                        perPage: 5,
                                        pagination: false,
                                        gap: 5
                                    }}

                                >

                                    {
                                        productDetails.assets.map(item => {
                                            return <SplideSlide key={item.id}
                                            onClick={() => handlerChangeMainImage(item.url)}
                                            >
                                                <img src={item.url} alt="Image 1"
                                                   
                                                />
                                            </SplideSlide>
                                        })
                                    }
                                </Splide>
                                {

                                }
                            </div>
                            <div className='Product__details__main__image'>
                                {
                                    productDetails.assets.map(item => {
                                        return <img
                                            key={item.id}
                                            src={item.url} />
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='Product__details__body' style={{ position: 'sticky', top: '155px' }}>
                            <h3>{productDetails.name}</h3>
                            <h4 style={{ color: 'red', letterSpacing: '.4rem', borderBottom: '1px solid #8080804d', padding: '10px 0', fontWeight: 'bold' }}>{productDetails.price.formatted_with_code}</h4>
                            {
                                productDetails.variant_groups.map(item => {
                                    return <div className='Product__details__variant'
                                        key={item.id}
                                    >
                                        <b>{item.name}</b>
                                        <div className='Product__details__options'>
                                            {
                                                item.options.map(option => {

                                                    const active = option.name == size || option.name == color
                                                    return <span
                                                        data-value={`${item.name}_${option.name}`}
                                                        className=
                                                        {`${active ? 'active' : ''}`}
                                                        key={option.id}
                                                        onClick={(e) => handelGetVariant(e.target)}
                                                    >{option.name}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                            }
                            <div className='Product__details__qty'>
                                <span
                                    onClick={() => handelDescrease()}
                                >-</span>
                                <b>{qty}</b>
                                <span
                                    onClick={() => handelInscrease()}
                                >+</span>
                            </div>
                            <Button
                                iconsvg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>}
                                text={'Thêm giỏ hàng'}
                                link={'/gio-hang'}
                                click={handelConfirm}
                            />
                            <div className='Product__details__descriptions'
                                dangerouslySetInnerHTML={{ __html: productDetails.description }}
                            >
                             
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Section>
                    <SectionTitle children={'SẢN PHẨM LIÊN QUAN'}></SectionTitle>
                    <SectionBody>

                        <Row>

                            {
                                relatedProducts?.length > 0 ?
                                    relatedProducts?.map(product => {
                                        return (
                                            <Col md={3} key={product.id}>
                                                <Product product={product}></Product>
                                            </Col>)

                                    }) : <EmtyProducts />
                            }

                        </Row>

                    </SectionBody>
                </Section>
            </Container>
        </div>
    )
}
