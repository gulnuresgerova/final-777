import React from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'


import Rentalvideo from '../../../components/ui/Rentalvideo'
import Rntbg from '../../../components/ui/Rntbg'
import Site from '../stop/Site'
import Bgv from '../../../components/ui/Bgv'
import Spbg from '../../../components/ui/Spbg'
import Shiftup from '../../../components/shiftup/Shiftup'
import Rntbg2 from '../../../components/ui/Rntbg2'
import Rntbg3 from '../../../components/ui/Rntbg3'

const index = () => {
  return (
    
    <div className=' bg-black'>
        <Header/>
        <Rentalvideo/>
        <Site/>
        <Bgv/>
        <Spbg/>
      
      <Rntbg2/>
      <Shiftup/>
      <Rntbg/>
      <Rntbg3/>
      
      
        <Footer/>
    </div>
  )
}

export default index