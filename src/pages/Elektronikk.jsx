import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Elektronikk() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Elektronikk</h1>

      {products
        .filter((p) => p.category === "electronics")
        .map((product) => (
          <div key={product.id}>
            <img src={product.image} width="200" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Ønsker å bytte mot: {product.wants}</p>
          </div>
        ))}
        <Link to="/">← Tilbake</Link>
    </div>
  );
}

export default Elektronikk;