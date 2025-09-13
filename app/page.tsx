 const vehicles = [
  { 
    id: 1, 
    name: "2020 Honda Civic", 
    type: "Car", 
    price: 18500, 
    year: 2020,
    mileage: "35,000 miles",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop",
    featured: true
  },
  { 
    id: 2, 
    name: "2021 Yamaha R6", 
    type: "Bike", 
    price: 12900, 
    year: 2021,
    mileage: "8,500 miles",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    featured: true
  },
  { 
    id: 3, 
    name: "2019 Toyota RAV4", 
    type: "Car", 
    price: 24900, 
    year: 2019,
    mileage: "42,000 miles",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop"
  },
  { 
    id: 4, 
    name: "2018 Harley Davidson", 
    type: "Bike", 
    price: 15800, 
    year: 2018,
    mileage: "12,000 miles",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <div className="logo">🚗</div>
          <span>AutoMart</span>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search cars, bikes..." />
        </div>
        <div className="nav-links">
          <a href="#">🚗 Cars</a>
          <a href="#">🏍️ Bikes</a>
          <a href="#">❤️ Saved</a>
          <a href="#">💰 Sell</a>
          <a href="#">👤</a>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h1>Find Your Perfect<br/><span className="highlight">Second-Hand Vehicle</span></h1>
          <p>Discover thousands of quality pre-owned cars and bikes from trusted sellers.<br/>Your next adventure starts here.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Browsing →</button>
            <button className="btn-secondary">▶ How It Works</button>
          </div>
          <div className="stats">
            <div className="stat">
              <h3>10K+</h3>
              <p>Vehicles</p>
            </div>
            <div className="stat">
              <h3>5K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>99%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </main>

      <section className="search-filters">
        <div className="filter-row">
          <select><option>All vehicles</option></select>
          <select><option>Any make</option></select>
          <input type="text" placeholder="Any model" />
          <select><option>Any price</option></select>
          <input type="text" placeholder="Enter city or zip" />
          <button className="search-btn">🔍 Search</button>
        </div>
        <button className="advanced-filters">⚙️ Advanced Filters</button>
      </section>

      <section className="categories">
        <h2>Browse by Category</h2>
        <p>Find exactly what you're looking for</p>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-icon blue">🚗</div>
            <h3>Cars</h3>
            <p>Sedans, SUVs, Trucks & More</p>
          </div>
          <div className="category-card">
            <div className="category-icon orange">🏍️</div>
            <h3>Motorcycles</h3>
            <p>Sport, Cruiser, Touring & More</p>
          </div>
        </div>
      </section>

      <section className="featured-vehicles">
        <div className="section-header">
          <h2>Featured Vehicles</h2>
          <a href="#" className="view-all">View All →</a>
        </div>
        <p>Hand-picked premium listings</p>
        
        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              {vehicle.featured && <span className="featured-badge">Featured</span>}
              <div className="vehicle-image">
                <img src={vehicle.image} alt={vehicle.name} />
                <button className="heart-btn">❤️</button>
              </div>
              <div className="vehicle-info">
                <div className="vehicle-header">
                  <h3>{vehicle.name}</h3>
                  <span className="vehicle-type">{vehicle.type}</span>
                </div>
                <div className="price">${vehicle.price.toLocaleString()}</div>
                <div className="details">
                  <div className="detail">📅 {vehicle.year}</div>
                  <div className="detail">🛣️ {vehicle.mileage}</div>
                  <div className="detail">📍 {vehicle.location}</div>
                </div>
                <div className="card-actions">
                  <button className="btn-outline">👁️ View Details</button>
                  <button className="btn-primary">Contact Seller</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose AutoMart?</h2>
        <p>We make buying and selling second-hand vehicles simple, safe, and reliable</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Quality Guaranteed</h3>
            <p>Every vehicle is inspected and comes with detailed history reports.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick & Easy</h3>
            <p>Browse, compare, and connect with sellers in minutes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Trusted Platform</h3>
            <p>Join thousands of satisfied customers who found their perfect vehicle.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Community Driven</h3>
            <p>Real reviews and ratings from verified buyers and sellers.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Find Your Next Vehicle?</h2>
        <p>Join thousands of satisfied customers who found their perfect match</p>
        <div className="cta-buttons">
          <button className="btn-primary">Start Shopping Now</button>
          <button className="btn-outline">Sell Your Vehicle</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">🚗</div>
          <span>AutoMart</span>
        </div>
        <p>© 2024 AutoMart. All rights reserved. Your trusted second-hand vehicle marketplace.</p>
      </footer>
    </div>
  )
}