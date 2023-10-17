import React from 'react'
import Header from '../components/Header/Header'
import Featured from '../components/Featured/Featured'
import ProductsYouMayLike from '../components/ProductsYouMayLike/ProductsYouMayLike'
import Offerings from '../components/Offerings/Offerings'

export default function Home() {
  return (
    <>
      <Header/>
      <Featured/>
      <ProductsYouMayLike/>
      <Offerings/>
    </>
  )
}
