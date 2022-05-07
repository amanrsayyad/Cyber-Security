import React, {useEffect} from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const ContactPage = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
      })
      
    return (
        <>
            <Navbar/>
            <Contact />
            <Footer />   
        </>
    )
}

export default ContactPage
