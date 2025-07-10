import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const GetProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    const fetchAndSetProduct = async () => {
      const data = await GetProduct();
      setProduct(data);
    };

    fetchAndSetProduct();
  }, [id]);

  if (!product) return <p style={styles.loading}>Loading product...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card} key={product.id}>
        <div style={styles.imageWrapper}>
          <img src={product.image} alt={product.title} style={styles.image} />
        </div>
        <div style={styles.content}>
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.description}>
            {product.description.length > 250
              ? product.description.slice(0, 250) + "..."
              : product.description}
          </p>
          <div style={styles.footer}>
            <strong style={styles.price}>${product.price}</strong>
            <button style={styles.button}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loading: {
    textAlign: "center",
    padding: "50px",
    fontSize: "1.2rem",
    color: "#666",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  card: {
    maxWidth: "900px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    overflow: "hidden",
  },
  imageWrapper: {
    flex: "1",
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "contain",
  },
  content: {
    flex: "2",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#28a745",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};
