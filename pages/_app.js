import Header from '../components/Header'
import '../styles/globals.css'
import  Footer from '../components/footer/Footer'
import '../components/footer/footer.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
