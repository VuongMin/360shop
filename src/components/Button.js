import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({type, iconsvg, text, click }) => {

    return (
    
            <div className='button'
                type={type}
                onClick={typeof click =='function'?(e)=>click(e):null}
            >

                {iconsvg}
                {text}

            </div>
 

    )
}
