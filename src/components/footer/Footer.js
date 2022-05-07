import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import './FooterStyles.css'
import stylotech from '../../assets/stylotech.png'

import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <img src={stylotech} alt="" /><h2>StyloTech</h2>
                    </div>
                    <Link to="/">
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about-us">About Us</Link>
                        <a href="https://wa.me/918600000084" target="_blank" rel="norefrer">Contact</a>
                    </div>
                    <div className="col">
                        <h3>Phone Number</h3>
                        <p>+91 8668431882</p>
                        <h3>Emails</h3>
                        <p>info@stylotech.in</p>
                        <p>hr@stylotech.in</p>
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <a href="https://www.instagram.com/stylotech_19/" target="_black" rel="norefrer">
                            <FiInstagram className='social-icon' />
                            </a>
 
                            <a href="https://www.facebook.com/StyloTech-115523634376939" target="_black" rel="norefrer">
                                <FiFacebook className='social-icon' />
                            </a>
                            
                            <a href="/">
                            <FiLinkedin className='social-icon' />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
