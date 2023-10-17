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

export default function Home() {
  return (
    <>
      <Header/>
      <Featured/>
      <ProductsYouMayLike/>
      <Offerings/>
      <Products/>
      <Trending/>
      <Cities/>
      <Benifits/>
      <Testimonials/>
    </>
  )
}
