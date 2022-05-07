import React from 'react'
import './HeroStyles.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1>Secure</h1>
                    <h1 className='blue'>Your</h1>
                    <h1>Company</h1>
                    <p>Discover your vulnerabilities before they can be used against you.</p>
                    <div><button>Learn More</button></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
