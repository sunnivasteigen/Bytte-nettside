import { Link } from "react-router-dom";


function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Bytte-nettside</h1>
      <h2>Kategorier</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "60px" }}>
       <Link to="/clothes">
  <div>
    <h2>Klær</h2>
    <img src="/images/clothes.png" width="300" />
  </div>
</Link>
        <div>
          <h2>Elektronikk</h2>
          <img src="/images/elektronikk.png" width="300" />
        </div>

        <div>
          <h2>Møbler</h2>
          <img src="/images/mobler.png" width="300" />
        </div>
      </div>
    </div>
  )
}

export default Home