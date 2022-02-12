import React from 'react'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Section, SectionBody } from '../components/Section'
import { useStateValue } from '../store/StateProvider'

export const Cart = () => {
    const [{ carts }, dispatch] = useStateValue()
    const total = carts.reduce((value, current) => value + current.price.raw * current.qty, 0)
    const handelDeleteItemCart = (item) => {
        dispatch({
            type: 'REMOVE_ITEM_CART',
            data: item
        })
    }
    return (
        <div className='cart__page'>
            <Container>
                <Section>
                    <SectionBody>
                        <Row>
                            <Col md={8}>
                                <Table responsive="md">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tạm tính</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            carts.length > 0 ?
                                                carts.map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td align='center'>
                                                                <span className='cart__page__del' style={{ margin: '0 10px', cursor: 'pointer' }}
                                                                    onClick={() => handelDeleteItemCart(item)}
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                                                    </svg>
                                                                </span>
                                                                <img style={{ maxWidth: '40px' }} src={item.image.url}></img>
                                                            </td>
                                                            <td align='center'>{item.name}</td>
                                                            <td align='center'>{item.price.formatted_with_symbol}</td>
                                                            <td align='center'>{item.qty}</td>
                                                            <td align='center'>{`${item.qty * item.price.raw}.00 USD`}</td>
                                                        </tr>
                                                    )
                                                }) : <div class="alert alert-danger my-4" role="alert">
                                                    This cart is empty !!!
                                                </div>
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={4} >
                                <div style={{ background: 'darkgrey inset 2px 0px 20px 7px ', padding: '20px 0' }}>
                                    <h4 style={{ textAlign: 'center' }}>Thành Tiền</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '5px 0', }}>
                                        <b>Tạm Tính :</b>
                                        <span style={{ color: 'red' }}>{`${total}.00 USD`}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '5px 0', }}>
                                        <b>Phí ship :</b>
                                        <span style={{ color: 'red' }}>{`${total}.00 USD`}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '5px 0', }}>
                                        <b>Thanh Toán</b>
                                        <Link to={'/thanh-toan'}>
                                            <Button variant="primary">Thanh Toán</Button>
                                        </Link>

                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </SectionBody>
                </Section>
            </Container>
        </div>
    )
}
