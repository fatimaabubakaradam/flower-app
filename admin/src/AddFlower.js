import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddFlower = () => {
  const [flower, setFlower] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    photo: null, // Changed from 'image' to 'photo' to match backend
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => setFlower({ ...flower, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFlower({ ...flower, photo: file });
    }
  };

  const handleUploadClick = () => fileInputRef.current.click();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!flower.name || !flower.category || !flower.price || !flower.description || !flower.photo) {
      Swal.fire("Error!", "Please fill in all fields and upload a photo.", "error");
      return;
    }

    const formData = new FormData();
    Object.keys(flower).forEach((key) => {
      formData.append(key, flower[key]);
    });

    try {
      const response = await axios.post("http://localhost:3000/api/flowers", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response:", response.data);
      Swal.fire("Success!", "Flower added successfully!", "success");

      setFlower({ name: "", category: "", price: "", description: "", photo: null });
    } catch (error) {
      console.error("Error submitting flower:", error);
      Swal.fire("Error!", "Failed to add flower", "error");
    }
  };

  return (
    <div className="add-flower-container">
      <h2>Add a New Flower</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" hidden />
        <div className="upload-box" onClick={handleUploadClick}>
          {flower.photo ? (
            <img src={URL.createObjectURL(flower.photo)} alt="Preview" className="preview-image" />
          ) : (
            <div>📷 Upload</div>
          )}
        </div>
        <input type="text" name="name" placeholder="Name" value={flower.name} onChange={handleChange} required />
        <div className="input-row">
          <input type="text" name="category" placeholder="Category" value={flower.category} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price" value={flower.price} onChange={handleChange} required />
        </div>
        <textarea name="description" placeholder="Description" value={flower.description} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFlower;
