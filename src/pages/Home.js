import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Product } from '../components/Product'
import { Section, SectionBody, SectionTitle } from '../components/Section'
import { Slider } from '../components/Slider'
import { useStateValue } from '../store/StateProvider'
import Pagination from 'react-bootstrap/Pagination'
export const Home = () => {
    const [{ products }, dispatch] = useStateValue()
    const [pageNumber, setPageNumber] = useState(1)
    const [productsShow, setproductsShow] = useState([])

 
    //handel get products when user click panagition number
    const handelGetNumberCustomOfProducts = (number) => {
        setproductsShow(products.slice((number * 8) - 8, number * 8))
    }
    //handel get products when user click next or previous
    const handleGetProductsOfPanagationWithArrow = (type)=>{
        if(type=='pre'){

        }else{

        }
    }
       useEffect(() => {
        setproductsShow(products.slice(0, 8))
        setPageNumber(Number.parseInt(products.length / 8))

    }, [pageNumber])
 
    return (
        <div className='home'>
            <Slider />
            <Container>
                <Section>
                    <SectionTitle>
                        SẢN PHẨM BÁN CHẠY
                    </SectionTitle>
                    <SectionBody>
                        <Row>

                            {
                                productsShow?.map(product => {
                                    return (
                                        <Col md={3}
                                            key={product.id}>
                                            <Product product={product}></Product>
                                        </Col>)

                                })
                            }
                            <Pagination className='justify-content-center my-3'
                                size="lg"
                            >

                                <Pagination.Prev  onClick={()=>{handleGetProductsOfPanagationWithArrow('pre')}}/>

                                {
                                    Array(pageNumber).fill('').map((item, idx) => {

                                        return <Pagination.Item
                                            key={idx}
                                            onClick={() => handelGetNumberCustomOfProducts(idx + 1)}
                                        >{idx + 1}</Pagination.Item>
                                    })
                                }
                                <Pagination.Next  onClick={()=>{handleGetProductsOfPanagationWithArrow('next')}}/>

                            </Pagination>

                        </Row>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>
                        Tin tức
                    </SectionTitle>
                    <SectionBody>
                        <Row>
                            <Col md={4}>
                                <Card >
                                    <Card.Img variant="top" src="https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/40cfed33ec5e27007e4f-scaled.jpg&w=400&h=250&zc=1&q=90" />
                                    <Card.Body>
                                        <Card.Title>Cơ hội mua sắm không cần nhìn giá có 1-0-2 </Card.Title>
                                        <Card.Text>
                                            Cơ hội mua sắm không cần nhìn giá có 1-0-2 đã chính thức bắt đầu. Hàng ngàn sản phẩm với mức...
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card >
                                    <Card.Img variant="top" src="https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/10/AKHCN202-1.jpg&w=400&h=250&zc=1&q=90" />
                                    <Card.Body>
                                        <Card.Title>Cơ hội mua sắm không cần nhìn giá có 1-0-2 </Card.Title>
                                        <Card.Text>
                                            Cơ hội mua sắm không cần nhìn giá có 1-0-2 đã chính thức bắt đầu. Hàng ngàn sản phẩm với mức...
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card >
                                    <Card.Img variant="top" src="https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/BANNER-WEB-SN-7-TUOI.jpg&w=400&h=250&zc=1&q=90" />
                                    <Card.Body>
                                        <Card.Title>Cơ hội mua sắm không cần nhìn giá có 1-0-2 </Card.Title>
                                        <Card.Text>
                                            Cơ hội mua sắm không cần nhìn giá có 1-0-2 đã chính thức bắt đầu. Hàng ngàn sản phẩm với mức...
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </SectionBody>
                </Section>
            </Container>
        </div>
    )
}
