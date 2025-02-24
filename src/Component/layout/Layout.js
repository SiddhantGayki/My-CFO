import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({Childern}) => {
  return (
    <>
      <Header/>
      <div className='content'>
        {Childern}
        <h1>Welcome To My CFO</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Layout