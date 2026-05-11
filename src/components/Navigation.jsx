// Navigation.jsx viser menyen øverst på nettsiden

import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function Navigation() {

  // Lagrer hvilken bruker som er logget inn
  const [user, setUser] = useState(null);

  // Lytter etter innlogging/utlogging
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Logger brukeren ut
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >

      {/* Venstre side av menyen */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={linkStyle} to="/">Hjem</Link>

        {/* Vises kun når bruker er logget inn */}
        {user && <Link style={linkStyle} to="/add">Legg til produkt</Link>}

        {user && <Link style={linkStyle} to="/my-products">Mine produkter</Link>}
      </div>

      {/* Høyre side av menyen */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

        {/* Vises hvis ingen bruker er logget inn */}
        {!user ? (
          <>
            <Link style={linkStyle} to="/login">Logg inn</Link>
            <Link style={linkStyle} to="/signup">Lag bruker</Link>
          </>
        ) : (

          /* Vises når bruker er logget inn */
          <>
            <span style={{ color: "white" }}>{user.email}</span>

            <button onClick={handleLogout}>
              Logg ut
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

// Styling for lenkene i menyen
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navigation;