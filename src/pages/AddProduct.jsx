
import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("Du må være logget inn for å legge til produkt.");
      return;
    }

    await addDoc(collection(db, "products"), {
      title,
      description,
      category,
      imageUrl,
      ownerId: auth.currentUser.uid,
      ownerEmail: auth.currentUser.email,
      createdAt: serverTimestamp(),
    });

    alert("Produkt lagt til!");

    setTitle("");
    setDescription("");
    setCategory("");
    setImageUrl("");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Legg til produkt</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Produktnavn"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Beskrivelse"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br /><br />

      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Velg kategori</option>
  <option value="clothes">Klær</option>
  <option value="electronics">Elektronikk</option>
  <option value="furniture">Møbler</option>
</select>

        <br /><br />

        <button type="submit">Legg til produkt</button>
      </form>
    </div>
  );
}

export default AddProduct;