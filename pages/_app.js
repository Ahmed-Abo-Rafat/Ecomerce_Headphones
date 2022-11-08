import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {StateContext} from '../context/StateContext'
import {Toaster} from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContext>
          <Toaster />
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
      </StateContext>
    </>
  )
}

export default MyApp
