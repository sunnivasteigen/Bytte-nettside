// Home.jsx er forsiden til nettsiden

import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eff6ff",
        textAlign: "center",
        padding: "50px",
      }}
    >

      {/* Overskrift */}
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Bytte-nettside
      </h1>

      {/* Kort beskrivelse av nettsiden */}
      <p
        style={{
          fontSize: "18px",
          marginBottom: "30px",
        }}
      >
        Bytt ting du ikke trenger mot noe du ønsker deg.
      </p>

      <h2 style={{ marginTop: "50px" }}>
        Kategorier
      </h2>

      {/* Kategorikort */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >

        {/* Klær */}
        <Link
          to="/clothes"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div style={cardStyle}>
            <img
              src="/images/clothes.png"
              width="250"
              style={imageStyle}
            />

            <h2>Klær</h2>
          </div>
        </Link>

        {/* Elektronikk */}
        <Link
          to="/elektronikk"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div style={cardStyle}>
            <img
              src="/images/elektronikk.png"
              width="250"
              style={imageStyle}
            />

            <h2>Elektronikk</h2>
          </div>
        </Link>

        {/* Møbler */}
        <Link
          to="/mobler"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div style={cardStyle}>
            <img
              src="/images/mobler.png"
              width="250"
              style={imageStyle}
            />

            <h2>Møbler</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Styling for kategorikortene
const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  width: "280px",
  cursor: "pointer",
};

// Styling for bildene
const imageStyle = {
  borderRadius: "12px",
  height: "180px",
  objectFit: "cover",
};

export default Home;