// Signup.jsx lar nye brukere registrere seg med e-post og passord

import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {

  // State for inputfeltene
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Oppretter ny bruker med Firebase Authentication
  async function handleSignup(e) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Bruker opprettet!");
    } catch (error) {

      // Viser feilmelding hvis registrering feiler
      alert(error.message);
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>Lag bruker</h1>

      {/* Registreringsskjema */}
      <form onSubmit={handleSignup}>

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
          Registrer
        </button>
      </form>
    </div>
  );
}

export default Signup;