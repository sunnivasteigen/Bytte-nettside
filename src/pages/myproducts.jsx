// MyProducts.jsx viser produkter som tilhører innlogget bruker

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { Link } from "react-router-dom";

function MyProducts() {

  // State som lagrer brukerens produkter
  const [products, setProducts] = useState([]);

  useEffect(() => {

    // Henter produkter fra Firestore
    async function fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));

      // Filtrerer slik at kun produkter fra innlogget bruker vises
      const productList = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(
          (product) => product.ownerId === auth.currentUser?.uid
        );

      setProducts(productList);
    }

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >

      <h1>Mine produkter</h1>

      {/* Vises hvis brukeren ikke har lagt ut produkter */}
      {products.length === 0 && (
        <p>
          Du har ikke lagt ut noen produkter enda.
        </p>
      )}

      {/* Produktkort */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (

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
                border: "1px solid lightgray",
                borderRadius: "10px",
                padding: "20px",
                width: "250px",
                backgroundColor: "white",
              }}
            >
              <img
                src={product.image}
                width="200"
                style={{ borderRadius: "10px" }}
              />

              <h2>{product.title}</h2>

              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <br />

      <Link to="/">← Tilbake</Link>
    </div>
  );
}

export default MyProducts;