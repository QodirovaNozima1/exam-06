import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Pick from '../../components/pick/Pick'
import Product from '../../components/product/Product'
import Information from '../../components/information/Information'
import Posts from '../../components/posts/Posts'
import Advertisiment from '../../components/advertisiment/Advertisiment'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Pick/>
        <Product/>
        <Information/>
        <Posts/>
        <Advertisiment/>
    </div>
  )
}

export default Home