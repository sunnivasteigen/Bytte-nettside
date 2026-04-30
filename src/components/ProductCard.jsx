function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} width="300" />

      <h2>{product.title}</h2>

      <p>Kategori: {product.category}</p>

      <p>Ønsker å bytte mot: {product.wanted}</p>
    </div>
  )
}

export default ProductCard