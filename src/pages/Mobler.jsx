// Mobler.jsx viser alle produkter i kategorien møbler

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function Mobler() {

  // State som lagrer produkter fra Firebase
  const [products, setProducts] = useState([]);

  useEffect(() => {

    // Henter alle produkter fra Firestore
    async function fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));

      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productList);
    }

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eff6ff",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1>Møbler</h1>

      <p>
        Her finner du møbler som kan byttes.
      </p>

      {/* Produktkort */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {products

          // Viser kun produkter i kategorien møbler
          .filter(
            (p) =>
              p.category === "Møbler" ||
              p.category === "mobler"
          )

          .map((product) => (

            // Klikk sender brukeren til produktsiden
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  width: "260px",
                }}
              >
                <img
                  src={
                    product.imageUrl ||
                    "/images/mobler.png"
                  }
                  width="220"
                  style={{
                    borderRadius: "12px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />

                <h2>{product.title}</h2>

                <p>{product.description}</p>

                {product.wants && (
                  <p>
                    Ønsker å bytte mot: {product.wants}
                  </p>
                )}
              </div>
            </Link>
          ))}
      </div>

      <br />

      <Link to="/">← Tilbake</Link>
    </div>
  );
}

export default Mobler;