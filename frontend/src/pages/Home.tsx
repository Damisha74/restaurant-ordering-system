import Navbar from '../components/Navbar'
import restaurantBg from '../assets/restaurant_bg.png'
import './Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${restaurantBg})` }}>
       <div className="home-overlay">
         <Navbar />
      <div className="home-content">
        <h1>A Little Taste of Home</h1>
        <h2>Delicious food, made with care and served with love</h2>
         <button className="order-now-button">Order Now</button>
      </div>
      </div>
      {/* <h1>Restaurant Ordering System</h1> */}
    </div>
  )
}

export default Home