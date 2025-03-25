import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("http://localhost:3000/api/flowers");
      setFlowers(data);
    } catch (err) {
      console.error("Error fetching flowers:", err);
      setError("Failed to fetch flowers.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This flower will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/api/flowers/${id}`);
          setFlowers((prevFlowers) => prevFlowers.filter((flower) => flower._id !== id));
          Swal.fire("Deleted!", "The flower has been removed.", "success");
        } catch (err) {
          Swal.fire("Error!", "Failed to delete flower", "error");
        }
      }
    });
  };

  if (loading) return <p>Loading flowers...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="flowers-container" style={styles.container}>
      {flowers.length > 0 ? (
        flowers.map((flower) => {
          const imageUrl = flower.image.startsWith("/uploads/")
            ? `http://localhost:3000${flower.image}`
            : `http://localhost:3000/uploads/${flower.image}`;

          return (
            <div key={flower._id} className="flower-card" style={styles.card}>
              <div className="image-container" style={styles.imageContainer}>
                <img
                  src={imageUrl}
                  alt={flower.name}
                  className="flower-image"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                  style={styles.image}
                />
                <button className="delete-icon" onClick={() => handleDelete(flower._id)} style={styles.deleteButton}>
                  ×
                </button>
              </div>
              <div className="flower-details" style={styles.details}>
                <p><strong>Name:</strong> {flower.name}</p>
                <p><strong>Category:</strong> {flower.category}</p>
                <p><strong>Price:</strong> ${flower.price}</p>
                <p><strong>Description:</strong> {flower.description}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No flowers available.</p>
      )}
    </div>
  );
};

const styles = {
  container: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" },
  imageContainer: { position: "relative" },
  image: { width: "150px", height: "150px", objectFit: "cover", borderRadius: "5px" },
  deleteButton: {
    position: "absolute", top: "5px", right: "5px", fontSize: "12px",
    background: "red", color: "white", border: "none", borderRadius: "50%", width: "24px", height: "24px",
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
  },
  details: { marginTop: "10px", textAlign: "left" },
};

export default Flowers;
