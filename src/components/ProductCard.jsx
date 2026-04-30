function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} width="200" />

      <h2>{product.title}</h2>

      <p>Kategori: {product.category}</p>

      <p>{product.wants}</p>
    </div>
  )
}

export default ProductCard