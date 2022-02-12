import React from 'react'
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { Section, SectionBody } from './Section'


export const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='footer__top'>
                    <Row className='align-items-center'>
                        <Col md={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-plus" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z" />
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                            <span>
                                Đăng ký nhận tin
                            </span>
                        </Col>
                        <Col md={6}>
                            <InputGroup >
                                <FormControl
                                    placeholder="Nhận email tư vấn ..."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"

                                />
                                <InputGroup.Text id="basic-addon1">
                                    <button>
                                        Đăng ký
                                    </button>
                                </InputGroup.Text>

                            </InputGroup>
                        </Col>
                        <Col md={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <b>Hỗ trợ : <i>0796810468</i></b>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <Section>
                    <SectionBody>
                        <Row>
                            <Col md={3}>
                                <h3>HỆ THỐNG CỬA HÀNG</h3>
                                <p>242 Thái Hà, Q.Đống Đa, HN</p>
                                <p>11 Dương Quảng Hàm, Q.Cầu Giấy, HN</p>
                                <p>63 Đại Cổ Việt, Q.Hai Bà Trưng, HN</p>
                                <p>296 Nguyễn Trãi, Q.Nam Từ Liêm, HN</p>
                                <p>242 Thái Hà, Q.Đống Đa, HN</p>
                                <p>252 Hồ Tùng Mậu, Q.Bắc Từ Liêm, 360Kids</p>
                            </Col>
                            <Col md={3}>
                                <h3>CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</h3>
                                <p>Hướng Dẫn Mua Hàng</p>
                                <p>Hình Thức Thanh Toán</p>
                                <p>Quy Định Về Bảo Mật Thông Tin</p>
                                <p>Chính Sách Đổi Trả Hàng</p>
                                <p>Giới Thiệu</p>
                            </Col>
                            <Col md={3}>
                                      <h3>ĐỊA CHỈ</h3>
                                      <p>Trụ sở: Đội 6 Phương Đình, Đan Phượng, Hà Nội</p>
                                      <p>Facebook thời trang nam: 360Boutique</p>
                                      <p>Facebook kids: 360Kids</p>
                                      <p>Website: https://360boutique.vn/</p>
                            </Col>
                            <Col md={3}>
                               <h3>Fanpage</h3>
                               <p>zonez@gmail.com</p>
                            </Col>
                           
                        </Row>
                    </SectionBody>
                </Section>
            </Container>
        </div>
    )
}
