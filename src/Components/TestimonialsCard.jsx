import React from 'react'

const TestimonialsCard = (props) => {
    return (
        <div className='testiCard' >
          <div className='feedback'>
                <p>{props.feedback}</p>
            </div>
            <div className='clientContainer'>
                <div className='clientImgContainer'>
                    <img src={props.img} alt='ClientImg' />
                </div>
                <div className='clientInfo'>
                    <h3>{props.cname}</h3>
                    <p>{props.cdesc}</p>
                </div>
            </div>

          
        </div>
    )
}

export default TestimonialsCard;
