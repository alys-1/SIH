import React, { useState } from "react";
import styles from "./Product.module.css"; // Importing CSS module

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [predictedPrice, setPredictedPrice] = useState("");
  const [demandPrice, setDemandPrice] = useState("");
  const [images, setImages] = useState([]);

  const handleProductNameChange = (event) => setProductName(event.target.value);
  const handleProductQuantityChange = (event) =>
    setProductQuantity(event.target.value);
  const handleProductPriceChange = (event) =>
    setProductPrice(event.target.value);
  const handleProductDetailsChange = (event) =>
    setProductDetails(event.target.value);
  const handlePredictedPriceChange = (event) =>
    setPredictedPrice(event.target.value);
  const handleDemandPriceChange = (event) => setDemandPrice(event.target.value);
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleDeleteImage = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      productName,
      productQuantity,
      productPrice,
      productDetails,
      predictedPrice,
      demandPrice,
      images,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Product Details</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <label htmlFor="product-name" className={styles.label}>
            Product name:
          </label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={handleProductNameChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="product-quantity" className={styles.label}>
            Product quantity:
          </label>
          <input
            type="number"
            id="product-quantity"
            value={productQuantity}
            onChange={handleProductQuantityChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="product-price" className={styles.label}>
            Product price:
          </label>
          <input
            type="number"
            id="product-price"
            value={productPrice}
            onChange={handleProductPriceChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="product-details" className={styles.label}>
            Product details:
          </label>
          <textarea
            id="product-details"
            value={productDetails}
            onChange={handleProductDetailsChange}
            className={styles.textarea}
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="demand-price" className={styles.label}>
            Demand price:
          </label>
          <input
            type="number"
            id="demand-price"
            value={demandPrice}
            onChange={handleDemandPriceChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputRow}>
          <button type="button" className={styles.button}>
            Predict price
          </button>
        </div>

        <div className={styles.imageUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
            className={styles.uploadInput}
          />
          <div className={styles.imagesGrid}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Product ${index + 1}`}
                  className={styles.uploadedImage}
                />
                <button
                  type="button"
                  className={styles.deleteButton}
                  onClick={() => handleDeleteImage(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Add new product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
