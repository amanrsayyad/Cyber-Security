import React,{useEffect} from 'react'

import Navbar from '../components/navbar/Navbar'
import Cloud from '../components/cloud/Cloud'
import Footer from '../components/footer/Footer'

const CloudPage = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
      })
      
    return (
        <>
           <Navbar /> 
           <Cloud />
           <Footer />
        </>
    )
}

export default CloudPage
