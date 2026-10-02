import Navbar from '../components/Navbar'
import restaurantBg from '../assets/restaurant_bg.png'
import './Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${restaurantBg})` }}>
      <Navbar />

      {/* <h1>Restaurant Ordering System</h1> */}
    </div>
  )
}

export default Home