import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("clothes");
  const [description, setDescription] = useState("");
  const [wants, setWants] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await addDoc(collection(db, "products"), {
      title: title,
      category: category,
      description: description,
      wants: wants,
      image: image,
    });

    alert("Produkt lagt til!");

    setTitle("");
    setCategory("clothes");
    setDescription("");
    setWants("");
    setImage("");
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Legg til produkt</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Tittel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="clothes">Klær</option>
          <option value="electronics">Elektronikk</option>
          <option value="furniture">Møbler</option>
        </select>

        <br />

        <input
          placeholder="Beskrivelse"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <input
          placeholder="Ønsker å bytte mot"
          value={wants}
          onChange={(e) => setWants(e.target.value)}
        />

        <br />

        <input
          placeholder="Bilde-URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br />

        <button type="submit">Legg til produkt</button>
      </form>
    </div>
  );
}

export default AddProduct;