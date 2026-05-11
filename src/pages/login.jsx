// Login.jsx lar brukeren logge inn på nettsiden

import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  // State for inputfeltene
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Brukes for å sende brukeren til forsiden etter login
  const navigate = useNavigate();

  // Logger inn brukeren med Firebase Authentication
  async function handleLogin(e) {
    e.preventDefault();

    try {

      // Sjekker om e-post og passord er riktig
      await signInWithEmailAndPassword(auth, email, password);

      alert("Logget inn!");

      // Sender brukeren tilbake til forsiden
      navigate("/");

    } catch (error) {

      // Viser feilmelding hvis login feiler
      alert(error.message);
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>Logg inn</h1>

      {/* Login-skjema */}
      <form onSubmit={handleLogin}>

        {/* E-post */}
        <input
          type="email"
          placeholder="E-post"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        {/* Passord */}
        <input
          type="password"
          placeholder="Passord"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Logg inn
        </button>
      </form>
    </div>
  );
}

export default Login;