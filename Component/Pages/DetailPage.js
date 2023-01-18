import React from 'react'
import Header from "../Header/Header";
import Banner from "../InnerBanner/Banner";
import Adddetail from '../DetailPage/Adddetail';
import Footer from '../Footer/Footer';
import Ready from '../Ready/Ready';
import Search from '../Popular-Search/Search';
import Similary from '../Similary-Houses/Similary';
import Partner from "../Partner/Partner"

const DetailPage = () => {
  return (
   <>
    <Header/>
    <Banner/>
    <Adddetail/>
    <Similary/>
    <Search/>
    <Ready/>
    <Partner/>
    <Footer/>
   </>
  )
}

export default DetailPage
