import Navbar from './Navbar'
import Footer from './Footer'

const Layout: React.FunctionComponent = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
