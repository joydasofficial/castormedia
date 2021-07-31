import React from 'react'

const PortfolioCard = (props) => {
    return (
        <div className='portfolioCard'>
            <div className='portfolioImg'>
                <img src={props.img} alt='portfolio' />
            </div>
            <div className='portfolioInfo'>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <button>Demo</button>
            </div>
        </div>
    )
}

export default PortfolioCard
