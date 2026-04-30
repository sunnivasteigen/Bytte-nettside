import hettegenser from "../assets/hettegenser.png";

function Clothes() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Klær</h1>
      <p>Her finner du klær som kan byttes.</p>

      <img src={hettegenser} width="250" />

      <h2>Hettegenser</h2>
      <p>Ønsker å bytte mot jeans</p>
    </div>
  );
}

export default Clothes;