import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb'
import { Product } from '../components/Product'
import { Section, SectionBody } from '../components/Section'
import { useStateValue } from '../store/StateProvider'


export const Winter = () => {
    const [{ products }, dispatch] = useStateValue()
    const [productsWinter,setProductsWinter] =   useState()
    useEffect(()=>{
    setProductsWinter(products.filter(item=>item.categories.find(i=>i.slug=='thu-dong-moi')))
    },[])
    return (
        <div className='winnter__page'>
            <Container>
                <BreadCrumb content={{ cat: '', name: 'new autumn and winter' }} />
            </Container>
            <Container>
                <Section>
                    <SectionBody>
                      <Row>
                          {
                            productsWinter?.map(product => {
                                    return (
                                        <Col md={3}
                                            key={product.id}>
                                            <Product product={product}></Product>
                                        </Col>)

                                })
                          }
                      </Row>
                    </SectionBody>
                </Section>
            </Container>
        </div>
    )
}
