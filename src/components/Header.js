import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useStateValue } from '../store/StateProvider'
import { Menu } from './Menu'
import { Search } from './Search'
import { SideNavSmall } from './SideNavSmall'
import { Button } from '../components/Button'

export const Header = () => {
    const [fixedHeader, setfixedHeader] = useState(false)
    const [show, setshow] = useState(false)
    const [{ carts }, dispatch] = useStateValue()
    const [toggelMobile, settoggelMobile] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setfixedHeader(true) : setfixedHeader(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    const handelDeleteItemCart = (item) => {
        dispatch({
            type: 'REMOVE_ITEM_CART',
            data: item
        })
    }
    return (
        <div className={`header ${fixedHeader ? 'header__fixed' : ''}`}>
            <Container fluid className='mobile-reverse'>
                <div className='header__top'>
                    <Row className='align-items-center'>
                        <Col md={3} className='col-3'>
                            <Link to={'/'}>  <img alt='' src='https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png' /></Link>
                        </Col>
                        <Col md={6} className='col-3'>
                            <Search />
                        </Col>
                        <Col md={3} className='col-6'>
                            <div className='header__tools'>
                                <div className='header__tools__user'>
                                    <Link to={'/account'}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg></Link>
                                </div>
                                <div className='header__tools__search'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <div className='header__tools__carts'
                                    onClick={() => setshow(true)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
                                        <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                                    </svg>
                                    <span style={{ padding: '0 1px' }}>   {carts.length}</span>
                                    <SideNavSmall
                                        title={'Giỏ hàng'}
                                        show={show}
                                    >
                                        {
                                            carts.length > 0 ?
                                                <div className='navbar__cart'>
                                                    {
                                                        carts.map((item, idx) => {

                                                            return (
                                                                <div className='navbar__cart__group'>
                                                                    <div className='navbar__cart__thumb'>
                                                                        <img src={item.image.url} />
                                                                    </div>
                                                                    <div className='navbar__cart__body'>
                                                                        <h3>{item.name}</h3>
                                                                        <div className='navbar__cart__content'>
                                                                            <p>{item.price.formatted_with_code}</p>
                                                                            <p>{item.qty}</p>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16"
                                                                                onClick={() => handelDeleteItemCart(item)}
                                                                            >
                                                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                                            </svg>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    <div className='navbar__cart__footer'>
                                                        <Link to={'/gio-hang'}
                                                        >
                                                            <Button
                                                                text={'Xem giỏ hàng'}
                                                                iconsvg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                                                                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                                                                </svg>}

                                                            ></Button>
                                                        </Link>
                                                        <Link to={'/thanh-toan'}>
                                                            <Button
                                                                text={'Thanh toán'}
                                                                iconsvg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
                                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z" />
                                                                </svg>}

                                                            ></Button>
                                                        </Link>
                                                    </div>
                                                </div> :
                                                <div className="alert alert-warning py-3" role="alert">
                                                    Your cart is empty !!!!
                                                </div>
                                        }
                                    </SideNavSmall>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='header__bottom'>
                    <Container>
                        <Row>
                            <Col>
                                <div className={`${toggelMobile?'mobile-tools active':'mobile-tools'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"
                                    onClick={()=>settoggelMobile(pre=>!pre)}
                                    >
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg></div>
                                <Menu />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            {/* OVERLAY */}
            {
                show ? <div className='overlay'
                    onClick={() => setshow(false)}
                ></div> : null
            }
        </div>
    )
}
