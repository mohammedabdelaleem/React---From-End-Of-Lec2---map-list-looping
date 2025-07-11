//  import axiosInstance from "../axios config/AxiosInstance";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios config/AxiosInstance";
import { useSelector } from "react-redux";

export default function Products() {
  const [products, setProducts] = useState([]);
  const loader = useSelector((state) => state.loader.isLoading);

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={styles.container}>
      {loader && (
        <div style={{ width: "100vw", height: "10vh", paddingBlock: "20%" }}>
          <div className="d-flex justify-content-center ">
            <div className="spinner-border" role="status"></div>
          </div>
        </div>
      )}

        {products.map((p) => (
        <div style={styles.card} key={p.id}>
          <img src={p.image} alt={p.title} style={styles.image} />
          <div style={styles.content}>
            <h5 style={styles.title}>{p.title}</h5>
            <p style={styles.description}>
              {p.description.length > 100
                ? p.description.slice(0, 100) + "..."
                : p.description}
            </p>
            <div style={styles.footer}>
              <Link to={`/products/${p.id}`} style={styles.button}>
                Details
              </Link>
              <strong>${p.price}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
    boxSizing: "border-box",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "280px",
    height: "450px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
  content: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  title: {
    fontSize: "1rem",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "0.875rem",
    flexGrow: 1,
    color: "#555",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px",
  },
};
