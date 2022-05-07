import React, {useEffect} from 'react'

import Navbar from '../components/navbar/Navbar'
import Recovery from '../components/recovery/Recovery'
import Footer from '../components/footer/Footer'
import Services from '../components/services/Services'

const RecoveryPage = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
      })
      
    return (
        <>
           <Navbar /> 
           <Recovery />
           <Services />
           <Footer />
        </>
    )
}

export default RecoveryPage
