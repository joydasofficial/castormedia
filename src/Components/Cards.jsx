import React from 'react';

const Cards = (props) => {

    return (
        <>
            <div className='card' key={props.key}>
                <div className='icon'>
                    {props.icon}
                </div>
                <div className='card_info'>
                    <h3 className='card_name'>{props.sname}</h3>
                    <span className='card_title'>{props.sdesc}</span>

                    <a href={props.lmore} target='_blank' className='learnMore' >learn more</a>
                </div>
            </div>
        </>
    );
};

export default Cards;