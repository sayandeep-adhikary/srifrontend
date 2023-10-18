import React from 'react'
import Header from '../components/Header/Header'
import Featured from '../components/Featured/Featured'
import ProductsYouMayLike from '../components/ProductsYouMayLike/ProductsYouMayLike'
import Offerings from '../components/Offerings/Offerings'
import Products from '../components/Products/Products'
import Trending from '../components/Trending/Trending'
import Cities from '../components/Cities/Cities'
import Benifits from '../components/Benifits/Benifits'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import ProductsEE from '../components/ProductsEE/ProductsEE'
import ProductsPharma from '../components/ProductsPharma/ProductsPharma'

export default function Home() {
  return (
    <>
      <Header/>
      <Featured/>
      <ProductsYouMayLike/>
      <Offerings/>
      <Products/>
      <Trending/>
      <ProductsEE/>
      <ProductsPharma/>
      <Cities/>
      <Benifits/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
