import React from 'react'
import { Carousel } from 'react-bootstrap'
export const Slider = () => {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://360boutique.vn/wp-content/uploads/2021/12/BANNER-WEB-1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://360boutique.vn/wp-content/uploads/2021/12/Banner-WEb.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    )
}
