// ProductDetails.jsx viser informasjon om ett valgt produkt

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ProductDetails() {

  // Henter ID-en fra URL-en
  const { id } = useParams();

  // State som lagrer produktet
  const [product, setProduct] = useState(null);

  useEffect(() => {

    // Henter ett produkt fra Firestore basert på ID
    async function fetchProduct() {
      const docRef = doc(db, "products", id);

      const docSnap = await getDoc(docRef);

      // Sjekker om produktet finnes
      if (docSnap.exists()) {
        setProduct({
          id: docSnap.id,
          ...docSnap.data(),
        });
      }
    }

    fetchProduct();
  }, [id]);

  // Vises mens produktet lastes inn
  if (!product) {
    return <p>Laster produkt...</p>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >

      {/* Tilbakeknapp */}
      <Link to="/">
        ← Tilbake til forsiden
      </Link>

      <h1>{product.title}</h1>

      {/* Produktbilde */}
      <img
        src={product.image}
        width="400"
        style={{ borderRadius: "10px" }}
      />

      {/* Produktinformasjon */}
      <p>{product.description}</p>

      <p>
        <strong>Ønsker å bytte mot:</strong>
        {" "}
        {product.wants}
      </p>

      <p>
        <strong>Kategori:</strong>
        {" "}
        {product.category}
      </p>

      <p>
        <strong>Lagt ut av:</strong>
        {" "}
        {product.ownerEmail}
      </p>

      {/* Kontaktknapp */}
      <a href={`mailto:${product.ownerEmail}`}>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Kontakt eier
        </button>
      </a>
    </div>
  );
}

export default ProductDetails;