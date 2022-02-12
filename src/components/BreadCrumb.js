import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export const BreadCrumb = ({content}) => {

    return (
        <div className='breadcrum' style={{padding:' 10px 5px',background:'#f5f5f5'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="#"><Link to={'/'}>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item >
                  {
                      content.cat[0]?content.cat[0].name:'-'
                  }
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{content.name}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
