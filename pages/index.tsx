// import Head from 'next/head'
// import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Home = (): JSX.Element => (
  <div>
    <Navbar />
    <h1>Homepage</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
      impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam
      magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis
      odit.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
      impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam
      magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis
      odit.
    </p>
    <Footer />
  </div>
)

export default Home
