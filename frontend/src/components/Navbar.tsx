import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        Restaurant
      </a>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <button className="navbar-cart">Cart</button>
    </nav>
  )
}

export default Navbar