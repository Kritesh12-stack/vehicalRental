 export default function Home() {
  return (
    <main className="container">
      <h1>Vehicle Rental</h1>
      <p>Find the perfect car or bike for your journey</p>
      
      <div className="vehicle-types">
        <div className="card">
          <h2>Cars</h2>
          <p>Comfortable rides for any distance</p>
        </div>
        <div className="card">
          <h2>Bikes</h2>
          <p>Quick and efficient city transport</p>
        </div>
      </div>
    </main>
  )
}