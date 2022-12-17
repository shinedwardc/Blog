import Header from './Header';
import Footer from './footer';

const Layout = ({children}) => {
  return (
    <>
    <div className = "content-container">
        <Header/>
        <main>{children}</main>
    </div>
    <Footer />
    </>
  )
}

export default Layout